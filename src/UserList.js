import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex, Spacer } from '@chakra-ui/react'
import axios from 'axios'
import User from './User'
import Pagination from './Pagination'

const UserList = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [pagination, setPagination] = useState({
    currentPage: 1,
    usersPerPage: 20,
  })
  const fetchUsers = async () => {
    setLoading(true)
    const data = await axios.get('https://api.enye.tech/v1/challenge/records')
    const { profiles } = data.data.records
    setUsers(profiles)
    setLoading(true)
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  //changes the current page numner
  const paginate = (number) =>
    setPagination({ ...pagination, currentPage: number })

  const LastIndex = pagination.currentPage * pagination.usersPerPage
  const FirstIndex = LastIndex - pagination.usersPerPage
  const CurrentUsers = users.slice(FirstIndex, LastIndex)

  return (
    <Box
      w='100%'
      paddingLeft='40px'
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
      <Box
        d='grid'
        gridTemplateColumns='repeat(4, 1fr)'
        gridGap='4'
        marginTop='35px'
      >
        {CurrentUsers.map((user, i) => (
          <Box>
            <User key={i} {...user} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default UserList
