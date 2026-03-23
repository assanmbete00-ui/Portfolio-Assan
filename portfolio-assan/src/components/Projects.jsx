import { Box, Typography, Link } from "@mui/material"
import projects from "../data/projects"
import Reveal from "./Reveal"

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
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
          Projets
        </Typography>
      </Reveal>

      <Reveal delay={0.2}>
        <Typography
          variant="h2"
          sx={{
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
                gridTemplateColumns: { xs: "1fr", md: "60px 1fr 100px" },
                alignItems: "center",
                gap: 2,
                py: 3,
                borderBottom: "1px solid",
                borderColor: "divider",
                position: "relative",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "action.hover"
                }
              }}
            >

              {/* NUMERO */}
              <Typography
                variant="h4"
                sx={{
                  color: "divider"
                }}
              >
                {String(project.id).padStart(2, "0")}
              </Typography>

              {/* CONTENU */}
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 1
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
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
                        border: "1px solid",
                        borderColor: "divider",
                        fontSize: "0.65rem",
                        px: 1,
                        color: "primary.main"
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
                  justifySelf: { xs: "start", md: "end" },
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  color: "text.secondary",
                  "&:hover": {
                    color: "text.primary"
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
