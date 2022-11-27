// import { useState } from 'react'
import './App.css'
import StartPage from './pages/StartPage'
import Footer from './Footer'
// import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App h-screen bg-bg-dark">
      {/* <Outlet /> */}
      <StartPage />
      <Footer />
    </div>
  )
}

export default App
