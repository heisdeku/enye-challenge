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
    <Box
      d='flex'
      flexDirection='column'
      justify-content='space-between'
      w='100%'
      height='100%'
      justifyContent='space-between'
      textAlign='left'
    >
      <Heading fontSize='xl'>{name}</Heading>
      <Flex justify='space-between'>
        <Text>Email</Text>
        <Text>{Email}</Text>
      </Flex>
      <Spacer />
      <Flex>
        <Text>Username</Text>
        <Spacer />
        <Text>{UserName}</Text>
      </Flex>
      <Spacer />
      <Flex>
        <Badge
          borderRadius='full'
          variant='solid'
          bgColor='#011b33'
          colorScheme='green'
        >
          {CreditCardType}
        </Badge>
        <Spacer />
        <Badge
          borderRadius='full'
          variant='solid'
          bgColor='#011b33'
          colorScheme='green'
        >
          {PaymentMethod}
        </Badge>
      </Flex>
      <Spacer />
      <Flex>
        <Text>Gender</Text>
        <Spacer />
        <Text>{Gender}</Text>
      </Flex>
      <Spacer />
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
