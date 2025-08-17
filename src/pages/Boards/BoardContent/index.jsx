import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          display: 'flex',
          height: (theme) =>
            `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
          alignItems: 'center',
        }}
      >
        Box Content
      </Box>
    </>
  )
}

export default BoardContent
