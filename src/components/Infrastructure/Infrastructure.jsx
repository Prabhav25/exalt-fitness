import React from 'react'
import './Infrastructure.css'
import upinfra from "../../assets/upinfra.jpeg"
import downinfra from "../../assets/downinfra.jpeg"
import {Link } from "react-scroll"; 
// import up_nextinfra from "../../assets/up_nextinfra.jpg"
// import down_nextinfra from "../../assets/down_nextinfra.jpg"
const Infrastructure = () => {
  return (
    <div className="infra_struc" id='infrastructure_section'>
        <div className="infra">
            <div className="infra1"  id='infra300above'>
                <span className='edit_text'>GYM</span>
                <span className='noedit'>AND</span>
                <span className='edit_text'>PLANS</span>
            </div>


            <div className="infra1" id='infra300less'>
                <span className='noedit'>GYM</span>
                <span className='noedit'>AND</span>
                <span className='noedit'>PLANS</span>
            </div>
            <div className="image_updown" id="above1000">

                <div className="flip-card-container_infra">
                    <div className="flip-card_infra">

                   
                        <img className='upimage' src={upinfra} alt="" />
                        
                        <div className="flip-card-back_infra1">    
                            <p> We also own a gym that is situated in the hills with the best scenic view. Exalt fitness is a well renowned gym  providing you the best environment for a successful workout experience. We have an inbuilt cafe to provide you with the best quality food, so you don't miss your meals. Whether you're looking to build muscle, tone your body, or improve your cardiovascular fitness, this gym has something for everyone, with every type of machine you need for a complete workout
                            </p>
                        </div>

                        <img className='downimage' src={downinfra} alt="" />



                        <div className="flip-card-back_infra">    
                            {/* <p> */}
                                <p className='plans_programs'>Regular gym membership</p> 
                                <p>Regular gym membership will cost you &#2352;1000 with cardio, &#2352;1500 with cardio and &#2352;500 registration fee to be paid one time only</p> 
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>
                   
                        <div className="flip-card-back_infra">
                            {/* <p> */}
                                <p className='plans_programs'>10% off on three months membership</p> 
                                <p>Three months membership will cost you &#2352;2700 and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>    
                        <div className="flip-card-back_infra">
                            {/* <p> */}
                                <p className='plans_programs'>20% off on six months membership</p> 
                                <p>Six months membership will cost you &#2352;4800 and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>
                    </div>
                </div>
            </div>




            <div className="image_updown" id="between1000">

                <div className="flip-card-container_infra">
                    <div className="flip-card_infra">

                   
                        <img className='upimage' src={upinfra} alt="" />
                        
                        <img className='downimage' src={downinfra} alt="" />
                        
                        <div className="flip-card-back_infra1">    
                            <p> We also own a gym that is situated in the hills with the best scenic view. Exalt fitness is a well renowned gym  providing you the best environment for a successful workout experience. We have an inbuilt cafe to provide you with the best quality food, so you don't miss your meals. Whether you're looking to build muscle, tone your body, or improve your cardiovascular fitness, this gym has something for everyone, with every type of machine you need for a complete workout.
                            </p>
                        </div>




                        <div className="flip-card-back_infra">    
                            {/* <p> */}
                                <p className='plans_programs'>Regular gym membership</p> 
                                <p>Regular gym membership will cost you &#2352;1000 with cardio, &#2352;1500 with cardio and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>
                   
                        <div className="flip-card-back_infra">
                            {/* <p> */}
                                <p className='plans_programs'>10% off on three months membership</p> 
                                <p>Three months membership will cost you &#2352;2700 and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>    
                        <div className="flip-card-back_infra">
                            {/* <p> */}
                                <p className='plans_programs'>20% off on six months membership</p> 
                                <p>Six months membership will cost you &#2352;4800 and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>
                    </div>
                </div>
            </div>










            {/* for screens below 1000px */}
            <div className="image_updown" id="less1000">

                <div className="flip-card-container_infra">
                    <div className="flip-card_infra">

                   
                        <div className="flip-card-back_infra1">    
                            <p> We also own a gym that is situated in the hills with the best scenic view. Exalt fitness is a well renowned gym  providing you the best environment for a successful workout experience. We have an inbuilt cafe to provide you with the best quality food, so you don't miss your meals. Whether you're looking to build muscle, tone your body, or improve your cardiovascular fitness, this gym has something for everyone, with every type of machine you need for a complete workout.
                            </p>
                        </div>
                        <img className='upimage' src={upinfra} alt="" />

                        <img className='downimage' src={downinfra} alt="" />
                        

                        
                        <div className="flip-card-back_infra">    
                            {/* <p> */}
                                <p className='plans_programs'>Regular gym membership membership</p> 
                                <p>Regular gym membership will cost you &#2352;1000 with cardio, &#2352;1500 with cardio and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>
                   
                        <div className="flip-card-back_infra">
                            {/* <p> */}
                                <p className='plans_programs'>10% off on three months membership</p> 
                                <p>Three months membership will cost you &#2352;2700 and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>    
                        <div className="flip-card-back_infra">
                            {/* <p> */}
                                <p className='plans_programs'>20% off on six months membership</p> 
                                <p>Six months membership will cost you &#2352;4800 and &#2352;500 registration fee to be paid one time only</p>
                                <p className='plans_programs'>Diet and workout plan included</p> 
                                <div className='get_started_btn'>
                                    <button className='btn_infra'>
                                    <Link to='join_us'
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={0}> <span>Join now</span>
                                    </Link></button>
                                </div>
                            {/* </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Infrastructure
