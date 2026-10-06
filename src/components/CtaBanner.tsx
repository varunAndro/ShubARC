import ArrowForward from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ctaImage } from '../data'
import { fonts } from '../theme'
import { useConsult } from './ConsultDialog'

export function CtaBanner() {
  const openConsult = useConsult()

  return (
    <Box component="section" id="contact" aria-labelledby="contact-heading" sx={{ pb: { xs: 8, md: 11 }, scrollMarginTop: '88px' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            minHeight: { xs: 300, md: 280 },
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#1C1917',
          }}
        >
          <Box
            component="img"
            src={ctaImage}
            alt=""
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(16, 14, 12, 0.58)' }} />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 6 },
              alignItems: { md: 'center' },
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                id="contact-heading"
                component="h2"
                sx={{
                  color: '#fff',
                  fontFamily: fonts.serif,
                  fontWeight: 600,
                  fontSize: { xs: 36, md: 48 },
                  lineHeight: 1.1,
                }}
              >
                Have a space in mind?
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  color: 'rgba(255,255,255,0.86)',
                  fontFamily: fonts.serif,
                  fontSize: { xs: 26, md: 32 },
                }}
              >
                Let&apos;s build it together.
              </Typography>
            </Box>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              onClick={() => openConsult()}
              sx={{
                alignSelf: { xs: 'stretch', md: 'center' },
                flexShrink: 0,
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Start Your Project
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
