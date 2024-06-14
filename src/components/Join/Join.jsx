
// import React , {useEffect,useState} from 'react'
import React , {useState} from 'react'
import './Join.css'
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png" 
import gmail from "../../assets/gmail.png"
// import countryCode from "../../data/formnumberdata";
// import { BiSearch } from 'react-icons/bi';
// import Flag from 'react-world-flags' 

const Join = () => {
    


  const [joinState, setJoinState]=useState({}); 


  const changeHandler = (event) => {
    setJoinState({...joinState, [event.target.name]: event.target.value});
  };
  

  const submitHandler=(event)=>{
    event.preventDefault();
    const config = {
    
        SecureToken: "acddc3a2-d126-4765-be67-094e78d34d04",
        To : 'exaltaesthetics3@gmail.com',
        From : joinState.email,
        Subject : "Hello Exalt, someone wants to join!!",
        Body : `${joinState.name}, currently living in ${joinState.place},
                having country code ${joinState.dialcode} and mobile number ${joinState.number}, email address ${joinState.email} wants to join and is interested in ${joinState.plan}. Goal and any medical condition: ${joinState.goal}`,
    };
    if(window.Email){
        window.Email.send(config).then(()=>alert("Thank you for joining!"));
    }
  };


   







    //for different country numbers
    // const [flag, setFlag] = useState('IN')
    // const [setDialCode] = useState('+' + 91)
    // const [isActive, setIsActive] = useState(96)
    // const [showDropDown, setShowDropDown] = useState(false)
    // const [input, setInput] = useState('')
    // const [filteredName, setFilteredName] = useState([])

    // useEffect(() => {
    //     if (input === '') {
    //         setFilteredName(countryCode)
    //     }
    //     else {
    //         const filteredCountry = countryCode.filter(item => {
    //             const searchItem = input.toLowerCase();
    //             const prodName = item.name.toLowerCase();
    //             return prodName.startsWith(searchItem)

    //         })
    //         setFilteredName(filteredCountry)
    //     }
    // }, [input])











  return (
    <div className="join set_margin" id='join_us'>
        <div className="join12 more300">
            <span className='edit_text'>Joining</span>
        </div>
        


        <div className="join12 less300">
            <span className='noedit'>Joining</span>
        </div>

        <div className="leftrightjoin more1000">
            <div className="left_join">
                <div className="numlink">
                    <span>Contact : +91 9736366056</span>
                    <div className='social_links'>
                        <div className='socialtext'>
                            <span>Social Links : </span>   
                        </div>
                        <a to="route" target="_blank" rel="noreferrer" href="https://www.facebook.com/EXALTGYMS"><img className='facebook_icon'  src={facebook} alt="" /></a>
                        <a to="route" target="_blank" rel="noreferrer" href="https://www.instagram.com/fitnessexalt/"><img src={instagram} alt="" /></a>
                        <a to="route" target="_blank" rel="noreferrer" href= 'mailto:exaltaesthetics2@gmail.com'><img className='gmail' src={gmail} alt=""/></a>
                    </div>
                </div>
            </div>



            
            <div className="right_join">
                <div className="flip-card-container_join">
                    <div className="flip-card_join">
                        <div className="flip-card-back_join">
                            <form className='email_contact_join' onSubmit={submitHandler}> 
                                <div>
                                    Name* :&nbsp; <input type="text" name="name" value= {joinState.name || ""} placeholder='Enter your name' onChange={changeHandler} required></input>
                                </div>

                                <div>
                                    Country code* :&nbsp; <input type="text" name="dialcode" value= {joinState.dialcode || ""} placeholder='Enter your country code' onChange={changeHandler} required></input>
                                </div>
                                <div>
                                    Number* :&nbsp; <input type="number" name="number" value= {joinState.number || ""} placeholder='Enter your mobile number' onChange={changeHandler} required></input>
                                </div>



                                {/* <div className='numbercountries'>
                                    <span className='numberaddtext'> Number* : &nbsp;</span>
                                    <div className='phoneNumberContainer' >
                                        <div className="phoneInputBox">
                                            <div className="flagContainer"
                                                onClick={() => setShowDropDown(!showDropDown)}>
                                                <div className="flagImg">
                                                    <Flag code={flag} />
                                                </div>
                                            </div>
                                            <div className="inputBoxContainer">
                                                <div className="inputNumber">
                                                    <input className='countrycode' type="text" name="dialcode" value= {joinState.dialcode || ""} onChange={changeHandler} required placeholder='Country code'/> 

                                                    <input className='numberphone' type="number" name="number" value= {joinState.number || ""} onChange={changeHandler} required placeholder='Enter your number' /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flagDropDownBox" style={{
                                            opacity: !showDropDown ? "1" : "1",
                                            transition: "0.3s ease",
                                            visibility: !showDropDown ? "visible" : "visible",
                                            transformOrigin: "top"
                                        }}>
                                            <div className="countrySearch">
                                                <BiSearch size={25} />
                                                <input type="text"
                                                    placeholder='Search for Countries'
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)} />
                                            </div>


                                            <ul className='flagList'>
                                                {
                                                    filteredName.map((flag, index) => {
                                                        return (
                                                            <li key="{code}"  className={`flag 
                                                            ${isActive === index ? 'flagActive' : ''}`}
                                                                onClick={() => {
                                                                    setFlag(flag.code);
                                                                    setDialCode(flag.dial_code);
                                                                    setIsActive(index)
                                                                }}>
                                                                <div className="flagImg" >
                                                                    <Flag code={flag.code}
                                                                        fallback={<span>Unknown</span>} />
                                                                </div>
                                                                <div className="flagNames">
                                                                    <p className='flagName'>{flag.name}</p>
                                                                    <span>({flag.dial_code})</span>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}



                                <div className='foremail'> 
                                    Email* :&nbsp; <input type="email" name="email" value= {joinState.email || ""} placeholder='Enter your email' onChange={changeHandler} required></input>
                                </div>
                                <div>
                                    Present living location* :&nbsp; <input type="text" name="place" value= {joinState.place || ""}  placeholder='Enter the name of your city' onChange={changeHandler} required></input>
                                </div>
                                <div>
                                    <label htmlFor="plan" required>Choose a plan* : &nbsp;</label>
                                    <select name="plan" value= {joinState.plan || ""} id="plan" onChange={changeHandler} required>
                                        <option value="" disabled>Select a plan</option>
                                        <option value="Regular Gym membership">Regular gym membership</option>
                                        <option value="Three months membership">Three months gym membership</option>
                                        <option value="Six months membership">Six months gym membership</option>
                                        <option value="Personal training">Offline Personal training</option>
                                        <option value="Personal training">Online Personal training - 1 month membership</option>
                                        <option value="Personal training">Online Personal training - 2 months membership</option>
                                        <option value="Skin Aesthetics">Skin Aesthetics Program</option>
                                        <option value="Own fitness goal">Mention your fitness goal below</option>
                                    </select>
                                </div>
                                <div>
                                    <span className='text_goal'>Share your thoughts* :</span> &nbsp; <textarea  className='fitness_goal' type="text" name="goal" cols="30" rows="10" value= {joinState.goal || ""}  placeholder="Tell us about your fitness goal or any skin related issue. Do share any previous or present medical conditions." onChange={changeHandler} required></textarea>
                                </div>
                                <div>
                                    <button className='btn'>Join Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        







    


        <div className="leftrightjoin less1000">
            
            <div className="right_join">
                <div className="flip-card-container_join">
                    <div className="flip-card_join">
                        <div className="flip-card-back_join">
                            <form className='email_contact_join' onSubmit={submitHandler}> 
                                <div>
                                    Name* :&nbsp; <input type="text" name="name" value= {joinState.name || ""} placeholder='Enter your name' onChange={changeHandler} required></input>
                                </div>
                                <div>
                                    Country Code* :&nbsp; <input type="text" name="dialcode" value= {joinState.dialcode || ""} placeholder='Enter your country code' onChange={changeHandler} required></input>
                                </div>
                                <div>
                                    Number* :&nbsp; <input type="number" name="number" value= {joinState.number || ""} placeholder='Enter your mobile number' onChange={changeHandler} required></input>
                                </div>


                                {/* <div className='numbercountries'>
                                    <span className='numberaddtext'> Number* : &nbsp;</span>
                                    <div className='phoneNumberContainer' >
                                        <div className="phoneInputBox">
                                            <div className="flagContainer"
                                                onClick={() => setShowDropDown(!showDropDown)}>
                                                <div className="flagImg">
                                                    <Flag code={flag} />
                                                </div>
                                            </div>
                                            <div className="inputBoxContainer">
                                                <div className="inputNumber">
                                                    <input className='countrycode' type="text" name="dialcode" value= {joinState.dialcode || ""} onChange={changeHandler} required placeholder='Country code'/> 

                                                    <input className='numberphone' type="number" name="number" value= {joinState.number || ""} onChange={changeHandler} required placeholder='Enter your number' /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flagDropDownBox" style={{
                                            opacity: !showDropDown ? "1" : "1",
                                            transition: "0.3s ease",
                                            visibility: !showDropDown ? "visible" : "visible",
                                            transformOrigin: "top"
                                        }}>
                                            <div className="countrySearch">
                                                <BiSearch size={25} />
                                                <input type="text"
                                                    placeholder='Search for Countries'
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)} />
                                            </div>


                                            <ul className='flagList'>
                                                {
                                                    filteredName.map((flag, index) => {
                                                        return (
                                                            <li key="{code}" className={`flag 
                                                            ${isActive === index ? 'flagActive' : ''}`}
                                                                onClick={() => {
                                                                    setFlag(flag.code);
                                                                    setDialCode(flag.dial_code);
                                                                    setIsActive(index)
                                                                }}>
                                                                <div className="flagImg"  >
                                                                    <Flag code={flag.code}
                                                                        fallback={<span>Unknown</span>} />
                                                                </div>
                                                                <div className="flagNames">
                                                                    <p className='flagName'>{flag.name}</p>
                                                                    <span>({flag.dial_code})</span>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
















                                <div>
                                    Email* :&nbsp; <input type="email" name="email" value= {joinState.email || ""} placeholder='Enter your email' onChange={changeHandler} required></input>
                                </div>
                                <div>
                                    Present living location* :&nbsp; <input type="text" name="place" value= {joinState.place || ""}  placeholder='Enter the name of your city' onChange={changeHandler} required></input>
                                </div>
                                <div>
                                    <label htmlFor="planchange" required>Choose a plan* : &nbsp;</label>
                                    <select name="plan" value= {joinState.plan || ""} id="planchange" className='makeplan' onChange={changeHandler} required>
                                        <option value="" disabled>Select a plan</option>
                                        <option value1="Regular gym membership">Regular gym membership</option>
                                        <option value1="Three months membership">Three months gym membership</option>
                                        <option value1="Six months membership">Six months gym membership</option>
                                        <option value1="Personal training">Offline Personal training</option>
                                        <option value1="Personal training">Online Personal training - 1 month membership</option>
                                        <option value1="Personal training">Online Personal training - 2 months membership</option>
                                        <option value1="Skin Aesthetics">Skin Aesthetics Program</option>
                                        <option value1="Own fitness goal">Mention your fitness goal below</option>
                                    </select>
                                </div>
                                <div className='writeabout'>
                                    <span className='text_goal'>Share your thoughts* :</span> &nbsp; <textarea  className='fitness_goal' type="text" name="goal" cols="30" rows="10" value= {joinState.goal || ""}  placeholder="Tell us about your fitness goal or any skin related issue. Do share any previous or present medical conditions." onChange={changeHandler} required></textarea>
                                </div>
                                <div>
                                    <button className='btn btn_join'>Join Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>







            <div className="left_join">
                <div className="numlink">
                    <span>Contact : +91 9736366056</span>
                    <div className='social_links'>
                        <div className='socialtext'>
                            <span>Social Links : </span>   
                        </div>
                        <a to="route" target="_blank" aria-label="Facebook" rel="noreferrer" href="https://www.facebook.com/EXALTGYMS"><img className='facebook_icon'  src={facebook} alt="" /></a>
                        <a to="route" target="_blank" aria-label="Instagram" rel="noreferrer" href="https://www.instagram.com/fitnessexalt/"><img src={instagram} alt="" /></a>
                        <a to="route" target="_blank" aria-label="Gmail" rel="noreferrer" href= 'mailto:exaltaesthetics1@gmail.com'><img className='gmail' src={gmail} alt=""/></a>
                    </div>
                </div>
            </div>




        </div>
        
    </div>
  )
}

export default Join
