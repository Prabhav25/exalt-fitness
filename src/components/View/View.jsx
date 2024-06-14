import React from 'react'
import './View.css'
import view_video from '../../assets/view_video.mp4'
const View = () => {
  return (
    <div className='view_scene set_margin' id='view_section'>
        <div className="viewscene more340">
            <div className="viewscene1">
                <span className='edit_text'>Beautiful</span>
                <span className='noedit'>Gym</span>
                <span className='edit_text'>View</span>
            </div>
        </div> 


        {/* for small devices */}
        <div className="viewscene less340">
            <div className="viewscene1">
                <span className='noedit'>Beautiful</span>
                <span className='noedit'>Gym</span>
                <span className='noedit'>View</span>
            </div>
        </div> 
        <div className="video_view_scene">
          <video controls autoPlay loop muted className='video_scene'>
              <source src={view_video} type="video/mp4" />
          </video>
        </div>
    </div>

  )
}

export default View
