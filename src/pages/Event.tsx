import { useState } from "react";
import eventImage from "../assets/birthday_cake.png";
import { Box, Typography, Paper } from "@mui/material";
import { ImLocation, ImCalendar } from "react-icons/im";
import { useTheme } from "@mui/material/styles";

export default function Event() {
  const theme = useTheme();
  const eventName = "Birthday Bash";
  const host = "George";
  const startTime = new Date();
  const endTime = new Date(startTime.getTime() + 1000 * 60 * 60 * 2);
  const streetName = "123 Main St";

  const timeoptions = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return (
    <>
      <Box width={"100%"} component="img" src={eventImage}></Box>

      <Box id="event-details" px="1.5em" pt="1em">
        <Box id="title" mb="2em">
          <Typography
            fontWeight={700}
            color={theme.palette.primary.main}
            variant="h4"
          >
            {eventName}
          </Typography>
          <Typography
            fontWeight={400}
            variant="subtitle2"
            fontSize="1.1em"
            color={theme.palette.grey["700"]}
          >
            Hosted by{" "}
            <Box component="span" fontWeight={600}>
              {host}
            </Box>
          </Typography>
        </Box>

        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"start"}
          id="timing"
          mb="1em"
        >
          <Paper
            className="icon"
            elevation={1}
            sx={{ borderRadius: "0.6em", padding: "1em", marginRight: "1.3em" }}
          >
            <ImCalendar fontSize="1.5em" color={theme.palette.primary["300"]} />
          </Paper>
          <Box>
            <Typography
              variant="body2"
              fontSize="1.2em"
              fontWeight={700}
              color={theme.palette.primary.main}
            >
              {`${new Intl.DateTimeFormat("en-GB", timeoptions).format(
                startTime
              )}`.replace("at", "")}
            </Typography>
            <Typography
              variant="subtitle2"
              fontSize="1.1em"
              fontWeight={400}
              color={theme.palette.grey["900"]}
            >
              to{" "}
              {`${new Intl.DateTimeFormat("en-GB", {
                ...timeoptions,
                timeZoneName: "shortOffset",
              }).format(endTime)}`.replace("at", "")}
            </Typography>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"start"}
          id="venue"
        >
          <Paper
            className="icon"
            sx={{ borderRadius: "0.6em", padding: "1em", marginRight: "1.2em" }}
          >
            <ImLocation fontSize="1.5em" color={theme.palette.primary["300"]} />
          </Paper>
          <Box>
            <Typography
              color={theme.palette.primary.main}
              variant="body2"
              fontSize="1.2em"
              fontWeight={700}
            >
              Street Name
            </Typography>
            <Typography
              variant="subtitle2"
              fontSize="1.1em"
              fontWeight={400}
              color={theme.palette.grey["900"]}
            >
              {streetName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
