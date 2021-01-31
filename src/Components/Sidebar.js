import React from 'react'
import { Flex, Box, Text, Input, Select, Spacer } from '@chakra-ui/react'
import useWindowListener from '../hooks/useWindowListener'

const Sidebar = ({
  gender,
  pay,
  search,
  genderChange,
  payChange,
  searchUser,
}) => {
  const [width] = useWindowListener()
  if (width < 500) {
    return (
      <Box
        p={2}
        bgColor='#011b33'
        color='white'
        boxShadow='1xl'
        pos='absolute'
        bottom='0'
        bg='#011b33'
        w='100%'
      >
        <Input
          my={8}
          placeholder='Search for a User'
          value={search}
          onChange={searchUser}
          size='md'
          variant='flushed'
        />
        <Flex justify='space-between'>
          <Box my={4}>
            <Text as='h4' mb={3}>
              Filter By A Gender
            </Text>
            <Select
              placeholder='Choose an option'
              size='md'
              value={gender}
              onChange={genderChange}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option>Prefer to Skip</option>
            </Select>
          </Box>

          <Box my={4}>
            <Text as='h4' mb={3}>
              Filter By Credit Card
            </Text>
            <Select
              placeholder='Choose an option'
              size='md'
              value={pay}
              onChange={payChange}
            >
              <option value='paypal'>Paypal</option>
              <option value='check'>Check</option>
              <option value='cc'>CC</option>
              <option value='money order'>Money Order</option>
            </Select>
          </Box>
        </Flex>
      </Box>
    )
  } else {
    return (
      <Flex
        direction='column'
        bg='#011b33'
        color='white'
        boxShadow='1xl'
        p={8}
        display={['none', null, 'flex']}
        w={[0, null, '250px']}
        height='100vh'
        justify='flex-start'
        align='flex-start'
      >
        <Text>Users Manager</Text>
        <Input
          my={8}
          placeholder='Search for a User'
          value={search}
          onChange={searchUser}
          size='md'
          variant='flushed'
        />

        <Box my={4}>
          <Text as='h4' mb={3}>
            Filter By A Gender
          </Text>
          <Select
            placeholder='Choose an option'
            size='md'
            value={gender}
            onChange={genderChange}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option>Prefer to Skip</option>
          </Select>
        </Box>

        <Box my={4}>
          <Text as='h4' mb={3}>
            Filter By Credit Card
          </Text>
          <Select
            placeholder='Choose an option'
            size='md'
            value={pay}
            onChange={payChange}
          >
            <option value='paypal'>Paypal</option>
            <option value='check'>Check</option>
            <option value='cc'>CC</option>
            <option value='money order'>Money Order</option>
          </Select>
        </Box>
        <Spacer />
        <Box backgroundColor='grey' boxShadow='md' borderRadius='10px' p={5}>
          <Text fontSize='md'>
            With The platform, You can check all the users currently using your
            ecommerce store, check out their details and filter them according
            to their Payment Method and Gender.
          </Text>
        </Box>
      </Flex>
    )
  }
}

export default Sidebar
