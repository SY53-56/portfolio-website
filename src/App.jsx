
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Layout from './Layout'
import Abouts from './pages/Abouts'
import Project from './components/Project'
function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
           <Route path="/" element={<Home/>}/>
           <Route path="/About" element={<Abouts/>} />
           <Route path="/project" element={<Project/>}/>
           </Route>
     
      </Routes>
    </>
  )
}

export default App
