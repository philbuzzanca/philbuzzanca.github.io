import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/resume' element={<Resume />}/>
        <Route exact path='/projects' element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;
