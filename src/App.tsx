
import { Outlet } from 'react-router-dom'


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
