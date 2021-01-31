import React, { useState } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import User from './User'
import Pagination from './Pagination'

const UserList = ({ users }) => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    usersPerPage: 20,
  })
  //changes the current page numner
  const paginate = (number) =>
    setPagination({ ...pagination, currentPage: number })

  const LastIndex = pagination.currentPage * pagination.usersPerPage
  const FirstIndex = LastIndex - pagination.usersPerPage
  const CurrentUsers = users.slice(FirstIndex, LastIndex)

  return (
    <Box
      w='100%'
      px={['20px', null, '29px']}
      height='100vh'
      overflowY='scroll'
      paddingTop='25px'
    >
      <Pagination
        currentPage={pagination.currentPage}
        users={pagination.usersPerPage}
        total={users.length}
        paginate={paginate}
      />
      <SimpleGrid
        marginBottom='12rem'
        placeContent={['center', null, null]}
        columns={[1, 2, 3]}
        spacing={[2, 3, 4]}
        w='100%'
      >
        {CurrentUsers.map((user, i) => (
          <User key={i} {...user} />
        ))}
      </SimpleGrid>
      {/*<Grid templateColumns='repeat(4, 1fr)' gap='4' marginTop='35px'>
        {CurrentUsers.map((user, i) => (
          <Box p={4}>
            <User key={i} {...user} />
          </Box>
        ))}
        </Grid>*/}
    </Box>
  )
}

export default UserList
