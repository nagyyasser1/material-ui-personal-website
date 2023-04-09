import React, { useState, useEffect } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'

function UpArrow() {
  const mainColor = useSelector((state) => state.app.mainColor)
  const [scrollPosition, setScrollPosition] = useState(0)
  const { palette } = useTheme()
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: 'gray',
        padding: '5px',
        borderRadius: '100%',
        position: 'fixed',
        right: '10px',
        top: '90%',
        transition: '0.8s',
        opacity: '0.5',
        ':hover': {
          cursor: 'pointer',
          backgroundColor: mainColor,
        },
      }}
      display={scrollPosition > 700 ? 'inline-block ' : 'none'}
      onClick={() => window.scrollTo(0, 0)}
    >
      <KeyboardArrowUpIcon sx={{ color: 'white', fontSize: '30px' }} />
    </Box>
  )
}

export default UpArrow
