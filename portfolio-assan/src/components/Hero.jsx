import { Box, Typography, Button, Container } from "@mui/material"
import { motion } from "framer-motion"

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
        px: "6vw",
        pb: "6rem"
      }}
    >

      {/* TEXTE BACKGROUND */}
      <Typography
        component={motion.div}
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
          WebkitTextStroke: "1px rgba(138,158,130,0.1)",
          whiteSpace: "nowrap",
          zIndex: 0
        }}
      >
        Assan
      </Typography>

      <Container sx={{ position: "relative", zIndex: 1 }}>

        {/* TAG */}
        <Typography
          component={motion.div}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          sx={{
            color: "primary.main",
            letterSpacing: "0.2em",
            fontSize: "0.7rem",
            mb: 3
          }}
        >
          Développeur Web & Gestionnaire des SI
        </Typography>

        {/* TITRE */}
        <Typography
          component={motion.div}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 100,
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            lineHeight: 1,
            mb: 4
          }}
        >
          Njouenwet <br />
          Mbete <br />
          <em style={{ color: "#b5b09f" }}>Assan</em>
        </Typography>

        {/* BAS */}
        <Box
          component={motion.div}
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
            sx={{
              maxWidth: "400px",
              color: "gray",
              lineHeight: 1.8
            }}
          >
            Développeur web passionné par la création d'applications modernes et interactives.
            Spécialisé en <strong>JavaScript & React</strong>, je conçois des solutions performantes.
          </Typography>

          {/* BOUTONS */}
          <Box sx={{ display: "flex", gap: 2 }}>

            {/* BOUTON PROJETS */}
            <Button
              component="a"
              href="#projects"       
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              sx={{
                background: "#e8e4db",
                color: "#000",
                px: 3,
                textDecoration: "none"
              }}
            >
              Voir mes projets
            </Button>

            {/* BOUTON CONTACT */}
            <Button
              component="a"
              href="#contact"       
              component={motion.a}
              whileHover={{ x: 5 }}
              variant="text"
              sx={{
                borderBottom: "1px solid gray",
                color: "gray",
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