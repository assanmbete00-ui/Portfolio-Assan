import { Box, Typography, Button, Container } from "@mui/material"
import { motion as Motion } from "framer-motion"

export default function Hero() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8
      }
    })
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        px: { xs: 3, md: "6vw" },
        pb: { xs: 8, md: 12 }
      }}
    >

      {/* TEXTE BACKGROUND */}
      <Typography
        component={Motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(8rem, 22vw, 22rem)",
          fontFamily: "Fraunces",
          fontWeight: 100,
          color: "transparent",
          WebkitTextStroke: (theme) =>
            `1px ${theme.palette.mode === "dark" ? "rgba(138,167,126,0.14)" : "rgba(47,111,94,0.18)"}`,
          whiteSpace: "nowrap",
          zIndex: 0
        }}
      >
        Assan
      </Typography>

      <Container sx={{ position: "relative", zIndex: 1 }}>

        {/* TAG */}
        <Typography
          component={Motion.div}
          variant="overline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          sx={{
            color: "primary.main",
            mb: 3
          }}
        >
          Développeur Web & Gestionnaire des SI
        </Typography>

        {/* TITRE */}
        <Typography
          component={Motion.div}
          variant="h1"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          sx={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            lineHeight: 1,
            mb: 4
          }}
        >
          Njouenwet <br />
          Mbete <br />
          <Box component="em" sx={{ color: "text.secondary" }}>
            Assan
          </Box>
        </Typography>

        {/* BAS */}
        <Box
          component={Motion.div}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4
          }}
        >

          {/* DESCRIPTION */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: "400px",
              color: "text.secondary",
            }}
          >
            Développeur web passionné par la création d'applications modernes et interactives.
            Spécialisé en <strong>JavaScript & React</strong>, je conçois des solutions performantes.
          </Typography>

          {/* BOUTONS */}
          <Box sx={{ display: "flex", gap: 2 }}>

            {/* BOUTON PROJETS */}
            <Button
              href="#projects"        
              component={Motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                px: 3,
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "primary.dark"
                }
              }}
            >
              Voir mes projets
            </Button>

            {/* BOUTON CONTACT */}
            <Button
              href="#contact"       
              component={Motion.a}
              whileHover={{ x: 5 }}
              variant="text"
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
                color: "text.secondary",
                textDecoration: "none"
              }}
            >
              Me contacter
            </Button>

          </Box>

        </Box>
      </Container>
    </Box>
  )
}
