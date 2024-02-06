import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/music.webp"
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={10} ></Image>
      <HStack>
        
      </HStack>
    </HStack>
  )
}

export default NavBar