import React from 'react'
import { useMediaQuery, Box } from '@mui/material'
import SectionWrapper from './components/SectionWrapper'
import {
  HomeSection,
  AboutSection,
  ContactSection,
  Navbar,
  WhatIDo,
  Resume,
  ProfileSection,
  Testimonial,
  ColorControlle,
  UpArrow,
} from './sections'

function Layout() {
  const isNonMobileScreens = useMediaQuery('(min-width: 1100px)')

  return (
    <>
      <Navbar />
      <Box width={isNonMobileScreens ? '80%' : '100%'} marginLeft={'auto'}>
        <SectionWrapper>
          <HomeSection />
        </SectionWrapper>
        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper>
          <WhatIDo />
        </SectionWrapper>
        <SectionWrapper>
          <Resume />
        </SectionWrapper>
        <SectionWrapper>
          <ProfileSection />
        </SectionWrapper>
        <SectionWrapper>
          <Testimonial />
        </SectionWrapper>
        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
        <ColorControlle />
        <UpArrow />
      </Box>
    </>
  )
}

export default Layout
