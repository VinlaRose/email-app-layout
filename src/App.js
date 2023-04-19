
import React from 'react';
import { Route, Routes, NavLink  } from 'react-router-dom';
import './others/App.css';
import { Home } from './pages/Home';
import { Inbox } from './pages/Inbox';
import { Sent } from './pages/Sent';


function App() {
  return (
    <div className="App">
        <h1>Mail App</h1>
        <nav>
          <NavLink style={{margin:"10px"}} to="/">Home</NavLink>
          <NavLink style={{margin:"10px"}} to="/inbox">Inbox</NavLink>
          <NavLink style={{margin:"10px"}} to="/sent">Sent</NavLink>
        </nav>




        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/inbox" element={<Inbox/>}/>
          <Route path = "/sent" element={<Sent/>}/>
        </Routes>

    </div>
  );
}

export default App;
