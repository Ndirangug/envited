import { orange } from '@mui/material/colors';
import { createTheme, } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };

    }
}

export const theme = createTheme({
    palette: {
        primary: { main: orange[500] },
        secondary: { main: '#11cb5f' },
        // success: { main: '#11cb5f' },
        // error: { main: '#f44336' },
        // background: { default: '#fff', },
        text: { primary: '#000', secondary: '#fff' },
        // warning: { main: '#ff9800' },

    },
    status: {
        danger: orange[500],
    },
});