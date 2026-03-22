import { Box, Typography, Grid, Chip } from "@mui/material"
import Reveal from "./Reveal"
import Profil from "../assets/images/Profils.jpeg"

const About = () =>{
  return (
    <Box
      id="about"
      sx={{
        background: "#141512",
        borderTop: "1px solid #252620",
        px: "6vw",
        py: "6rem"
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
            border: "1px solid #252620",
            background: "#191a17",
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
          color: "#b5b09f",
          background: "rgba(0,0,0,0.5)",
          padding: "2px 6px",
          borderRadius: "4px"
        }}
      >
        Foumban, Cameroun
      </Typography>
       </Box>
     </Reveal>
   </Grid>

        {/* TEXTE */}
        <Grid item xs={12} md={6}>
          
          <Reveal delay={0.2}>
            <Typography
              sx={{
                color: "primary.main",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                mb: 3
              }}
            >
              À propos
            </Typography>
          </Reveal>

          <Reveal delay={0.3}>
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontSize: "2.5rem",
                mb: 3
              }}
            >
              Un développeur qui transforme les idées en produits web <em>concrets</em>
            </Typography>
          </Reveal>

          <Reveal delay={0.4}>
            <Typography sx={{ color: "#b5b09f", mb: 2 }}>
              Je conçois des applications web modernes, performantes et maintenables.
              J'accorde une grande importance à la qualité du code et à l'expérience utilisateur.
            </Typography>
          </Reveal>

          <Reveal delay={0.5}>
            <Typography sx={{ color: "#b5b09f", mb: 2 }}>
              Mon parcours chez <strong>Lapnomba</strong> m'a permis de consolider mon expertise
              en intégration d'API REST et développement front-end avancé.
            </Typography>
          </Reveal>

          <Reveal delay={0.6}>
            <Typography sx={{ color: "#b5b09f", mb: 3 }}>
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
                    borderColor: "#175867",
                    color: "#0a9e0c",
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