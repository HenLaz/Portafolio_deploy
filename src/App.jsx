import { useState } from 'react'
import Sidenav from './Componentes/Sidenav'
import Main from './Componentes/Main'
import Work from './Componentes/Work'
import Projects from './Componentes/Projects'
import Contact from './Componentes/Contact'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
