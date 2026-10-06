import ArrowForward from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { hero } from '../data'
import { fonts } from '../theme'
import { useConsult } from './ConsultDialog'

const slideMarks = ['01', '02', '03']

export function Hero() {
  const openConsult = useConsult()

  return (
    <Box
      component="section"
      id="home"
      aria-label="Featured work"
      sx={{
        position: 'relative',
        height: { xs: 560, sm: 620, md: 'min(720px, calc(100vh - 80px))' },
        overflow: 'hidden',
        bgcolor: '#1C1917',
        scrollMarginTop: '80px',
      }}
    >
      <Box
        component="img"
        src={hero.image}
        alt={hero.alt}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: { xs: '68% center', md: 'center' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(12,10,8,0.35) 0%, rgba(12,10,8,0.72) 42%, rgba(12,10,8,0.55) 100%)',
            md: 'linear-gradient(90deg, rgba(12,10,8,0.72) 0%, rgba(12,10,8,0.42) 34%, rgba(12,10,8,0.05) 62%, rgba(12,10,8,0.22) 100%)',
          },
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: 640, py: { xs: 6, md: 6 }, pb: { xs: 10, md: 8 } }}>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.86)',
              fontSize: { xs: 11, sm: 12 },
              fontWeight: 700,
              letterSpacing: { xs: '0.14em', sm: '0.18em' },
              textTransform: 'uppercase',
            }}
          >
            {hero.kicker}
          </Typography>
          <Typography
            component="h1"
            sx={{
              mt: 2,
              color: '#fff',
              fontFamily: fonts.serif,
              fontWeight: 600,
              fontSize: { xs: 40, sm: 56, md: 72 },
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              whiteSpace: 'pre-line',
            }}
          >
            {hero.title}
          </Typography>
          <Typography
            sx={{
              mt: 2.5,
              maxWidth: 420,
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: 15, md: 18 },
              lineHeight: 1.6,
            }}
          >
            {hero.subtitle}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: { xs: 3, md: 4 } }}>
            <Button
              href="#projects"
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.8)',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
              }}
            >
              View Projects
            </Button>
            <Button
              variant="contained"
              onClick={() => openConsult()}
              sx={{
                bgcolor: '#F7F4EF',
                color: '#1C1917',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': { bgcolor: '#fff' },
              }}
            >
              Get a Consultation
            </Button>
          </Stack>
        </Box>
      </Container>
      <Stack
        direction="row"
        spacing={1.25}
        aria-hidden
        sx={{
          position: 'absolute',
          right: { xs: 16, md: 40 },
          bottom: { xs: 16, md: 24 },
          zIndex: 1,
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: { xs: 24, md: 36 }, height: '1px', bgcolor: 'rgba(255,255,255,0.75)' }} />
        {slideMarks.map((mark, index) => (
          <Typography
            key={mark}
            sx={{
              color: index === 0 ? '#fff' : 'rgba(255,255,255,0.55)',
              textShadow: '0 1px 6px rgba(0,0,0,0.45)',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.08em',
            }}
          >
            {mark}
          </Typography>
        ))}
      </Stack>
    </Box>
  )
}
