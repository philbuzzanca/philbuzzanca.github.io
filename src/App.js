import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Resume from './pages/Resume'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/resume' element={<Resume />}/>
      </Routes>
    </Router>
  );
}

export default App;
