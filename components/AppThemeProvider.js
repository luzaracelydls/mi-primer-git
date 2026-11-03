'use client';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5F0F40',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#39A031',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#0F4C5C',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#FB8B24',
      contrastText: '#1D1D1D'
    },
    success: {
      main: '#39A031',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#FB8B24',
      secondary: '#0F4C5C'
    },
    background: {
      default: '#FDF3E7',
      paper: '#FFFFFF'
    },
    divider: '#E9D8C8'
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 800
    },
    h4: {
      fontWeight: 700
    },
    button: {
      fontWeight: 700,
      textTransform: 'none'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #E9D8C8'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10
        }
      }
    }
  }
});

export default function AppThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}