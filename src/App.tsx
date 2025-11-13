import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portafolio from './Portafolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portafolio/>}/>
      </Routes>
    </Router>
  )
}

export default App