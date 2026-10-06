import PlayArrow from '@mui/icons-material/PlayArrow'
import ApartmentOutlined from '@mui/icons-material/ApartmentOutlined'
import WeekendOutlined from '@mui/icons-material/WeekendOutlined'
import VpnKeyOutlined from '@mui/icons-material/VpnKeyOutlined'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Close from '@mui/icons-material/Close'
import { useState } from 'react'
import { aboutFeatures, aboutImage } from '../data'
import { colors, fonts } from '../theme'
import { Eyebrow, Section, SectionHeading } from './Section'
import { useConsult } from './ConsultDialog'

const featureIcons = [ApartmentOutlined, WeekendOutlined, VpnKeyOutlined, HomeOutlined]

export function About() {
  const openConsult = useConsult()
  const [storyOpen, setStoryOpen] = useState(false)

  return (
    <Section id="about" labelledBy="about-heading">
      <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Box
            sx={{
              position: 'relative',
              minHeight: { xs: 240, sm: 320, lg: 420 },
              borderRadius: '14px',
              overflow: 'hidden',
              bgcolor: '#E4DCD2',
            }}
          >
            <Box
              component="img"
              src={aboutImage}
              alt="Warm living room with a sectional sofa and timber walls"
              sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent 48%)',
              }}
            />
            <Button
              onClick={() => setStoryOpen(true)}
              sx={{
                position: 'absolute',
                left: 16,
                bottom: 16,
                color: '#fff',
                px: 1,
                py: 0.5,
                '&:hover': { bgcolor: 'rgba(0,0,0,0.25)' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#fff',
                    color: colors.ink,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <PlayArrow />
                </Box>
                Watch Our Story
              </Box>
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 3.6 }}>
          <Eyebrow>About SHUBH ARC</Eyebrow>
          <SectionHeading id="about-heading">We build spaces that feel right.</SectionHeading>
          <Typography sx={{ mt: 2.5, color: 'text.secondary', lineHeight: 1.7 }}>
            SHUBH ARC is a construction and interior firm delivering thoughtful design, quality
            construction and complete turnkey solutions — from concept to handover. We create
            functional, aesthetic, and long-lasting spaces for homes, commercial projects and
            renovation works.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 3.4 }}>
          <Stack divider={<Divider sx={{ borderColor: colors.line }} />}>
            {aboutFeatures.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <Stack key={feature.title} direction="row" spacing={1.75} sx={{ py: 1.75 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      flexShrink: 0,
                      borderRadius: '10px',
                      border: '1px solid',
                      borderColor: colors.line,
                      display: 'grid',
                      placeItems: 'center',
                      color: colors.ink,
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 15 }}>{feature.title}</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 13.5, lineHeight: 1.45, mt: 0.25 }}>
                      {feature.text}
                    </Typography>
                  </Box>
                </Stack>
              )
            })}
          </Stack>
        </Grid>
      </Grid>

      <Dialog
        open={storyOpen}
        onClose={() => setStoryOpen(false)}
        fullWidth
        maxWidth="sm"
        slotProps={{ paper: { sx: { borderRadius: 3 } } }}
      >
        <IconButton
          aria-label="Close story"
          onClick={() => setStoryOpen(false)}
          sx={{ position: 'absolute', right: 12, top: 12, zIndex: 1, bgcolor: 'rgba(255,255,255,0.9)' }}
        >
          <Close />
        </IconButton>
        <Box
          component="img"
          src={aboutImage}
          alt=""
          sx={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', bgcolor: '#E4DCD2' }}
        />
        <DialogContent sx={{ pt: 3 }}>
          <Typography component="h2" sx={{ fontFamily: fonts.serif, fontSize: 32, lineHeight: 1.15 }}>
            Our story
          </Typography>
          <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.7 }}>
            SHUBH ARC was started in Indore so design and construction could stay with one team.
            From the first conversation to the day you move in, the same people follow the
            drawings, the site, and the finishes.
          </Typography>
          <Typography sx={{ mt: 1.5, color: 'text.secondary', lineHeight: 1.7 }}>
            The work covers new homes, commercial spaces, interiors, and renovations. The aim is
            simple: a space that feels right when you use it, and still feels right years later.
          </Typography>
          <Button variant="contained" sx={{ mt: 3 }} onClick={() => {
            setStoryOpen(false)
            openConsult()
          }}>
            Get a Consultation
          </Button>
        </DialogContent>
      </Dialog>
    </Section>
  )
}
