import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Star from '@mui/icons-material/Star'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import { testimonials } from '../data'
import { colors, theme } from '../theme'
import { Eyebrow, Section, SectionHeading } from './Section'

export function Testimonials() {
  const [start, setStart] = useState(0)
  const isMd = useMediaQuery(theme.breakpoints.up('md'))
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const visibleCount = isMd ? 3 : isSm ? 2 : 1
  const count = testimonials.length
  const visible = Array.from({ length: visibleCount }, (_, index) => testimonials[(start + index) % count])

  const shift = (direction: number) => {
    setStart((current) => (current + direction + count) % count)
  }

  return (
    <Section id="testimonials" labelledBy="testimonials-heading">
      <Stack
        direction="row"
        useFlexGap
        sx={{
          mb: 4,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Eyebrow>Real Clients. Real Stories.</Eyebrow>
          <SectionHeading id="testimonials-heading">What Our Clients Say.</SectionHeading>
        </Box>
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="Previous testimonials"
            onClick={() => shift(-1)}
            sx={arrowStyle}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton aria-label="Next testimonials" onClick={() => shift(1)} sx={arrowStyle}>
            <ChevronRight />
          </IconButton>
        </Stack>
      </Stack>
      <Grid container spacing={2.5}>
        {visible.map((item) => (
          <Grid key={item.name} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                height: '100%',
                bgcolor: colors.white,
                border: '1px solid',
                borderColor: colors.line,
                borderRadius: '12px',
                p: 1.5,
                display: 'flex',
                gap: 1.5,
              }}
            >
                <Box
                component="img"
                src={item.image}
                alt=""
                sx={{
                  width: { xs: 78, sm: 92 },
                  height: { xs: 104, sm: 118 },
                  objectFit: 'cover',
                  borderRadius: '8px',
                  flexShrink: 0,
                  bgcolor: '#E4DCD2',
                }}
              />
              <Box sx={{ py: 0.5, minWidth: 0 }}>
                <Typography sx={{ fontSize: 13.5, lineHeight: 1.55, color: '#3A342E' }}>
                  &ldquo;{item.quote}&rdquo;
                </Typography>
                <Stack direction="row" spacing={0.15} aria-label="5 out of 5 stars" sx={{ mt: 1 }}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} sx={{ fontSize: 15, color: colors.gold }} />
                  ))}
                </Stack>
                <Typography sx={{ mt: 1, fontWeight: 700, fontSize: 14 }}>{item.name}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 12.5 }}>{item.meta}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

const arrowStyle = {
  width: 40,
  height: 40,
  border: '1px solid',
  borderColor: colors.line,
  bgcolor: colors.white,
  '&:hover': { bgcolor: '#F3EFE9' },
}
