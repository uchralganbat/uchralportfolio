import { Container } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
import History from './components/History'

function App() {
  
  return (
      <Container>
        <Header />
        <History />
        <h1>Life in America</h1>
      </Container>
  )
}

export default App
