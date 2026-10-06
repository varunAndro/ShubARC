import ArchitectureOutlined from '@mui/icons-material/ArchitectureOutlined'
import ConstructionOutlined from '@mui/icons-material/ConstructionOutlined'
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined'
import ForumOutlined from '@mui/icons-material/ForumOutlined'
import KeyOutlined from '@mui/icons-material/KeyOutlined'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { processSteps } from '../data'
import { colors } from '../theme'
import { Eyebrow, Section, SectionHeading } from './Section'

const icons = [ForumOutlined, ArchitectureOutlined, DescriptionOutlined, ConstructionOutlined, KeyOutlined]

export function Process() {
  return (
    <Section id="process" labelledBy="process-heading">
      <Box sx={{ maxWidth: 460, mb: { xs: 4, md: 5 } }}>
        <Eyebrow>Our Process</Eyebrow>
        <SectionHeading id="process-heading">A simple and clear journey.</SectionHeading>
      </Box>
      <Grid container spacing={3}>
        {processSteps.map((item, index) => {
          const Icon = icons[index]
          return (
            <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 'grow' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '1px solid',
                  borderColor: colors.line,
                  bgcolor: colors.white,
                  display: 'grid',
                  placeItems: 'center',
                  color: colors.ink,
                  mb: 1.75,
                }}
              >
                <Icon fontSize="small" />
              </Box>
              <Typography sx={{ fontWeight: 700 }}>
                {item.step}. {item.title}
              </Typography>
              <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: 14, lineHeight: 1.5 }}>
                {item.text}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}
