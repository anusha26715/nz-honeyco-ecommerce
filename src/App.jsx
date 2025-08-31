import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import './App.css'


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
