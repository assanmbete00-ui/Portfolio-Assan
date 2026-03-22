import { Box, Typography, Link } from "@mui/material"
import projects from "../data/projects"
import Reveal from "./Reveal"

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        background: "#141512",
        borderTop: "1px solid #252620",
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
          Projets
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
          Réalisations <em>récentes</em>
        </Typography>
      </Reveal>

      {/* LISTE PROJETS */}
      <Box>

        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.2}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 100px",
                alignItems: "center",
                gap: 2,
                py: 3,
                borderBottom: "1px solid #252620",
                position: "relative",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(138,158,130,0.05)"
                }
              }}
            >

              {/* NUMERO */}
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontSize: "2rem",
                  color: "#2f3029"
                }}
              >
                {String(project.id).padStart(2, "0")}
              </Typography>

              {/* CONTENU */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontSize: "1.2rem",
                    mb: 1
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "0.85rem",
                    mb: 1
                  }}
                >
                  {project.description}
                </Typography>

                {/* TAGS */}
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {project.tags.map((tag, i) => (
                    <Typography
                      key={i}
                      sx={{
                        border: "1px solid #2f3029",
                        fontSize: "0.65rem",
                        px: 1,
                        color: "#8a9e82"
                      }}
                    >
                      {tag}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* LIEN */}
              <Link
                href={project.link}
                target="_blank"
                underline="none"
                sx={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  color: "gray",
                  "&:hover": {
                    color: "#fff"
                  }
                }}
              >
                ↗ GitHub
              </Link>

            </Box>
          </Reveal>
        ))}

      </Box>

    </Box>
  )
}