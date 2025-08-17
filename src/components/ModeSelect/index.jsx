import WbSunnyIcon from '@mui/icons-material/WbSunny'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Box, useColorScheme } from '@mui/material'
export default function ModeSelect() {
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
          <MenuItem value={'system'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Hệ thống </div>
          </MenuItem>
          <MenuItem value={'light'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {' '}
              <WbSunnyIcon fontSize="small" /> Sáng
            </Box>
          </MenuItem>
          <MenuItem value={'dark'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DarkModeIcon fontSize="small" /> Tối{' '}
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
