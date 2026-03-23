import { Box, Typography } from "@mui/material"

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        px: { xs: 3, md: "6vw" },
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
        variant="overline"
        sx={{
          color: "text.secondary",
          textTransform: "none"
        }}
      >
        © 2026{" "}
        <Typography component="span" sx={{ color: "primary.main" }}>
          Njouenwet Mbete Assan Oussenl
        </Typography>
      </Typography>

      {/* DROITE */}
      <Typography
        variant="overline"
        sx={{
          color: "text.secondary",
          textTransform: "none"
        }}
      >
        Développeur Web · Yaoundé, Cameroun
      </Typography>

    </Box>
  )
}
