import { GradientButton } from "../components/GradientButton";
import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Create() {
  const theme = useTheme();
  const [eventName, setEventName] = useState("");
  const [host, setHost] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [photo, setEventPhoto] = useState("");

  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", height: "100vh" }}
      >
        <Typography
          fontWeight={700}
          color={theme.palette.primary.main}
          variant="h4"
        >
          Create Event
        </Typography>

        <Box
          id="event-details-input"
          display="flex"
          flexDirection={"column"}
          justifyContent="start"
          alignItems="center"
          my="2em"
        >
          <TextField
            value={eventName}
            onChange={(e) => {
              setEventName(e.target.value);
            }}
            sx={{ my: "0.5em" }}
            label="Event Name"
          ></TextField>
          <TextField
            value={host}
            onChange={(e) => {
              setHost(e.target.value);
            }}
            sx={{ my: "0.5em" }}
            label="Host Name"
          ></TextField>
          <Box sx={{ my: "0.5em" }}>
            <TextField
              value={new Intl.DateTimeFormat("en-GB", {}).format(startTime)}
              onChange={(e) => {
                setStartTime(new Date(e.target.value));
              }}
              sx={{ mx: "0.2em" }}
              type={"date"}
              label="Start Time"
            ></TextField>
            <TextField
              value={startTime}
              onChange={(e) => {
                setEndTime(new Date(e.target.value));
              }}
              sx={{ mx: "0.2em" }}
              type={"date"}
              label="End Time"
            ></TextField>
          </Box>

          <TextField
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            sx={{ my: "0.5em" }}
            label="Location"
          ></TextField>
        </Box>
        <GradientButton href="/event">Next</GradientButton>
      </Box>
    </>
  );
}
