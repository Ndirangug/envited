import eventImage from "../assets/birthday_cake.png";
import { Box, Typography, Paper } from "@mui/material";
import { ImLocation, ImCalendar } from "react-icons/im";
import { useTheme } from "@mui/material/styles";
import { state } from "../state";
import { useState } from "react";

export default function Event() {
  const theme = useTheme();

  const timeoptions = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return (
    <>
      <Box
        width={"100%"}
        component="img"
        src={URL.createObjectURL(state.photo)}
      ></Box>

      <Box id="event-details" px="1.5em" pt="1em">
        <Box id="title" mb="2em">
          <Typography
            fontWeight={700}
            color={theme.palette.primary.main}
            variant="h4"
          >
            {state.eventName}
          </Typography>
          <Typography
            fontWeight={400}
            variant="subtitle2"
            fontSize="1.1em"
            color={theme.palette.grey["700"]}
          >
            Hosted by{" "}
            <Box component="span" fontWeight={600}>
              {state.host}
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
                state.startTime
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
              }).format(state.endTime)}`.replace("at", "")}
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
              {state.location}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
