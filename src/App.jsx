import { BrowserRouter } from 'react-router-dom'
import './components/styles/App.css'
import MainRoutes from './components/MainRoutes'


function App() {
  return (
    <>
    <BrowserRouter>
     <MainRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
