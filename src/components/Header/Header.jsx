import React from 'react'
import './Header.css'  //importing css file
// import at_the_gym from "../../assets/at_the_gym.png"

// import {Link } from "react-scroll"; 

// import workout from "../../assets/workout.pdf"


// import Header1 from './Header1/Header1'
// import exalt1 from "../../assets/exalt1.jpeg"
// import background1 from "../../assets/background1.jpg"
// import breaklimits from "../../assets/breaklimits.jpg"


// import facebook from "../../assets/facebook.png"
// import instagram from "../../assets/instagram.png"

const Header = () => {
  return (
    
    <div  className='set_margin' id='header_section'>

        <div className="header" id='both_headers'>


            {/* <div className="last_header"> */}
                {/* <div className="header_heading"> */}
                    <div className='first'>
                        <span className='edit_text transform_body first_text more400'>Fitness for the Body <span className='koma'>,</span></span>

                        {/* for screens less than 400px */}
                        <span className='no_edit transform_body first_text less400'>Fitness for the Body <span className='koma'>,</span></span>
                        
                        <span className='withour first_text1'> Aesthetics for the Skin</span>
                    </div> 
                {/* </div> */}
            {/* </div> */}
      
      
     
    



            <div className="flip-card-container_home">
                <div className="flip-card_home">
                    
                    
                    <div className="flip-card-back_home">
                        {/* <p> */}
                            <h3 className='glow makeitbig'>Fitness Training</h3>
                            <p>
                                Join our fitness program and take the first step towards transforming your body and achieving your fitness goals. You don't have to worry about gym schedules or travel time, making it easier to fit into your busy life. Any past or present medical conditions will be taken into consideration and you will be getting a personalized plan that is tailored to your goals, and abilities. You will be receiving personalized advice on diet, hydration, sleep, stress management, and other factors that impact your overall health and fitness.
                            </p>
                            {/* <div className="results">
                                <div className='get_started_btn'>
                                    <button className='btn1'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span> Get started</span>
                                    </Link></button>
                                </div>
                                <div className='get_started_btn'>
                                    <button className='btn1'>
                                    <Link to='transformations_section'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Results</span>
                                    </Link></button>
                                </div>
                            </div> */}
                        {/* </p> */}
                    </div>


                    <div className='first first_after'>
                        <span className='edit_text withour more400'> Aesthetics for the Skin</span>

                        {/* for screens less than 400px */}
                        <span className='no_edit withour less400'> Aesthetics for the Skin</span>
                    </div>  



                    <div className="flip-card-back_home">    
                        {/* <p> */}
                            <h3 className='glow makeitbig'>Skin Aesthetics</h3>
                            <p>
                            Our skin aesthetics program is well designed to help individuals improve their appearance and health of their skin. We understand that every person's skin is unique, which is why our skin aesthetics program is customized to your individual needs. We take the time to assess your skin type, concerns, and goals to develop a personalized treatment plan that meets your specific needs. We firmly believe that healthy skin starts from the inside out, and we provide guidance on how to nourish your skin from within.
                            </p>
                            {/* <div className="results">
                                <div className='get_started_btn'>
                                    <button className='btn1'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span> Get started</span>
                                    </Link></button>
                                </div>
                                <div className='get_started_btn'>
                                    <button className='btn1'>
                                    <Link to='transformations_section'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Results</span>
                                    </Link></button>
                                </div>
                            </div> */}
                        {/* </p> */}
                    </div>

                </div> 
            </div>       







      
            {/* <div className="last_header">
                <div className="header_heading">
                    <div className='last'>
                        <span className='edit_text transform_body'>Fitness for the Body,</span>
                        <span className='withour'> Aesthetics for the Skin</span>
                    </div> 
                </div>
            </div> */}




        {/* <div className="flip-card-container_last">
            <div className="flip-card-back_last">  
                
                <p className='workout_pdfs'>Workout &nbsp; PDFs:&nbsp;</p>
                
                <div className='get_started_btn'>
                   <a href={workout} download><button className='btn1'>Back</button></a>
                </div>
           
           
                <div className='get_started_btn'>
                    <a href={workout} download><button className='btn1'>Chest</button></a>
                </div>
            
            
                <div className='get_started_btn'>
                    <a href={workout} download><button className='btn1'>Shoulder</button></a>
                </div>
            
                
                <div className='get_started_btn'>
                    <a href={workout} download><button className='btn1'>Legs</button></a>
                </div>
           
                
                <div className='get_started_btn'>
                    <a href={workout} download><button className='btn1'>Biceps</button></a>
                </div>
            
             
                <div className='get_started_btn'>
                    <a href={workout} download><button className='btn1'>Triceps</button></a>
                </div>
           
              
                <div className='get_started_btn'>
                    <a href={workout} download><button className='btn1'>Abs</button></a>
                </div>
            </div>
           
        </div> */}





















                    <div className='first about_nutrition'>
                        <span className='edit_text transform_body first_text'>EAT BETTER , </span>
                        
                        <span className='withour'>GET FIT , </span>

                        <span className='edit_text transform_body first_text'>RADIANT SKIN , </span>

                        <span className='withour'>LIVE WELL</span>
                    </div> 


        












        </div>
    


    </div>
  )
}

export default Header
