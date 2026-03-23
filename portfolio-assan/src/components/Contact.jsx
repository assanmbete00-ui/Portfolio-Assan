import { Box, Typography, Grid, Link } from "@mui/material"
import contacts from "../data/contact"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        px: { xs: 3, md: "6vw" },
        py: { xs: 10, md: 12 }
      }}
    >

      <Grid container spacing={6}>

        {/* GAUCHE */}
        <Grid item xs={12} md={6}>
          <Reveal>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                mb: 2
              }}
            >
              Contact
            </Typography>
          </Reveal>

          <Reveal delay={0.2}>
            <Typography
              variant="h2"
              sx={{
                mb: 3
              }}
            >
              Travaillons <em>ensemble</em>
            </Typography>
          </Reveal>

          <Reveal delay={0.3}>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: "400px" }}>
              Disponible pour des projets freelance, collaborations ou opportunités professionnelles.
              N'hésitez pas à me contacter.
            </Typography>
          </Reveal>
        </Grid>

        {/* DROITE */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: 2 }}>

            {contacts.map((contact, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <Link
                  href={contact.link}
                  target="_blank"
                  underline="none"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    color: "text.primary",
                    transition: "0.3s",
                    "&:hover": {
                      pl: 2
                    }
                  }}
                >

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary"
                      }}
                    >
                      {contact.label}
                    </Typography>

                    <Typography variant="body2">
                      {contact.value}
                    </Typography>
                  </Box>

                  {/* FLECHE */}
                  <Typography
                    sx={{
                      color: "divider",
                      fontSize: "1.2rem",
                      transition: "0.3s",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translate(4px, -4px)"
                      }
                    }}
                  >
                    ↗
                  </Typography>

                </Link>
              </Reveal>
            ))}

          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}
