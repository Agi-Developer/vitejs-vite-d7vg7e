import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBar from './Components/NavBar'
import FormLabelModel from './Components/Model'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container fluid>
      <NavBar />
      <Home />
      <FormLabelModel />
    </Container>
  )
}

export default App
