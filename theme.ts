import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: {
    100: "#e0ccfc",
    200: "#c199f8",
    300: "#a166f5",
    400: "#8233f1",
    500: "#6300ee",
    600: "#4f00be",
    700: "#3b008f",
    800: "#28005f",
    900: "#140030",
  },
  green: {
    100: "#cefce6",
    200: "#9df8cc",
    300: "#6bf5b3",
    400: "#3af199",
    500: "#09ee80",
    600: "#07be66",
    700: "#058f4d",
    800: "#045f33",
    900: "#02301a",
  },
  red: {
    100: "#fcd1cc",
    200: "#f8a399",
    300: "#f57466",
    400: "#f14633",
    500: "#ee1800",
    600: "#be1300",
    700: "#8f0e00",
    800: "#5f0a00",
    900: "#300500",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary[500],
    },
  },
});

// export default theme;
