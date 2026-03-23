import { Box, Typography, Grid } from "@mui/material"
import experiences from "../data/experience"
import Reveal from "./Reveal"

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        px: { xs: 3, md: "6vw" },
        py: { xs: 10, md: 12 }
      }}
    >

      {/* TITRE */}
      <Reveal>
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            mb: 2
          }}
        >
          Expérience
        </Typography>
      </Reveal>

      <Reveal delay={0.2}>
        <Typography
          variant="h2"
          sx={{
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
                borderBottom: "1px solid",
                borderColor: "divider"
              }}
            >

              {/* GAUCHE */}
              <Grid item xs={12} md={4}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    mb: 1
                  }}
                >
                  {exp.period}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary"
                  }}
                >
                  {exp.company}
                </Typography>
              </Grid>

              {/* DROITE */}
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2
                  }}
                >
                  {exp.role}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
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
