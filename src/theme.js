import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  trelloCustom: {
    appBarHeight: '48px',
    boardBarHeight: '58px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: cyan,
        secondary: orange,
      },
    },
  },
})
export default theme
