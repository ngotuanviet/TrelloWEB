import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme , useColorScheme} from '@mui/material'
import { Button, Typography } from '@mui/material'
function ModeToggle() {
  const { mode, setMode } = useColorScheme()

  return (
    <>
      <Button onClick={()=> setMode(mode === 'light' ? 'dark' : 'light')} > 
        {mode === 'light' ? 'Light' : 'Dark'}
      </Button>
    </>)
}
function App() {
  return (
    <>
      <h1>Test</h1>
      <Typography variant='body2' color="text.secondary">TEst</Typography>
      <ModeToggle/>
    </>
  )
}

export default App
