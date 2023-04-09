import React, { useState } from 'react'
import {
  Box,
  useTheme,
  Avatar,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import FlexBetween from './../../components/FlexBetween'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

function Navbar() {
  const { palette } = useTheme()
  const mainColor = useSelector((state) => state.app.mainColor)
  const isNonMobileScreens = useMediaQuery('(min-width: 1100px)')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true)

  const MobileMenuIcon = () => {
    if (isMobileMenuOpen) {
      return (
        <CloseIcon
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          sx={{ cursor: 'pointer', fontSize: '35px' }}
        />
      )
    } else {
      return (
        <MenuIcon
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          sx={{ cursor: 'pointer', fontSize: '35px' }}
        />
      )
    }
  }
  return (
    <FlexBetween
      sx={{
        position: 'fixed',
        backgroundColor: `${palette.neutral.dark}`,
        height: isNonMobileScreens ? '100vh' : '70px',
        width: isNonMobileScreens ? '20%' : '100%',
        color: 'white',
      }}
      flexDirection={isNonMobileScreens ? 'column' : 'row'}
      padding={isNonMobileScreens ? '30px' : '0 30px'}
    >
      {/* Image section */}
      <Box>
        {isNonMobileScreens && (
          <Avatar
            alt={'Nagy Yasser'}
            src="/nagy1.jpg"
            sx={{
              width: 150,
              height: 150,
              border: '4px solid gray',
              marginBottom: '20px',
            }}
          />
        )}
        <Typography variant="h3" textAlign={'center'}>
          NAGY YASSER
        </Typography>
      </Box>
      {/* Side Links */}
      {isNonMobileScreens && (
        <FlexBetween flexDirection={'column'} flexGrow={0.5}>
          <Link href="#home" color="inherit" variant="h4" underline="none">
            Home
          </Link>
          <Link href="#about" color="inherit" variant="h4" underline="none">
            About Me
          </Link>
          <Link href="#whatido" color="inherit" variant="h4" underline="none">
            What I Do
          </Link>
          <Link variant="h4">What I Do</Link>
          <Link
            href="#resume"
            variant="h4"
            sx={{ textDecoration: 'none', color: 'white' }}
          >
            Reusme
          </Link>
          <Link variant="h4" sx={{ ':hover': { color: mainColor } }}>
            Portfolio
          </Link>
          <Link variant="h4">Testimonial</Link>
          <Link variant="h4">
            <a href="#contact">Contact</a>
          </Link>
        </FlexBetween>
      )}
      {/* Media Links */}
      <FlexBetween gap={1}>
        <FacebookIcon />
        <TwitterIcon />
        <GitHubIcon />
        <InstagramIcon />
        {!isNonMobileScreens && <MobileMenuIcon />}
      </FlexBetween>
      {/* toggle menu */}
      {!isNonMobileScreens && (
        <Box
          position={'fixed'}
          top={'70px'}
          left={0}
          width={'100%'}
          height={'40vh'}
          backgroundColor={'black'}
          display={isMobileMenuOpen ? 'block' : 'none'}
          sx={{
            zIndex: 1,
            padding: '10px 30px',
          }}
        >
          <List>
            <ListItemText primary="Home" />
            <Divider color="white" />
            <ListItemText primary="About Me" />
            <Divider color="white" />
            <ListItemText primary="What I Do" />
            <Divider color="white" />
            <ListItemText primary="Reusme" />
            <Divider color="white" />
            <ListItemText primary="PortFolio" />
            <Divider color="white" />
            <ListItemText primary="Testimontial" />
            <Divider color="white" />
            <ListItemText primary="Contact" />
            <Divider color="white" />
          </List>
        </Box>
      )}
    </FlexBetween>
  )
}

export default Navbar
