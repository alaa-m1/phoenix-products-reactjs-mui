import { ThemeOptions } from "@mui/material";

const primaryColor = '#3700B3';
const secondaryColor = '#03DAC6';
const disabledColor = "#ccc";
const primaryColorShade = "#10293d";

const fontFamily = 'Bad Script';


export const PhoenixTheme: ThemeOptions = {
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryColorShade,
      light: "#fff",
    },
    secondary: { main: secondaryColor, light: "#fff" },
    background: {
      default: "#fff",
    },
  },
  typography: {
    allVariants: {
      fontWeight: 400,
      fontSize: "13px",
      fontFamily: primaryFontFamily,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        size: "medium",
      },
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          paddingRight: 15,
          paddingLeft: 15,
          paddingTop: 5,
          paddingBottom: 5,
          fontFamily: primaryFontFamily,
          fontSize: "12px",
          fontWeight: 600,
          alignItems: "center",
        },

        text: ({ ownerState, theme }) => ({
          "& span svg": {
            color: !ownerState.disabled
              ? ownerState.color !== "inherit" && ownerState.color
                ? theme.palette[ownerState.color].main
                : "inherit"
              : disabledColor,
          },
          "&:hover": {
            backgroundColor:
              ownerState.color !== "inherit" && ownerState.color
                ? theme.palette[ownerState.color].main
                : "inherit",
            color: "white",
            "& span svg": {
              color: "#fff",
            },
          },
        }),
        contained: ({ ownerState, theme }) => ({
          borderRadius: "0px",
          "&:hover": {
            backgroundColor:
              ownerState.color !== "inherit" && ownerState.color
                ? theme.palette[ownerState.color].dark
                : "inherit",
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderColor: primaryColor,
          "& .MuiInputBase-formControl": {
            fontFamily: primaryFontFamily,
            fontSize: "13px",
            fontWeight: 400,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "15px",
          fontFamily: primaryFontFamily,
        },
      },
    },
  },
};
