import Instagram from '@mui/icons-material/Instagram'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'
import PlaceOutlined from '@mui/icons-material/PlaceOutlined'
import WhatsApp from '@mui/icons-material/WhatsApp'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { navItems } from '../data'
import { colors } from '../theme'
import { useConsult } from './ConsultDialog'
import { Logo } from './Logo'

export function Footer() {
  const openConsult = useConsult()

  return (
    <Box component="footer" sx={{ bgcolor: colors.footer, color: '#fff', py: { xs: 4, md: 3.5 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: { lg: 'center' },
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <Logo light />
        <Stack
          component="nav"
          aria-label="Footer"
          direction="row"
          useFlexGap
          sx={{ flexWrap: 'wrap', gap: { xs: 1.5, md: 2.5 } }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              underline="none"
              sx={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, '&:hover': { color: '#fff' } }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
        <Stack spacing={1} sx={{ alignItems: { xs: 'flex-start', lg: 'flex-end' } }}>
          <Stack direction="row" spacing={0.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Button
              onClick={() => openConsult()}
              startIcon={<PhoneOutlined sx={{ fontSize: 18 }} />}
              sx={{ color: '#fff', minWidth: 0 }}
            >
              Call
            </Button>
            <Button
              onClick={() => openConsult()}
              startIcon={<WhatsApp sx={{ fontSize: 18 }} />}
              sx={{ color: '#fff', minWidth: 0 }}
            >
              WhatsApp
            </Button>
            <Button
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              startIcon={<Instagram sx={{ fontSize: 18 }} />}
              sx={{ color: '#fff', minWidth: 0 }}
            >
              Instagram
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={0.6}
            sx={{ alignItems: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 13, pr: 1 }}
          >
            <PlaceOutlined sx={{ fontSize: 16 }} />
            <Box
              component="a"
              href="https://www.google.com/maps/search/?api=1&query=Indore%2C%20Madhya%20Pradesh"
              target="_blank"
              rel="noreferrer"
              sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}
            >
              Indore, Madhya Pradesh
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
