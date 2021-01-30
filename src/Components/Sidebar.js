import React from 'react'
import { Box, Text, option } from '@chakra-ui/react'

const Sidebar = ({ gender, pay, genderChange, payChange }) => {
  return (
    <Box
      bgColor='#011b33'
      color='white'
      boxShadow='1xl'
      p={8}
      w={[0, null, '250px']}
      height='100vh'
      d='flex'
      flexDirection='column'
      justifyContent='flex-start'
      alignItems='baseline'
    >
      <Text>Patient Manager</Text>
      <Box>
        <Text as='h4'>Filter By A Gender</Text>
        <select as='button' value={gender} onChange={genderChange}>
          <option selected>Choose an Option</option>
          <option value='male' bg='rgba(59,130,246,0.5)'>
            Male
          </option>
          <option value='female' bg='rgba(59,130,246,0.5)'>
            Female
          </option>
          <option bg='rgba(59,130,246,0.5)'>Prefer to Skip</option>
        </select>
      </Box>
      <Box>
        <Text as='h4'>Filter By Credit Card Type</Text>
        <select as='button' value={pay} onChange={payChange}>
          <option selected>Choose an Option</option>
          <option value='paypal' bg='rgba(59,130,246,0.5)'>
            paypal
          </option>
          <option value='check' bg='rgba(59,130,246,0.5)'>
            check
          </option>
          <option value='cc' bg='rgba(59,130,246,0.5)'>
            cc
          </option>
          <option value='money order' bg='rgba(59,130,246,0.5)'>
            money order
          </option>
        </select>
      </Box>
    </Box>
  )
}

export default Sidebar
