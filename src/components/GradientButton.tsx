import Button, { ButtonProps } from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

export function GradientButton({ children }) {
  const theme = useTheme();

  const _button = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: "0.6em",
    padding: "0.5em 1em",
    width: "fit-content",
    color: "white",
    fontWeight: 700,
    textTransform: "none",
    fontSize: "1.2em",
    background: `-webkit-linear-gradient(45deg, ${theme.palette.primary["300"]} 30%, ${theme.palette.primary["100"]} 90%)`,
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    //":hover": { backgroundColor: theme.status.danger },
    //color: theme.palette.success.main,
    // "& .MuiSlider-thumb": {
    //   "&:hover, &.Mui-focusVisible": {
    //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    //   },
    //   "&.Mui-active": {
    //     boxShadow: `0px 0px 0px 14px ${alpha(
    //       theme.palette.success.main,
    //       0.16
    //     )}`,
    //   },
    // },
  }));

  return <_button variant="contained">{children}</_button>;
}
