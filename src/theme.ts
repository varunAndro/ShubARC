import { createTheme } from '@mui/material/styles'

export const colors = {
  ink: '#1C1917',
  muted: '#6E665E',
  cream: '#F6F3EE',
  white: '#FFFFFF',
  line: '#E7E1D8',
  brown: '#8C5A3C',
  brownDark: '#74492F',
  gold: '#C6A15B',
  footer: '#12110F',
}

export const fonts = {
  serif: '"Playfair Display", Georgia, "Times New Roman", serif',
  sans: '"Manrope", "Segoe UI", Helvetica, Arial, sans-serif',
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.brown,
      dark: colors.brownDark,
      contrastText: colors.white,
    },
    text: {
      primary: colors.ink,
      secondary: colors.muted,
    },
    background: {
      default: colors.cream,
      paper: colors.white,
    },
    divider: colors.line,
  },
  typography: {
    fontFamily: fonts.sans,
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0,
    },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.cream,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 18,
          paddingBlock: 10,
          '&.MuiButton-contained.MuiButton-colorPrimary:hover': {
            backgroundColor: colors.brownDark,
          },
        },
      },
    },
  },
})
