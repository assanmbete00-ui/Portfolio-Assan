import { Box, Typography, Grid, Link } from "@mui/material"
import contacts from "../data/contact"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        background: "#141512",
        borderTop: "1px solid #252620",
        px: "6vw",
        py: "6rem"
      }}
    >

      <Grid container spacing={6}>

        {/* GAUCHE */}
        <Grid item xs={12} md={6}>
          <Reveal>
            <Typography
              sx={{
                color: "primary.main",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                mb: 2
              }}
            >
              Contact
            </Typography>
          </Reveal>

          <Reveal delay={0.2}>
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontSize: "3rem",
                mb: 3
              }}
            >
              Travaillons <em>ensemble</em>
            </Typography>
          </Reveal>

          <Reveal delay={0.3}>
            <Typography sx={{ color: "gray", maxWidth: "400px" }}>
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
                    borderBottom: "1px solid #252620",
                    color: "#e8e4db",
                    transition: "0.3s",
                    "&:hover": {
                      pl: 2
                    }
                  }}
                >

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        color: "gray"
                      }}
                    >
                      {contact.label}
                    </Typography>

                    <Typography sx={{ fontSize: "0.9rem" }}>
                      {contact.value}
                    </Typography>
                  </Box>

                  {/* FLECHE */}
                  <Typography
                    sx={{
                      color: "#2f3029",
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