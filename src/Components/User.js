import React from 'react'
import { Box, Text, Flex, Spacer, Heading, Badge } from '@chakra-ui/react'
function UserDetails({
  name,
  Email,
  UserName,
  CreditCardType,
  Gender,
  PaymentMethod,
  PhoneNumber,
  date,
}) {
  return (
    <Box flex='1' w='100%' textAlign='left'>
      <Heading fontSize='xl'>{name}</Heading>

      <Badge borderRadius='lg' p={2} bgColor='#011b33' color='white'>
        Email
      </Badge>
      <Text mt={4}>{Email}</Text>

      <Flex>
        <Badge borderRadius='lg' p={2} bgColor='#011b33' color='white'>
          Username
        </Badge>
        <Spacer />
        <Text>{UserName}</Text>
      </Flex>
      <Flex>
        <Badge borderRadius='full' p={2} bgColor='#011b33' color='white'>
          {CreditCardType}
        </Badge>
        <Spacer />
        <Badge borderRadius='full' p={2} bgColor='#011b33' color='white'>
          {PaymentMethod}
        </Badge>
      </Flex>
      <Flex>
        <Badge borderRadius='lg' p={2} bgColor='#011b33' color='white'>
          Gender
        </Badge>
        <Spacer />
        <Text>{Gender}</Text>
      </Flex>
      <Flex>
        <Text>{PhoneNumber}</Text>
        <Spacer />
        <Text>{date}</Text>
      </Flex>
    </Box>
  )
}
const User = ({
  FirstName,
  LastName,
  Email,
  UserName,
  CreditCardType,
  Gender,
  PaymentMethod,
  PhoneNumber,
}) => {
  const name = `${FirstName} ${LastName}`
  return (
    <Box
      d='flex'
      flexDirection='column'
      marginTop='10px'
      w={['100%', null, null]}
      alignItems='start'
      h='18rem'
      px={4}
      py={5}
      marginBottom='5px'
      shadow='2xl'
      borderTop='15px solid #011b33'
      borderRadius='md'
    >
      <UserDetails
        name={name}
        Email={Email}
        CreditCardType={CreditCardType}
        UserName={UserName}
        Gender={Gender}
        PaymentMethod={PaymentMethod}
        PhoneNumber={PhoneNumber}
      />
    </Box>
  )
}

export default User
