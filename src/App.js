import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Resume from './pages/Resume'
import MenuBar from './components/MenuBar'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/resume' element={<Resume />}/>
        <Route exact path='/portfolio' element={<Portfolio />}/>
      </Routes>
    </Router>
  );
}

export default App;
