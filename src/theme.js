import tinyColor from "tinycolor2";
import {createMuiTheme} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

const primaryColor = "#1a73e8";
const secondaryColor = "#f48120";

const lightenRate = 7.5;
const darkenRate = 15;

export default createMuiTheme({
    colors: {
        red: red[500]
    },
    palette: {
        primary: {
            main: primaryColor,
            light: tinyColor(primaryColor)
                .lighten(lightenRate)
                .toHexString(),
            dark: tinyColor(primaryColor)
                .darken(darkenRate)
                .toHexString(),
        },
    },
    overrides: {
        MuiChip: {},
        MuiButton: {
            label: {
                textTransform: "initial"
            }
        }
    },
    typography: {
        fontFamily: "\"Google Sans\",Roboto,Arial,sans-serif;"
    }
});
