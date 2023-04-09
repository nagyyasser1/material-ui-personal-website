import React from 'react'
import { Grid } from '@mui/material'
import { setMainColor } from '../store/appReducer'
import { useDispatch } from 'react-redux'

function ColorItem({ color }) {
  const dispatch = useDispatch()
  return (
    <Grid
      item
      xs={4}
      onClick={() => dispatch(setMainColor(color))}
      sx={{
        backgroundColor: color,
        borderRadius: '10%',
        padding: '10px',
        cursor: 'pointer',
      }}
    ></Grid>
  )
}

export default ColorItem
