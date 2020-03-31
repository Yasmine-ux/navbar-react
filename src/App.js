import React from 'react';
import './App.css';
import Navbar from './navbar.js';
const tab = [
  {name:'Home', ref:'https://www.home.com/',},
  {name:'Service', ref:'https://www.service.com/', drop :[
      {name:'For entrepreneurs', ref:'https://ent.com/'},
      {name:'For student', ref:'https://ent.com/'},
      {name:'For hobbyists', ref:'https://ent.com/'}
    ]
  },
  {name:'Contact', ref:'https://www.contact.com/',},
  ]

function App() {
  return (
    <div className="menu">
      <ul className='list'>
      <Navbar navcontainer={tab} />
      </ul>
    </div>
    )
}
export default App;


