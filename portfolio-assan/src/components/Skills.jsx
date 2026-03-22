import { Box, Typography, Grid, Chip, LinearProgress } from "@mui/material"
import skills, { skillProgress } from "../data/skills"
import Reveal from "./Reveal"

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        px: "6vw",
        py: "6rem"
      }}
    >

      {/* TITLE */}
      <Reveal>
        <Typography
          sx={{
            color: "primary.main",
            letterSpacing: "0.2em",
            fontSize: "0.7rem",
            mb: 2
          }}
        >
          Compétences
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
          Stack <em>technique</em>
        </Typography>
      </Reveal>

      {/* GRID */}
      <Grid container spacing={2}>

        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Reveal delay={index * 0.2}>
              <Box
                sx={{
                  border: "1px solid #252620",
                  p: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    background: "#191a17"
                  }
                }}
              >
                <Typography sx={{ color: "primary.main", fontSize: "0.7rem", mb: 1 }}>
                  {skill.category}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontSize: "1.2rem",
                    mb: 2
                  }}
                >
                  {skill.title}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skill.items.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      variant="outlined"
                      sx={{
                        borderColor: "#2f3029",
                        color: "#b5b09f",
                        fontSize: "0.7rem"
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Reveal>
          </Grid>
        ))}

      </Grid>

      {/* PROGRESS BARS */}
      <Box sx={{ mt: 6, maxWidth: "600px" }}>

        {skillProgress.map((skill, index) => (
          <Reveal key={index} delay={index * 0.2}>
            <Box sx={{ mb: 2 }}>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "0.8rem", color: "#b5b09f" }}>
                  {skill.name}
                </Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "gray" }}>
                  {skill.value}%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 4,
                  backgroundColor: "#2f3029",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#8a9e82"
                  }
                }}
              />

            </Box>
          </Reveal>
        ))}

      </Box>

    </Box>
  )
}