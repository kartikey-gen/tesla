import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import { useState } from 'react';
import Menu from './components/Menu';
import Headerblock from './components/Headerblock';
function App() {
  const [isSideMenu,setSideMenuOpen] = useState(false);
  return (
    <div className="App">
      <Router>
      <>
        {/* <p>Hello first!!!!!!!!!
        </p> */}
        <Navbar isSideMenu={isSideMenu} setSideMenuOpen={setSideMenuOpen}/>
        <Headerblock/>
        {isSideMenu&&<Menu/>}
        </>
        </Router>
    </div>
  );
}

export default App;
