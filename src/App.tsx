import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './index.css'
import AppRoutes from './routes'

function App() {


  return (

<>
<AppRoutes />
<Outlet/>
</>
  )
}

export default App
