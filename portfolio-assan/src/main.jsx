import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { getAppTheme } from "./theme/theme.js"

function Root() {

  const [mode, setMode] = useState("dark")

  const theme = useMemo(() => getAppTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)

export default Root
