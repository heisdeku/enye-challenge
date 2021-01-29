import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
const User = ({ FirstName, LastName, Email, UserName, CreditCardNumber }) => {
  return (
    <Box
      d='flex'
      flexDirection='column'
      marginTop='10px'
      w='300px'
      alignItems='start'
      h='15rem'
      marginBottom='5px'
      shadow='2xl'
      borderTop='15px solid #011b33'
      borderRadius='8px'
    >
      <Flex justify='start'>
        <Text>{FirstName}</Text>
        <Text>{LastName}</Text>
      </Flex>
      <Box>
        <Text>{Email}</Text>
        <Text>{UserName}</Text>
      </Box>
      <Text>{CreditCardNumber}</Text>
    </Box>
  )
}

export default User
