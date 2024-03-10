import React,{useEffect} from 'react'
// import video from '../image/2.mp4'
import video from '../image/3.mp4'
import img from '../image/3.png'
import Aos from 'aos'
import  "aos/dist/aos.css" 
import '../cssRam.css'
function Ramadan1() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='allflexe'>
        <video autoPlay muted loop className='videox'>
        <source src={video}/>
      </video>
     <div className="allcards" data-aos="fade-left">
      <div className="cardimg">
        <img src={img} alt="" />
        <img src={img} alt="" />

      </div>
      <div className="cardimg">
      <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Ramadan1
