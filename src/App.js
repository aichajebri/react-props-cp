import React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from './components/profile/ProfilePic';
import FullName from './components/profile/FullName.js';
import Adresse from './components/profile/Adresse.js';
import profilePhoto from './components/profile/ProfilePic';
function App() {
  return (
    <div className="App">
    <center>
        <ProfilePic/>
        <FullName/>
        <Adresse/>
       </center>             
    </div>
  );
}


export default App;
