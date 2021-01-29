import './App.css'
import { Flex, Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import UserList from './UserList'
function App() {
  return (
    <Flex className='App'>
      <Sidebar />
      <Box w='calc(100% - 300px)'>
        <Navbar />
        <UserList />
      </Box>
    </Flex>
  )
}

export default App
