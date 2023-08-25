import { useState } from 'react'

import NavBar from './components/Navbar/NavBar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  console.log(count[0])

  const titulo = 'titutlo App'
  const subtitulo = 'subtitulo App'
 

  const addCount = () => {
    setCount(count + 1)
  }
  
  
  return (
    <div>
      <NavBar />   

      <Titulo titulo={titulo} subtitulo={subtitulo} />

      <label> 
        <strong>{ count }</strong> 
      </label>  
      <button onClick={(addCount)}> + 1 </button>
      <Footer />

    </div>
  )
}

export default App
