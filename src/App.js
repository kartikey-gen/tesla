import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
function App() {
  const [isSideMenu,setSideMenuOpen] = useState(false);
  return (
    <div className="App">
      <>
      <Router>
      <Routes>
        <Route exact path='/' element={<Navbar isSideMenu={isSideMenu} setSideMenuOpen={setSideMenuOpen}/>}/>
        <Route exact path='/login' element={<Login/>}/>
        </Routes>
        </Router>
        </>
    </div>
  );
}

export default App;
