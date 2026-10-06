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
import { projectFilters, projects } from '../data'
import type { Project, ProjectFilter } from '../data'
import { colors, fonts } from '../theme'
import { useConsult } from './ConsultDialog'
import { Eyebrow, Section, SectionHeading } from './Section'

export function Projects() {
  const openConsult = useConsult()
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <Section id="projects" labelledBy="projects-heading">
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={3}
        sx={{ mb: 4, justifyContent: 'space-between', alignItems: { lg: 'flex-end' } }}
      >
        <Box>
          <Eyebrow>Selected Projects</Eyebrow>
          <SectionHeading id="projects-heading">Our Work Speaks.</SectionHeading>
        </Box>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {projectFilters.map((item) => {
            const selectedFilter = filter === item
            return (
              <Button
                key={item}
                onClick={() => setFilter(item)}
                aria-pressed={selectedFilter}
                sx={{
                  borderRadius: 999,
                  px: 1.75,
                  py: 0.6,
                  minWidth: 0,
                  fontSize: 13.5,
                  fontWeight: 600,
                  bgcolor: selectedFilter ? colors.ink : colors.white,
                  color: selectedFilter ? colors.white : colors.ink,
                  border: '1px solid',
                  borderColor: selectedFilter ? colors.ink : colors.line,
                  '&:hover': { bgcolor: selectedFilter ? colors.ink : '#F3EFE9' },
                }}
              >
                {item}
              </Button>
            )
          })}
        </Stack>
      </Stack>

      <Grid container spacing={2.5}>
        {visible.map((project) => (
          <Grid key={project.title} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box
              role="button"
              tabIndex={0}
              onClick={() => setSelected(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelected(project)
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
                  src={project.image}
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
                  <Typography sx={{ fontWeight: 700 }}>{project.title}</Typography>
                  <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: 13.5 }}>
                    {project.location}
                    <Box component="span" sx={{ mx: 0.8, color: '#C8C0B6' }}>
                      |
                    </Box>
                    {project.category}
                  </Typography>
                </Box>
                <ArrowForward sx={{ fontSize: 18, mt: 0.35, flexShrink: 0 }} />
              </Box>
            </Box>
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
              aria-label="Close project details"
              onClick={() => setSelected(null)}
              sx={{ position: 'absolute', right: 12, top: 12, zIndex: 1, bgcolor: 'rgba(255,255,255,0.92)' }}
            >
              <Close />
            </IconButton>
            <Box
              component="img"
              src={selected.image}
              alt=""
              sx={{ width: '100%', height: 260, objectFit: 'cover', bgcolor: '#E4DCD2' }}
            />
            <DialogContent>
              <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: '#8A8178' }}>
                {selected.category.toUpperCase()} · {selected.location.toUpperCase()}
              </Typography>
              <Typography component="h2" sx={{ fontFamily: fonts.serif, fontSize: 32, mt: 1 }}>
                {selected.title}
              </Typography>
              <Typography sx={{ mt: 1.5, color: 'text.secondary', lineHeight: 1.7 }}>
                {selected.summary}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{ mt: 3 }}
                onClick={() => {
                  setSelected(null)
                  openConsult(selected.category === 'Residential' ? 'Construction' : selected.category === 'Interiors' ? 'Interior Design' : selected.category === 'Commercial' ? 'Turnkey Projects' : 'Renovation')
                }}
              >
                Start a Similar Project
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Section>
  )
}
