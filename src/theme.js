
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material'
const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange
            },
        },
        dark: {
            palette: {
                mode: 'dark',
                primary: cyan,
                secondary: orange
            },
        }
    }

})
export default theme