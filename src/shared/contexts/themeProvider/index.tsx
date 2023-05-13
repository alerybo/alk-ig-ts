import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#000",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily: "segoe UI",
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "large",
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#000",
          borderRight: "1px solid #2b2b2b",
          padding: "8px 12px 20px 12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        // root: { height: "auto" },
        img: {
          width: "100%",
          objectFit: "contain",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
});

interface Props {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
