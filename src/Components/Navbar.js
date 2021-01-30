import React from 'react'
import { Box, Flex, Text, Circle, Spacer, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box w='100%' h='80px' boxShadow='8px 3px 12px 1px #bcb7b7'>
      <Flex padding='7px 30px' align='center'>
        <Flex align='center'>
          <Circle bgColor='grey' padding='7px' w='50px' h='50px'>
            <Text fontSize='24px' fontWeight='bold' textAlign='center'>
              A
            </Text>
          </Circle>
          <Text marginLeft='10px'>Welcome, Admin</Text>
        </Flex>
        <Spacer />
        <Button justifyContent='flex-end'>Logout</Button>
      </Flex>
    </Box>
  )
}

export default Navbar
