import React,{useState,useRef} from 'react'
import data from './dataAsmaallah.js/data'
import audio from './AllAlathkar/audio/17.mp3'
import style from './css/Asmaallah.module.css'
function Asmaallah() {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRef = useRef({});

  function toggleAudio(key) {
    const audio = audioRef.current[key];
    if (audio) {
      if (isPlaying === key && !audio.paused) {
        audio.pause();
        setIsPlaying(0); 
      } else {
        audio.play();
        setIsPlaying(key);
      }
    } else {
      console.error(`Audio element for key ${key} is undefined.`);
    }
  }
  

  return (
    <div className={style.con}>
      <div class={style.container}>
      <label>
        <input class={style.play_btn} type="checkbox" onClick={() => toggleAudio(1)} key={1}/>
        <div class={style.play_icon}></div>
        <div class={style.pause_icon}></div>
        <audio src={isPlaying === 1 ? audio : audio} ref={(ref) => audioRef.current[1] = ref} />
      </label>
    </div>
        <section className="py-4 container ">
        <div className="row justify-content-center">
            {data && data.map((item)=>(
      <div className="col-5 col-md-3 col-lg-2 mx-2 mb-2" key={item.id}>
        <div className={style.btn}>{item.name}</div>
      </div>
      ))}
      </div>
      </section>
      </div>
  )
}

export default Asmaallah
