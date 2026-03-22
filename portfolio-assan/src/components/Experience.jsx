import { Box, Typography, Grid } from "@mui/material"
import experiences from "../data/experience"
import Reveal from "./Reveal"

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        px: "6vw",
        py: "6rem"
      }}
    >

      {/* TITRE */}
      <Reveal>
        <Typography
          sx={{
            color: "primary.main",
            letterSpacing: "0.2em",
            fontSize: "0.7rem",
            mb: 2
          }}
        >
          Expérience
        </Typography>
      </Reveal>

      <Reveal delay={0.2}>
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontSize: "2.5rem",
            mb: 4
          }}
        >
          Parcours <em>professionnel</em>
        </Typography>
      </Reveal>

      {/* LISTE */}
      <Box>

        {experiences.map((exp, index) => (
          <Reveal key={exp.id} delay={index * 0.2}>
            <Grid
              container
              spacing={4}
              sx={{
                py: 4,
                borderBottom: "1px solid #252620"
              }}
            >

              {/* GAUCHE */}
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "primary.main",
                    mb: 1
                  }}
                >
                  {exp.period}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "gray"
                  }}
                >
                  {exp.company}
                </Typography>
              </Grid>

              {/* DROITE */}
              <Grid item xs={12} md={8}>
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontSize: "1.4rem",
                    mb: 2
                  }}
                >
                  {exp.role}
                </Typography>

                <Typography
                  sx={{
                    color: "#b5b09f",
                    lineHeight: 1.8
                  }}
                >
                  {exp.description}
                </Typography>
              </Grid>

            </Grid>
          </Reveal>
        ))}

      </Box>

    </Box>
  )
}