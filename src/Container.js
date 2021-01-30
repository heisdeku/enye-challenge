import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import UserList from './Components/UserList'

const Container = ({ users }) => {
  return (
    <Box w={['100vw', null, 'calc(100% - 250px)']}>
      <Navbar />
      <UserList users={users} />
    </Box>
  )
}

export default Container
