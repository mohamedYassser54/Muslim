import React, { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// image
import img1 from './image2/1.png'
import img2 from './image2/2.png'

// audio
import audio from './audio/15.mp3'
import audio2 from './audio/16.mp3'
import audio5 from './audio/5.mp3'
import audio6 from './audio/6.mp3'
import audio7 from './audio/7.mp3'
import audio8 from './audio/8.mp3'




import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import style from"../css/styles.module.css";

function AlathkarAlsabah() {
  const [isPlaying, setIsPlaying] = useState(null);
  const [number ,setNumber] = useState({
    number : 3,
    number3:1,
    number4:1,
    number5:1,
    number6:1,
    number7:3,
    number8:1,
    number9:33,
    number10:33,
    number11:34, 
    number12:1, 
    number13:1,    
    number14:1,  
    number15:1,  
  });
  const swiperRef = useRef(null);
  const click = (key) => {
    if (key in number) {
      setNumber((prevState) => ({
        ...prevState,
        [key]: prevState[key] - 1,
      }));

      if(
         (key === 'number' && number.number === 1)||
         (key === 'number3' && number.number3 === 1)||
         (key === 'number4' && number.number4 === 1)||
         (key === 'number5' && number.number5 === 1)||
         (key === 'number6' && number.number6 === 1)||
         (key === 'number7' && number.number7 === 1)||
         (key === 'number8' && number.number8 === 1)||
         (key === 'number9' && number.number9 === 1)||
         (key === 'number10' && number.number10 === 1)||
         (key === 'number11' && number.number11 === 1)||
         (key === 'number12' && number.number12 === 1)||
         (key === 'number13' && number.number13 === 1)||
         (key === 'number14' && number.number14 === 1)||
         (key === 'number15' && number.number15 === 1)
         ) {
        swiperRef.current.slideNext();
      }
     if(
      (key === "number" && number.number === 0)||
      (key === "number3" && number.number3 === 0)||
      (key === "number4" && number.number4 === 0)||
      (key === "number5" && number.number5 === 0)||
      (key === "number6" && number.number6 === 0)||
      (key === "number7" && number.number7 === 0)||
      (key === "number8" && number.number8 === 0)||
      (key === "number9" && number.number9 === 0)||
      (key === "number10" && number.number10 === 0)||
      (key === "number11" && number.number11 === 0)||
      (key === "number12" && number.number12 === 0)||
      (key === "number13" && number.number13 === 0)||
      (key === "number14" && number.number14 === 0)||
      (key === "number15" && number.number15 === 0)
      ){
        setNumber((prevState) => ({
          ...prevState,
          [key]: 0,
        }));
      }
     
    }
  };

  const audioRef = useRef({});

  function toggleAudio(key) {
    const audio = audioRef.current[key];
  
    // Check if the audio object is defined
    if (audio) {
      if (isPlaying === key && !audio.paused) {
        audio.pause();
        setIsPlaying(0); // Set to a value that doesn't match any key
      } else {
        audio.play();
        setIsPlaying(key);
      }
    } else {
      console.error(`Audio element for key ${key} is undefined.`);
    }
  }
  
    
  
  return (
    <div className={style.allSwiper}>
      <Swiper 
      className={style.mySwiper}
         spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >

        {/* 1 */}
        <SwiperSlide>
          <div className={style.image}>
           <img src={img1} alt="" onClick={() => toggleAudio(1)} key={1} />
           <h1><span>{number.number}</span> </h1>
           <img src={img2} alt="" onClick={() => toggleAudio(2)} key={2} />
           <audio src={isPlaying === 1 ? audio : audio} ref={(ref) => audioRef.current[1] = ref} />
          <audio  src={isPlaying === 2 ? audio2 : audio2} ref={(ref) => audioRef.current[2] = ref} />


          </div>
          <div className={style.text}>
            <h6 style={{color:"#000", fontSize:"16px"}}>يَجْمَعُ كَفَّيْهِ ثُمَّ يَنْفُثُ فِيهِمَا فَيَقْرَأُ فِيهِمَا:</h6>
          <p >
         (
            قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ 
         )
         <h6 className={style.font3}>[الإخلاص:١-٤]</h6>
         </p >
         <p >(قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ)
         </p>
         <h6 className={style.font3}>[ الفلق:١-٥ ]</h6>
         <p >
(         قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ        
)           </p >
         <h6 className={style.font3}>[ الناس:١-٦ ]</h6>
          </div>
          
          <button className={style.btn_class} onClick={() => click('number')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
        <div className={style.image}>
          <img src={img1} alt="" onClick={()=>toggleAudio(5)}  key={5}/>
           <h1><span>{number.number3}</span> </h1>
          <img src={img2} alt="" onClick={()=>toggleAudio(6)} key={6}/>
          <audio src={isPlaying === 5 ? audio5 : audio5} ref={(ref) => audioRef.current[5] = ref} />
          <audio src={isPlaying === 6 ? audio6 : audio6} ref={(ref) => audioRef.current[6] = ref} />
          </div>
        <div className={style.text}>
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p>
           ٱللَّهُ لَاۤ إِلَـٰهَ إِلَّا هُوَ ٱلۡحَیُّ ٱلۡقَیُّومُۚ لَا تَأۡخُذُهُۥ سِنَةࣱ وَلَا نَوۡمࣱۚ لَّهُۥ مَا فِی ٱلسَّمَـٰوَ ٰ⁠تِ وَمَا فِی ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِی یَشۡفَعُ عِندَهُۥۤ إِلَّا بِإِذۡنِهِۦۚ یَعۡلَمُ مَا بَیۡنَ أَیۡدِیهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا یُحِیطُونَ بِشَیۡءࣲ مِّنۡ عِلۡمِهِۦۤ إِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرۡسِیُّهُ ٱلسَّمَـٰوَ ٰ⁠تِ وَٱلۡأَرۡضَۖ وَلَا یَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِیُّ ٱلۡعَظِیمُ  
          </p>
          <h6>[البقرة: 255]</h6>
          </div>
          <button className={style.btn_class} onClick={() => click('number3')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide>
        <div className={style.image}>
          <img src={img1} alt="" onClick={()=>toggleAudio(7)}  key={7}/>
           <h1><span>{number.number4}</span> مره</h1>
          <img src={img2} alt="" onClick={()=>toggleAudio(8)} key={8}/>
          <audio src={isPlaying === 7 ? audio7 : audio7} ref={(ref) => audioRef.current[7] = ref} />
          <audio src={isPlaying === 8 ? audio8 : audio8} ref={(ref) => audioRef.current[8] = ref} />
          </div>
        <div className={style.text}>
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p className={style.font}>
          آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
          </p>
          <h6>[البقرة 285 - 286]</h6>
          <span>«من قرأ بالآيتين من آخر سورة البقرة فى ليلة كفتاه»</span>
          </div>
          <button className={style.btn_class} onClick={() => click('number4')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
        <div className={style.image}>
           <h1><span>{number.number5}</span> </h1>
          </div>
        <div className={style.text}>
          <p className={style.mar}>
          (
            بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِن أَمْسَكْتَ نَفْسِي فارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ
          )
          </p>
          </div>
          <button className={style.btn_class} onClick={() => click('number5')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>
        {/* 6 */}
        <SwiperSlide>
        <div className={style.image}>

           <h1><span>{number.number6}</span> </h1>
     </div>
        <div className={style.text}>
          <h5 className={style.mar}>
          (اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْياهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ)
          </h5>
          </div>
          <button className={style.btn_class} onClick={() => click('number6')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>
         {/* 7 */}
         <SwiperSlide>
        <div className={style.image}>
           <h1><span>{number.number7}</span> </h1>
          </div>
        <div className={style.text}>
          <h3 className={style.mar}>
          (اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ)
         </h3>
          </div>
          <button className={style.btn_class} onClick={() => click('number7')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>
         {/* 8 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number8}</span> </h1>
         </div>
        <div className={style.text}>
          <h2 className={style.mar}>
          (بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا)         
          </h2>
          </div>
          <button className={style.btn_class} onClick={() => click('number8')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>

         {/* 9 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number9}</span> </h1>
         </div>
        <div className={style.text}>
          <h2 className={style.mar}>
        (سُبْحَانَ اللَّهِ)
             </h2>
          </div>
          <button className={style.btn_class} onClick={() => click('number9')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>

         {/* 10 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number10}</span> </h1>
         </div>
        <div className={style.text}>
          <h2 className={style.mar}>
        (الْحَمْدُ لِلَّهِ)
             </h2>
          </div>
          <button className={style.btn_class} onClick={() => click('number10')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>

         {/* 11 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number11}</span> </h1>
         </div>
        <div className={style.text}>
        <h2 className={style.mar}>(  اللَّهُ أَكْبَرُ)</h2>
          </div>
          <button className={style.btn_class} onClick={() => click('number11')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>

         {/* 12 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number12}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.font2}>
          (اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الأَرْضِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ، وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ اللَّهُمَّ أَنْتَ الأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الآخِرُ فَلَيسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ)
          </p>
      
          </div>
          <button className={style.btn_class} onClick={() => click('number12')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>

         {/* 13 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number13}</span> </h1>
         </div>
        <div className={style.text}>
          <h5 className={style.mar}>
          (الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا، وَآوَانَا، فَكَمْ مِمَّنْ لاَ كَافِيَ لَهُ وَلاَ مُؤْوِيَ)
           </h5>

          </div>
          <button className={style.btn_class} onClick={() => click('number13')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>

             {/* 14 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number14}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          (اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ)
          </p>
      
          </div>
          <button className={style.btn_class} onClick={() => click('number14')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>
             {/* 15 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number15}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          (اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَلاَ مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ)
          </p>
      
          </div>
          <button className={style.btn_class} onClick={() => click('number15')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AlathkarAlsabah;
