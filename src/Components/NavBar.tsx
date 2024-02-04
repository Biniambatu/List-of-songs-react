import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/google-play-games.webp"
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