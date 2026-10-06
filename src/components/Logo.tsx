import Box from '@mui/material/Box'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Box component="a" href="#home" aria-label="SHUBH ARC home" sx={{ display: 'inline-flex', lineHeight: 0 }}>
      <Box
        component="img"
        src={light ? logoLight : logoDark}
        alt="SHUBH ARC, Construction, Interiors, Turnkey Projects"
        sx={{
          height: { xs: 40, sm: 48, md: 54 },
          width: 'auto',
          maxWidth: { xs: 168, sm: 210 },
          display: 'block',
        }}
      />
    </Box>
  )
}
