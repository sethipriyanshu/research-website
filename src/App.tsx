import React from 'react';
import '././App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './pages/home';
import { Research } from './pages/research';
import { GlobalEngagement } from './pages/global-engagement';
import { Publications } from './pages/publications';
import { Members } from './pages/members';
import { Album } from './pages/album';
import { Contact } from './pages/contact';
import { Navbar } from './components/navbar';



function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/research' element = {<Research/>}/>
      <Route path='/global' element = {<GlobalEngagement/>}/>
      <Route path='/publications' element = {<Publications/>}/>
      <Route path='/lab-members' element = {<Members/>}/>
      <Route path='/album' element = {<Album/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Routes>
     </Router>
    </div>
  );
}

export default App;
