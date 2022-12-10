import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [isSideMenu,setSideMenuOpen] = useState(false);
  return (
    <div className="App">
      <Router>
      <>
        {/* <p>Hello first!!!!!!!!!
        </p> */}
        <Navbar isSideMenu={isSideMenu} setSideMenuOpen={setSideMenuOpen}/>
        </>
        </Router>
    </div>
  );
}

export default App;
