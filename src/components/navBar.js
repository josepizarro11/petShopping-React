import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'

 const NavBar =()=>{
  return(
    <header  className="cabeçalho">
   <div className="login">
        <div >
          <Link className='pet-home' to="/" >Pet Shopping</Link>
        </div> 
        </div>
    </header>
  )
 }
export default NavBar;