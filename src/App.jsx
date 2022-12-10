import { useState } from 'react'
import './App.css'

import Nav from './component/Layout/Nav'
import Home from './component/Home/Home'
import About from './component/Home/About'
import WhatIDo from './component/Home/WhatIDo'
import Portfolio from './component/Home/Portfolio'

function App() {
  const [toggle, setToggel] = useState(false)

  const handleToggel = (e) => {
    setToggel(!toggle)
  }

  return (
    <div>
      <Nav toggle={toggle} handleToggel={handleToggel} />
      <Home />
      <About />
      <WhatIDo />
      <Portfolio />
    </div>
  )
}

export default App
