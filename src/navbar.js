import React from 'react'
import './App.css';
function Navbar(props){
    const Navcontainer = props.navcontainer
  let tableau = Navcontainer.map((element,i)=>
           <li  key={i} id='drop'><a className='menulist' href={element.ref}>{element.name}</a>{element.drop ?
           <ul className='dropdown'>{element.drop.map((el,j) =><li key={j}><a className='menulist' href={el.ref}>{el.name}</a></li>)} </ul> : null}
           </li>)
          
  return tableau;
  }
  export default Navbar
  
  