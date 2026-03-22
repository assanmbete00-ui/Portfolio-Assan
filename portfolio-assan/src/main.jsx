import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

function Root() {

  const [mode, setMode] = useState("dark")

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: mode,
        background: {
          default: mode === "dark" ? "#233217" : "#0a337a"
        },
        primary: {
          main: "#64aec8"
        }
      },
      typography: {
        fontFamily: "Instrument Sans, sans-serif"
      }
    })
  , [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)

export default Root