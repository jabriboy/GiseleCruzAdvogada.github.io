import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'
import Artigos from './pages/Artigos'
import Artigo from './pages/Artigo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todos-artigos' element={<Artigos/>}/>
            <Route path='/artigo' element={<Artigo/>}/>
          </Routes>
          <Footer/>
        </Router>
    </>
  )
}

export default App
