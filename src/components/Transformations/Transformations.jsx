import React, {useState,  useEffect} from 'react'
import "./Transformations.css"
import left_arrow from "../../assets/left_arrow.png"
import right_arrow from "../../assets/right_arrow.png"
import left_arrow1 from "../../assets/left_arrow1.png"
import right_arrow1 from "../../assets/right_arrow1.png"
import left_arrow2 from "../../assets/left_arrow1.png"
import right_arrow2 from "../../assets/right_arrow1.png"
import {transformationsData} from "../../data/transformationsData";
import {transformationsData1} from "../../data/transformationsData";
import {transformationsData2} from "../../data/transformationsData";
const Transformations = () => {

  //lets use the usestate hook
  const [selected, setSelected] = useState(0); //selected is the index of the current selected image and by default the first image is the initial image so we have said useState(0) means 0th index
  const [selected1, setSelected1] = useState(0); //selected is the index of the current selected image and by default the first image is the initial image so we have said useState(0) means 0th index
  const [selected2, setSelected2] = useState(0); //selected is the index of the current selected image and by default the first image is the initial image so we have said useState(0) means 0th index
  const tLength = transformationsData.length;
  const tLength1 = transformationsData1.length;
  const tLength2 = transformationsData2.length;

  useEffect(() => {    //so that pictures should automatically change 
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % tLength);
      setSelected1((prev) => (prev + 1) % tLength1);
      setSelected2((prev) => (prev + 1) % tLength2);
    }, 4000); // Change photos every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [tLength, tLength1, tLength2]);


  return (
  <div className="transformations set_margin" id='transformations_section'>

    <div className="programs5 more300">
        <span className='edit_text'>Transformations</span>   
    </div>
    <div className="programs5 less300">
        <span className='no_edit'>Transformations</span>   
    </div>


    <div className="flip-card-container_transf">
      <div className="flip-card_transf">
      

          <div className="flip-card-back_transf left_trans">    
            <p className='heading_programs_trans'>FITNESS TRANSFORMATIONS</p> 
            <img className="left_transform_images" src={transformationsData1[selected1].image1} alt="" />
            <div className="arrows left_portion">
              <img
                onClick={()=>{
                selected1===0 ? setSelected1(tLength1-1):
                setSelected1((prev)=>prev-1);
              }}
              className='left_arrow' src={left_arrow1} alt="" />

              <img
                onClick={()=>{
                selected1===tLength1-1 ? setSelected1(0):
                setSelected1((prev)=>prev+1);
              }}
              className='right_arrow' src={right_arrow1} alt="" />
            </div>
          </div>


          <div className="flip-card-back_transf1 right_trans">
            <p className='heading_programs_trans'>WINNING MOMENTS</p> 
            <img className='winningimages' src={transformationsData2[selected2].image2} alt="" />
            {/* <p>Train under certified advance fitness trainer and prep coach Shaul Narula, having experience of more than 12 years and has transformed more than 200 lives.</p> */}
            <div className="arrows right_portion">
              <img
                onClick={()=>{
                selected2===0 ? setSelected2(tLength2-1):
                setSelected2((prev)=>prev-1);
              }}
              className='left_arrow' src={left_arrow2} alt="" />

              <img
                onClick={()=>{
                selected2===tLength2-1 ? setSelected2(0):
                setSelected2((prev)=>prev+1);
              }}
              className='right_arrow' src={right_arrow2} alt="" />
            </div>
          </div>


          <div className="flip-card-back_transf2 middle_trans">
            <p className='heading_programs_trans'>SKIN TRANSFORMATIONS</p> 
            <img className='hoveronit' src={transformationsData[selected].image} alt=""/>
             
            <div className="arrows middle_portion">

            
              <img
                onClick={()=>{
                selected===0 ? setSelected(tLength-1):
                setSelected((prev)=>prev-1);
              }}
              className='left_arrow' src={left_arrow} alt="" />


            
              <img
                onClick={()=>{
                selected===tLength-1 ? setSelected(0):
                setSelected((prev)=>prev+1);
              }}
              className='right_arrow' src={right_arrow} alt="" />
            </div>
          </div>


          



          


        </div>
      </div>

      





      <div className="flip-card-container_transf3">
        <div className="flip-card_transf3">   

          <div className="flip-card-back_transf3 last_trans">
            <p className='heading_programs_trans'>SKIN TRANSFORMATIONS</p> 
            <img className='hoveronit' src={transformationsData[selected].image} alt=""/>
             
            <div className="arrows middle_portion">

            
              <img
                onClick={()=>{
                selected===0 ? setSelected(tLength-1):
                setSelected((prev)=>prev-1);
              }}
              className='left_arrow' src={left_arrow} alt="" />


            
              <img
                onClick={()=>{
                selected===tLength-1 ? setSelected(0):
                setSelected((prev)=>prev+1);
              }}
              className='right_arrow' src={right_arrow} alt="" />
            </div>
          </div>
        </div>  
      </div>

          



     



    </div>

    






  )
}

export default Transformations
