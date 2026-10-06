import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { services } from '../data'
import { colors, fonts } from '../theme'
import { useConsult } from './ConsultDialog'
import { Eyebrow, Section, SectionHeading } from './Section'

type Service = (typeof services)[number]

export function Services() {
  const openConsult = useConsult()
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <Section id="services" labelledBy="services-heading">
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={3}
        sx={{ mb: 4.5, justifyContent: 'space-between', alignItems: { lg: 'flex-end' } }}
      >
        <Box sx={{ maxWidth: 520 }}>
          <Eyebrow>Our Services</Eyebrow>
          <SectionHeading id="services-heading">Complete solutions for better spaces.</SectionHeading>
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          sx={{ alignItems: { md: 'center' }, maxWidth: 560 }}
        >
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
            From new construction to interior transformations, we offer end-to-end solutions with
            a focus on quality, timelines and your vision.
          </Typography>
          <Button
            href="#service-list"
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{ flexShrink: 0, width: { xs: '100%', md: 'auto' } }}
          >
            Explore Services
          </Button>
        </Stack>
      </Stack>

      <Grid id="service-list" container spacing={2.5} sx={{ scrollMarginTop: '96px' }}>
        {services.map((service) => (
          <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 3 }}>
            <MediaCard
              image={service.image}
              title={service.title}
              text={service.summary}
              onOpen={() => setSelected(service)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        fullWidth
        maxWidth="sm"
        slotProps={{ paper: { sx: { borderRadius: 3 } } }}
      >
        {selected && (
          <>
            <IconButton
              aria-label="Close service details"
              onClick={() => setSelected(null)}
              sx={{ position: 'absolute', right: 12, top: 12, zIndex: 1, bgcolor: 'rgba(255,255,255,0.92)' }}
            >
              <Close />
            </IconButton>
            <Box
              component="img"
              src={selected.image}
              alt=""
              sx={{ width: '100%', height: 240, objectFit: 'cover', bgcolor: '#E4DCD2' }}
            />
            <DialogContent>
              <Typography component="h2" sx={{ fontFamily: fonts.serif, fontSize: 32 }}>
                {selected.title}
              </Typography>
              <Typography sx={{ mt: 1.5, color: 'text.secondary', lineHeight: 1.7 }}>
                {selected.detail}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{ mt: 3 }}
                onClick={() => {
                  const type = selected.projectType
                  setSelected(null)
                  openConsult(type)
                }}
              >
                Get a Consultation
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Section>
  )
}

function MediaCard({
  image,
  title,
  text,
  onOpen,
}: {
  image: string
  title: string
  text: string
  onOpen: () => void
}) {
  return (
    <Box
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen()
        }
      }}
      sx={{
        height: '100%',
        bgcolor: colors.white,
        border: '1px solid',
        borderColor: colors.line,
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'transform .25s ease, box-shadow .25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 16px 40px rgba(40, 30, 20, 0.08)',
        },
        '&:hover img': { transform: 'scale(1.05)' },
        '&:focus-visible': { outline: `2px solid ${colors.brown}`, outlineOffset: 3 },
      }}
    >
      <Box sx={{ aspectRatio: '16 / 10', overflow: 'hidden', bgcolor: '#E4DCD2' }}>
        <Box
          component="img"
          src={image}
          alt=""
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform .45s ease',
          }}
        />
      </Box>
      <Box sx={{ p: 2, display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
          <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: 13.5, lineHeight: 1.5 }}>
            {text}
          </Typography>
        </Box>
        <ArrowForward sx={{ fontSize: 18, mt: 0.35, flexShrink: 0 }} />
      </Box>
    </Box>
  )
}
