import React, { useState } from 'react'
import { Box, Divider, Typography, Grid, Button, useTheme } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import ColorItem from '../../components/ColorItem'
import { useDispatch } from 'react-redux'
import { setMainColor } from '../../store/appReducer'

const colors = [
  { id: 1, color: 'Indigo' },
  { id: 2, color: 'Blue' },
  { id: 3, color: 'Purple' },
  { id: 4, color: 'Cyan' },
  { id: 5, color: 'Red' },
  { id: 6, color: 'Brown' },
  { id: 7, color: 'Pink' },
  { id: 8, color: 'Green' },
]

function ColorControlle() {
  const dispatch = useDispatch()
  const [isColorPoupOpen, setIsColorPoupOpen] = useState(false)
  const { palette } = useTheme()
  return (
    <Box
      width={'180px'}
      sx={{
        backgroundColor: 'white',
        position: 'fixed',
        padding: '5px',
        top: '40%',
        right: `${isColorPoupOpen ? '0' : '-180px'}`,
        transition: '0.5s ease-in-out',
        zIndex: 0,
      }}
    >
      <SettingsIcon
        sx={{
          position: 'absolute',
          left: '-38px',
          top: '-1px',
          color: 'white',
          backgroundColor: `${palette.neutral.dark}`,
          fontSize: '40px',
          padding: '4px',
          borderRadius: '4px 0px 0px 4px',
          cursor: 'pointer',
          zIndex: '0',
        }}
        onClick={() => {
          setIsColorPoupOpen((prev) => !prev)
        }}
      />
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '1.3rem',
          marginBottom: '10px',
          color: 'gray',
        }}
      >
        Color Switcher
      </Typography>
      <Divider />
      <Grid
        container
        spacing={1}
        gap={3}
        padding={'5px 0px 5px 13px'}
        margin={'10px auto'}
      >
        {colors.map((item) => (
          <ColorItem color={item.color} key={item.id} />
        ))}
      </Grid>
      <Button
        sx={{
          display: 'block',
          color: 'white',
          margin: 'auto',
          backgroundColor: '#20c997',
          ':hover': {
            color: '#20c997',
          },
        }}
        onClick={() => dispatch(setMainColor('#20c997'))}
      >
        Rest Default Teal
      </Button>
    </Box>
  )
}

export default ColorControlle
