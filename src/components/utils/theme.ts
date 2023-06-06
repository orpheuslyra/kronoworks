import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const black = "#212121"
const white = "#fafafa"
const blue = "#757ce8"

const theme = createTheme({
  palette: {
    common: {
      black: black,
      white: white
    },
    primary: {
      main: black
    },
    secondary: {
      main: white
    },
    info: {
      main: blue
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 'bold',
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 'bold',
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    fontFamily:[
      'Helvetica Neue',
      'Sawarabi Gothic',
      'Raleway Gothic',
      'Raleway',
      'sans-serif',
      'Hiragino sans',
      'Arial',
      'Kosugi',
    ].join(','),
  },
});
export default theme