import { orange } from '@mui/material/colors';
import { createTheme, } from '@mui/material/styles';
import { ColorPartial, PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface AlertOptions {
        string?: string;
    }

    interface PaletteOptions {
        alert?: { [key: string]: string };
    }
}

export const theme = createTheme({
    palette: {
        primary: { 700: "#240D57", 500: "#501FC1", 300: "#8456EC", 100: "#E87BF8", },
        secondary: { 500: "#CCB6FF", 300: "#EDE5FF", 100: "#F6F2FF", },
        warning: { 500: "#FFC000", 300: "#FFD966", 100: "#FFF2CC", },
        grey: { 900: "#4F4F4F", 700: "#828282", 500: "#BDBDBD", 300: "#E0E0E0", 100: "#F2F2F2", 50: "#FBFAFF" },
        alert: { 1: "#FFD7E0", 2: "#E61445", 3: "#D3FFE2", 4: "#00805E", },
    },

});