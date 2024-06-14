import React from 'react'
import './Plans.css'
import {Link } from "react-scroll"; 




const Plans = () => {
  return (
    <div className="plans set_margin" id='plans_section'>
        <div className="plans1 more300">
            <span className='edit_text'>Membership</span>
            <span className='noedit again'>Plans</span>
        </div>
        <div className="plans1 less300">
            <span className='noedit'>Membership</span>
            <span className='noedit'>Plans</span>
        </div>
        <div className="flip-card-container2">
              <div className="flip-card2">
                  <div className="flip-card-back2">
                    {/* <p> */}

                      <p className='plans_programs'>20% off on offline personal training for one month membership, step by step guidance</p> 
                      <p>Learn proper exercise form, technique, and exercise science, which can help you exercise more effectively and with greater confidence</p>
                      <p className='plans_programs'>Improve your workout efficiency, reduce the risk of injury, and achieve faster and more significant results</p> 
                      <p className='plans_programs'>"Get fit, feel great!"</p> 

                      <div className='get_started_btn'>
                          <button className='btn123'>
                          <Link to='join_us'
                                  spy={true}
                                  activeClass="active"
                                  smooth={true}
                                  duration={0}> <span>Get started</span>
                          </Link></button>
                      </div>
 
                    {/* </p> */}
                    {/* <div className="join_now_btn">
                        <button className='btn'>Join now</button>
                    </div> */}
                  </div>




                  <div className="flip-card-back2">
                    {/* <p> */}

                      <p className='plans_programs'>10% off on online personal training program for one month membership</p> 
                      <p>Get expert guidance and guaranteed results. You will receive a personalized plan that takes into account your fitness level, body type, and any limitations you may have</p>
                      <p className='plans_programs'>Don't worry about your busy schedule, we will make it easier to fit fitness into your busy life</p>
                      <p className='plans_programs'>"Get fit, feel great!"</p>
                      <div className='get_started_btn'>
                            <button className='btn123'>
                            <Link to='join_us'
                                    spy={true}
                                    activeClass="active"
                                    smooth={true}
                                    duration={0}> <span> Get started</span>
                            </Link></button>
                      </div>
   
                    {/* </p> */}
                    {/* <div className="join_now_btn">
                        <button className='btn'>Join now</button>
                    </div> */}
                  </div> 



                  <div className="flip-card-back2">
                    {/* <p> */}

                      <p className='plans_programs'>15% off on online personal training program for two months membership</p> 
                      <p>Get expert guidance and guaranteed results. You will receive a personalized plan that takes into account your fitness level, body type, and any limitations you may have</p>
                      <p className='plans_programs'>Don't worry about your busy schedule, we will make it easier to fit fitness into your busy life</p> 
                      <p className='plans_programs'>"Get fit, feel great!"</p> 
                      <div className='get_started_btn'>
                            <button className='btn123'>
                            <Link to='join_us'
                                    spy={true}
                                    activeClass="active"
                                    smooth={true}
                                    duration={0}> <span> Get started</span>
                            </Link></button>
                      </div>

                    {/* </p> */}
                    {/* <div className="join_now_btn">
                        <button className='btn'>Join now</button>
                    </div> */}
                  </div>





                  <div className="flip-card-back2">
                    {/* <p> */}

                      <p className='plans_programs'>15% off on skin aesthetics program for one month membership</p> 
                      <p>Stressing about your dull and drained skin, but what if we present you with a solution that can transform your skin into healthy-looking within the span of just thirty days</p>
                      <p className='plans_programs'>The program is designed to help you achieve your skin goals and leave you feeling confident and happy with your skin</p> 
                      <p className='plans_programs'>"Get healthy, and radiant skin!"</p> 
                      <div className='get_started_btn'>
                            <button className='btn123'>
                            <Link to='join_us'
                                    spy={true}
                                    activeClass="active"
                                    smooth={true}
                                    duration={0}> <span> Get started</span>
                            </Link></button>
                      </div>

                    {/* </p> */}
                    {/* <div className="join_now_btn">
                        <button className='btn'>Join now</button>
                    </div> */}
                  </div> 

                   
                    
                  {/* <div className="flip-card-back2">
                    <p>
                    <p className='plans_programs'>10% off on three months membership</p> 
                    So three months membership will cost you <span>&#8377;</span>2700 and &#8377;500 registration fee to be paid one time only.
                    <p className='plans_programs'>Diet and workout plan included</p> 
                    </p>
                  </div>    


                  <div className="flip-card-back2">
                    <p>
                    <p className='plans_programs'>Regular plan includes &#8377;1000 gym fee and &#8377;500 registration fee for the first month
                    </p> 
                    <p className='plans_programs'>Then in continuation from the next month you have to pay &#8377;1000</p> 
                    <p className='plans_programs'>Diet and workout plan included</p> 
                    </p>
                  </div>     */}
                
                
            </div>
        </div>

    </div>

  )
}

export default Plans
