import { Box, Typography } from "@mui/material"

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid #252620",
        px: "6vw",
        py: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1
      }}
    >

      {/* GAUCHE */}
      <Typography
        sx={{
          fontSize: "0.75rem",
          color: "gray",
          letterSpacing: "0.08em"
        }}
      >
        © 2026{" "}
        <span style={{ color: "#8a9e82" }}>
          Njouenwet Mbete Assan Oussenl
        </span>
      </Typography>

      {/* DROITE */}
      <Typography
        sx={{
          fontSize: "0.75rem",
          color: "gray",
          letterSpacing: "0.08em"
        }}
      >
        Développeur Web · Foumban, Cameroun
      </Typography>

    </Box>
  )
}