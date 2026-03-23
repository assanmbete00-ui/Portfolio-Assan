import { createTheme } from "@mui/material/styles"

export const getAppTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#8fae84" : "#2f6f5e",
        dark: mode === "dark" ? "#78966e" : "#255a4b",
      },
      secondary: {
        main: mode === "dark" ? "#d2c5a8" : "#7a6a52",
      },
      background: {
        default: mode === "dark" ? "#10120f" : "#f3f1eb",
        paper: mode === "dark" ? "#161914" : "#fbfaf7",
      },
      text: {
        primary: mode === "dark" ? "#f2ede1" : "#1f241f",
        secondary: mode === "dark" ? "#b7b09f" : "#5d665e",
      },
      divider: mode === "dark" ? "#2b3028" : "#d4d8d0",
      action: {
        hover: mode === "dark" ? "rgba(143, 174, 132, 0.1)" : "rgba(47, 111, 94, 0.08)",
      },
    },
    typography: {
      fontFamily: "Instrument Sans, sans-serif",
      h1: {
        fontFamily: "Fraunces, serif",
        fontWeight: 300,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: "Fraunces, serif",
        fontWeight: 300,
        fontSize: "clamp(2rem, 5vw, 3rem)",
        lineHeight: 1.1,
      },
      h4: {
        fontFamily: "Fraunces, serif",
        fontWeight: 400,
      },
      body1: {
        lineHeight: 1.8,
      },
      overline: {
        fontSize: "0.72rem",
        letterSpacing: "0.2em",
        fontWeight: 500,
        textTransform: "uppercase",
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
        letterSpacing: "0.02em",
      },
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "xl",
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 18,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
          label: {
            fontSize: "0.72rem",
          },
        },
      },
    },
  })
