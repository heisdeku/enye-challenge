import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Flex } from '@chakra-ui/react'
import Sidebar from './Components/Sidebar'
import Container from './Container'
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [method, setMethod] = useState({
    pay: '',
    gender: '',
  })
  const fetchUsers = async () => {
    setLoading(true)
    const data = await axios.get('https://api.enye.tech/v1/challenge/records')
    const { profiles } = data.data.records
    console.log(profiles)
    setUsers(profiles)
    setLoading(false)
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  const payChange = (e) => {
    setMethod({ gender: '', pay: e.target.value })
  }
  const genderChange = (e) => {
    setMethod({ pay: '', gender: e.target.value })
  }
  const gender = users.filter((user) => {
    let newUsers = user.Gender.toLowerCase() === method.gender.toLowerCase()
    return newUsers
  })
  console.log(gender)
  const payment = users.filter((user) =>
    user.PaymentMethod.toLowerCase().includes(method.pay.toLowerCase())
  )
  return (
    <Flex className='App'>
      <Sidebar
        gender={method.gender}
        pay={method.pay}
        genderChange={genderChange}
        payChange={payChange}
      />
      {loading ? (
        <p>Loading</p>
      ) : method.gender ? (
        <Container users={gender} />
      ) : method.pay !== null ? (
        <Container users={payment} />
      ) : (
        <Container users={users} />
      )}
    </Flex>
  )
}

export default App
