import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'
import { colors, fonts } from '../theme'

type SectionProps = {
  id: string
  children: ReactNode
  labelledBy: string
}

export function Section({ id, children, labelledBy }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={labelledBy}
      sx={{ py: { xs: 7, md: 11 }, scrollMarginTop: { xs: '76px', md: '88px' } }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Typography
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#8A8178',
        '&::after': {
          content: '""',
          width: 46,
          height: '1px',
          bgcolor: '#C9C1B6',
        },
      }}
    >
      {children}
    </Typography>
  )
}

export function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <Typography
      id={id}
      component="h2"
      sx={{
        fontFamily: fonts.serif,
        fontWeight: 600,
        fontSize: { xs: 32, sm: 40, md: 52 },
        lineHeight: 1.08,
        letterSpacing: '-0.02em',
        color: colors.ink,
        mt: 1.25,
      }}
    >
      {children}
    </Typography>
  )
}
