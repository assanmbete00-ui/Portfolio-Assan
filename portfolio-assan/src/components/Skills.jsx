import { Box, Typography, Grid, Chip, LinearProgress } from "@mui/material"
import skills, { skillProgress } from "../data/skills"
import Reveal from "./Reveal"

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        px: { xs: 3, md: "6vw" },
        py: { xs: 10, md: 12 }
      }}
    >

      {/* TITLE */}
      <Reveal>
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            mb: 2
          }}
        >
          Compétences
        </Typography>
      </Reveal>

      <Reveal delay={0.2}>
        <Typography
          variant="h2"
          sx={{
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
                  border: "1px solid",
                  borderColor: "divider",
                  p: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "action.hover"
                  }
                }}
              >
                <Typography variant="overline" sx={{ color: "primary.main", mb: 1 }}>
                  {skill.category}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
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
                        borderColor: "divider",
                        color: "text.secondary",
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {skill.name}
                </Typography>
                <Typography variant="overline" sx={{ color: "text.secondary" }}>
                  {skill.value}%
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 4,
                  backgroundColor: "divider",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "primary.main"
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
