import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'
import Menu from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { useEffect, useState } from 'react'
import { navItems } from '../data'
import { Logo } from './Logo'
import { useConsult } from './ConsultDialog'

export function Header() {
  const openConsult = useConsult()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const nodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const navLink = (label: string, id: string, inDrawer = false) => (
    <Link
      key={id}
      href={`#${id}`}
      underline="none"
      onClick={() => setMenuOpen(false)}
      sx={{
        fontSize: inDrawer ? 18 : 14.5,
        fontWeight: active === id ? 700 : 500,
        color: active === id ? '#1C1917' : '#4A453F',
        py: inDrawer ? 1.1 : 0,
        '&:hover': { color: '#1C1917' },
      }}
    >
      {label}
    </Link>
  )

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        color: '#1C1917',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'transparent' : '#EFEBE6',
        boxShadow: scrolled ? '0 8px 24px rgba(28, 25, 23, 0.06)' : 'none',
        transition: 'box-shadow .2s ease, border-color .2s ease',
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 80 } }}>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Logo />
          </Box>
          <Stack
            component="nav"
            aria-label="Primary"
            direction="row"
            spacing={2.5}
            sx={{ display: { xs: 'none', lg: 'flex' } }}
          >
            {navItems.map((item) => navLink(item.label, item.id))}
          </Stack>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => openConsult()}
              endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
              sx={{ display: { xs: 'none', md: 'inline-flex' }, flexShrink: 0, whiteSpace: 'nowrap' }}
            >
              Get a Consultation
            </Button>
            <IconButton
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              sx={{ display: { lg: 'none' } }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{ paper: { sx: { width: 300, bgcolor: '#F6F3EE', px: 3, py: 2.5 } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Logo />
          <IconButton aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Stack component="nav" aria-label="Mobile">
          {navItems.map((item) => navLink(item.label, item.id, true))}
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            setMenuOpen(false)
            openConsult()
          }}
          endIcon={<ArrowForward />}
          sx={{ mt: 3 }}
        >
          Get a Consultation
        </Button>
      </Drawer>
    </AppBar>
  )
}
