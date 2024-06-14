

import React , {useState} from 'react'
import './Header1.css' 
import logo_text from "../../assets/logo_text.png" 
// import {Link } from "react-scroll";   
// import menuicon from "../../assets/menuicon.png"
// import closeicon from "../../assets/closeicon.png"






const Header1 = () => {
  const [header1, setHeader1] = useState(false);
  const changeBG = () =>{
    if(window.scrollY >=3){
      setHeader1(true);
    }
    else{
      setHeader1(false);
    }
  };
  window.addEventListener("scroll",changeBG);
  



 
 

  const [Toggle, showMenu] = useState(false);
  function handleMenuClick() {
    showMenu(false);
  }





 


  return (


    <div id="header1_section">
      <div
        className={
          header1 
              ? "header1 scroll" 
              : "header1"
        }
      >
          
          <img className='logo_image' src={logo_text} alt="" />

        
          <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
         
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#header1_section" className='nav_link'  onClick={handleMenuClick}>Home</a>
              </li>
              <li className="nav_item">
                <a href="#programs_section" className='nav_link'  onClick={handleMenuClick}>Programs</a>
              </li>
              <li className="nav_item">
                <a href="#transformations_section" className='nav_link'  onClick={handleMenuClick}>Transformations</a>
              </li>
              <li className="nav_item">
                <a href="#plans_section" className='nav_link'  onClick={handleMenuClick}>Plans</a>
              </li>
              <li className="nav_item">
                <a href="#infrastructure_section" className='nav_link'  onClick={handleMenuClick}>Exalt Gym</a>
              </li>
              <li className="nav_item">
                <a href="#view_section" className='nav_link'  onClick={handleMenuClick} >View</a>
              </li>
              <li className="nav_item">
                <a href="#join_us" className='nav_link'  onClick={handleMenuClick}>Join us</a>
              </li>
              
            </ul>
 
          </div>

          <button className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            {Toggle ? 'Close' : 'Menu'}
          </button>    


      </div>
    </div>
  )
}

export default Header1




























































