import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"


const Navbar = ({mode, setMode}) => {

      const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark")

      }
  const [open, setOpen] = useState(false)
      

  const menuItems = [
    { label: "À propos", link: "#about" },
    { label: "Compétences", link: "#skills" },
    { label: "Projets", link: "#projects" },
    { label: "Expérience", link: "#experience" },
    { label: "Contact", link: "#contact" }
  ]

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          background: "#0e0f0d",
          px: "6vw",
          py: 2
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* LOGO */}
          <Typography sx={{ fontFamily: "Fraunces", fontWeight: 300 }}>
            Assan <strong>Oussenl</strong>
          </Typography>

          {/* MENU DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {menuItems.map((item, index) => (
              <Button key={index} href={item.link} color="inherit">
                {item.label}
              </Button>
            ))}
          </Box>

          {/* MENU MOBILE (ICON) */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            background: "#0e0f0d",
            height: "100%",
            p: 3
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              sx={{
                display: "block",
                color: "white",
                mb: 2,
                textAlign: "left"
              }}
            >
              {item.label}
            </Button>
          ))}


          {/* SWITCH MODE */}
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar