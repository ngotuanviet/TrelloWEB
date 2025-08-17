import { Container, useColorScheme } from '@mui/material'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-dark-light-mode">Nền</InputLabel>
        <Select
          labelId="select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={(e) => setMode(e.target.value)}
        >
          <MenuItem value="">
            <em>Chọn chế độ</em>
          </MenuItem>
          <MenuItem value={'system'}><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Hệ thống </div></MenuItem>
          <MenuItem value={'light'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>  <WbSunnyIcon fontSize='small' /> Sáng</Box>
          </MenuItem>
          <MenuItem value={'dark'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DarkModeIcon fontSize='small' /> Tối </Box></MenuItem>
        </Select>
      </FormControl>
    </>)
}
function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>

      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center'

      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center'

      }}>Broad Bar</Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
        alignItems: 'center'
      }}> Box Content</Box>

    </Container>
  )
}

export default App
