import { Box, Typography, Button, TextField } from "@mui/material";
import homeImage from "../assets/landing_page_image.svg";
import { GradientButton } from "../components/GradientButton";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Box pt="2.5em" pb="1em" sx={{ textAlign: "center" }}>
        <Box sx={{ color: theme.palette.primary.main }}>
          <Typography fontWeight={700} variant="h3">
            Imagine If
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              background: `-webkit-linear-gradient(45deg, ${theme.palette.primary["300"]} 30%, ${theme.palette.primary["100"]} 90%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Snapchat
          </Typography>
          <Typography fontWeight={700} variant="h3">
            had events
          </Typography>
        </Box>

        <Typography
          sx={{ color: theme.palette.grey["900"], marginTop: "1em" }}
          my={"1em"}
        >
          Easily host and share events with your friends
        </Typography>

        <Box component={"img"} width={"70%"} my="1.5em" src={homeImage} />

        <Box>
          <GradientButton href="/create">🎉 Create my event</GradientButton>
        </Box>
      </Box>
    </>
  );
}
