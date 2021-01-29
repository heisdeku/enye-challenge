import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box w='100%' h='80px' boxShadow='8px 3px 12px 1px #bcb7b7'>
      <Flex padding='7px 30px' align='center' justify='space-between'>
        <Flex align='center'>
          <Box
            bgColor='grey'
            padding='7px'
            borderRadius='50%'
            w='50px'
            h='50px'
          >
            <Text fontSize='24px' fontWeight='bold' textAlign='center'>
              A
            </Text>
          </Box>
          <Text marginLeft='10px'>Welcome, Admin</Text>
        </Flex>
        <Box justifyContent='flex-end'>Logout</Box>
      </Flex>
    </Box>
  )
}

export default Navbar
