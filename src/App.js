import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import {Provider, useSelector} from 'react-redux'
import {selectUser} from './userSlice'
import {Navigate} from 'react-router-dom';
import Signup from './components/Signup';
function App() {
  const user = useSelector(selectUser)
  const [isSideMenu,setSideMenuOpen] = useState(false);
  return (
    <div className="App">
      <>
      <Router>
      <Routes>
        <Route exact path='/' element={<Navbar isSideMenu={isSideMenu} setSideMenuOpen={setSideMenuOpen}/>}/>
        <Route exact path='/login' element={user?<Navigate to='/'/>:<Login/>}/>
          {/* {isSideMenu?<Navigate to='/'/>:<Login/>} */}
        <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
        </Router>
        </>
    </div>
  );
}

export default App;
