import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function TalentName({name, link}) {
  console.log(name);
  return (
    <Link to = {link}>
    <span className="links">{name}</span>
    </Link>
  );
}

export default TalentName;
