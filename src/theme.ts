import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    type?: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: PaletteOptions | undefined;
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#bf5700",
    },
    secondary: {
      main: "#333f48",
    },
    background: {
      default: "#eeeeee",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
};

const theme = createTheme(themeOptions);
export { theme };
