import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({ users, total, currentPage, paginate }) => {
  let pages = []
  for (let i = 1; i <= Math.ceil(total / users); i++) {
    pages.push(i)
  }
  return (
    <Box
      d='flex'
      border='1px solid purple'
      justifyContent='space-between'
      w='250px'
      float='right'
      marginRight='35px'
    >
      <Text w='45px'>
        <a href='!#' onClick={() => paginate(currentPage - 1)}>
          Prev
        </a>
      </Text>
      {pages.map((page, i) => {
        return (
          <Text key={i} w='45px'>
            <a href='!#' onClick={() => paginate(page)}>
              {page}
            </a>
          </Text>
        )
      })}
      <Text w='45px'>
        <a href='!#' onClick={() => paginate(currentPage + 1)}>
          Next
        </a>
      </Text>
    </Box>
  )
}

export default Pagination
