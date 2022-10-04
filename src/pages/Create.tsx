import { GradientButton } from "../components/GradientButton";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { state as appState } from "../state";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [eventName, setEventName] = useState("");
  const [host, setHost] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [photo, setEventPhoto] = useState();

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
              value={startTime.toISOString().split("T")[0]}
              onChange={(e) => {
                setStartTime(new Date(e.target.value));
              }}
              sx={{ mx: "0.2em" }}
              type={"date"}
              label="Start Time"
            ></TextField>
            <TextField
              value={endTime.toISOString().split("T")[0]}
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

          {photo && (
            <Box
              component="img"
              width={"70%"}
              src={URL.createObjectURL(photo)}
              alt="event photo"
            />
          )}

          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={(e) => {
              console.log(e.target.files);
              setEventPhoto(e.target.files[0]);
            }}
          />
          <label htmlFor="raised-button-file">
            <Button
              sx={{
                background: theme.palette.grey["300"],
                color: theme.palette.grey["900"],
              }}
              //variant="unstyled"
              component="span"
            >
              Select Event Image
            </Button>
          </label>
        </Box>
        <GradientButton
          onClick={() => {
            appState.eventName = eventName;
            appState.host = host;
            appState.startTime = startTime;
            appState.endTime = endTime;
            appState.location = location;
            appState.photo = photo;

            navigate("/event");
          }}
        >
          Next
        </GradientButton>
      </Box>
    </>
  );
}
