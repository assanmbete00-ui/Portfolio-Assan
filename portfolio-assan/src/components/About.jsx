import { Box, Typography, Grid, Chip } from "@mui/material"
import Reveal from "./Reveal"
import Profil from "../assets/images/Profils.jpeg"

const About = () =>{
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        px: { xs: 3, md: "6vw" },
        py: { xs: 10, md: 12 }
      }}
    >

      <Grid container spacing={6} alignItems="flex-start">

        {/* IMAGE / Profil */}
    <Grid item xs={12} md={6}>
      <Reveal>
        <Box
          sx={{
            aspectRatio: "4/5",
            maxWidth: "380px",
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            transition: '0.3s',
            '&:hover':{
                transform: 'scale(1.05)'
            }
          }}
        >
          <Box
          component="img"
          src={Profil}
          alt="Assan Mbete"
          sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

        <Typography
        sx={{
          position: "absolute",
          bottom: 10,
          left: 10,
          fontSize: "0.7rem",
          color: "text.secondary",
          background: "rgba(0,0,0,0.5)",
          padding: "2px 6px",
          borderRadius: "4px"
        }}
      >
        Yaoundé, Cameroun
      </Typography>
        </Box>
      </Reveal>
    </Grid>

        {/* TEXTE */}
        <Grid item xs={12} md={6}>
          
          <Reveal delay={0.2}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                mb: 3
              }}
            >
              À propos
            </Typography>
          </Reveal>

          <Reveal delay={0.3}>
            <Typography
              variant="h2"
              sx={{
                mb: 3
              }}
            >
              Un développeur qui transforme les idées en produits web <em>concrets</em>
            </Typography>
          </Reveal>

          <Reveal delay={0.4}>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              Je conçois des applications web modernes, performantes et maintenables.
              J'accorde une grande importance à la qualité du code et à l'expérience utilisateur.
            </Typography>
          </Reveal>

          <Reveal delay={0.5}>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              Mon parcours chez <strong>Lapnomba.org,</strong> m'a permis de consolider mon expertise
              en intégration d'API REST et développement front-end avancé.
            </Typography>
          </Reveal>

          <Reveal delay={0.6}>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              Curieux et en apprentissage continu, j'explore actuellement <strong>React avancé</strong>.
            </Typography>
          </Reveal>

          {/* PILLS */}
          <Reveal delay={0.7}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {["Code propre", "API REST", "Open source", "Curiosité", "Rigueur"].map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  variant="outlined"
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.main",
                    fontSize: "0.7rem"
                  }}
                />
              ))}
            </Box>
          </Reveal>

        </Grid>

      </Grid>
    </Box>
  )
}

export default About
