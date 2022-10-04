import Button, { ButtonProps } from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "2em",
  backgroundColor: "black",
  color: "white",
  width: 300,
  ":hover": { backgroundColor: theme.status.danger },
  //color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

export function CustomComponent() {
  return <CustomButton variant="contained">Custom Button</CustomButton>;
}
