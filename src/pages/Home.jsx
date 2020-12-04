import React from 'react';
import '../App.css';
import Heart from '../assets/img/white-heart.png'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
    <div className = "img-place">
    <div className ="congrat-up"><h1>С днём рождения</h1></div>
    <Link to = "/Main">
    <img className = "img" src={Heart} alt="Heart" ></img>
    </Link>
  </div>
    <div className ="congrat-down"><h1>Для продолжения нажмите на сердце</h1></div>
    </div>
  );
}

export default App;
