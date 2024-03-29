import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import About from "./Pages/About/About"
import Projects from "./Pages/Projects/Projects"
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App
