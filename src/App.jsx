import { Container } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
import History from './components/History'
import BackgroundVideo from './components/BackgroundVideo'

function App() {
  
  return (
      <Container style={{'overflow-y': scroll}}>
        <BackgroundVideo/>
        <Header />
        <History />
      </Container>
  )
}

export default App
