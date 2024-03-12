import React, { useState,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// image
import img1 from './image2/1.png'
import img2 from './image2/2.png'

// audio
import audio from './audio/1.mp3'
import audio2 from './audio/2.mp3'
import audio3 from './audio/3.mp3'
import audio4 from './audio/4.mp3'
import audio5 from './audio/5.mp3'
import audio6 from './audio/6.mp3'
import audio7 from './audio/7.mp3'
import audio8 from './audio/8.mp3'
import audio9 from './audio/9.mp3'
import audio10 from './audio/10.mp3'
import audio11 from './audio/11.mp3'
import audio12 from './audio/12.mp3'
import audio13 from './audio/13.mp3'
import audio14 from './audio/14.mp3'


import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import style from"../css/styles.module.css";

function Aathkaralmsa() {
  const [isPlaying, setIsPlaying] = useState(null);
  const [number ,setNumber] = useState({
    number : 1,
    number2:1,
    number3:1,
    number4:1,
    number5:3,
    number6:3,
    number7:3,
    number8:1,
    number9:3, 
    number10:3,
    number11:3, 
    number12:3, 
    number13:3, 
    number14:1, 
    number15:3,
    number16:1, 
    number17:1, 
    number18:4, 
    number19:7, 
    number20:3, 
    number21:1, 
    number22:1,  //راجع
    number23:10, 
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
         (key === 'number2' && number.number2 === 1)||
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
         (key === 'number15' && number.number15 === 1)||
         (key === 'number16' && number.number16 === 1)||
         (key === 'number17' && number.number17 === 1)||
         (key === 'number18' && number.number18 === 1)||
         (key === 'number19' && number.number19 === 1)||
         (key === 'number20' && number.number20 === 1)||
         (key === 'number21' && number.number21 === 1)||
         (key === 'number22' && number.number22 === 1)||
         (key === 'number23' && number.number23 === 1)
         ) {
        swiperRef.current.slideNext();
      }
     if(
      (key === "number" && number.number === 0)||
      (key === "number2" && number.number2 === 0)||
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
      (key === "number15" && number.number15 === 0)||
      (key === "number16" && number.number16 === 0)||
      (key === "number17" && number.number17 === 0)||
      (key === "number18" && number.number18 === 0)||
      (key === "number19" && number.number19 === 0)||
      (key === "number20" && number.number20 === 0)||
      (key === "number21" && number.number21 === 0)||
      (key === "number22" && number.number22 === 0)||
      (key === "number23" && number.number23 === 0)
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
           <h1><span>{number.number}</span></h1>
           <img src={img2} alt="" onClick={() => toggleAudio(2)} key={2} />
           <audio src={isPlaying === 1 ? audio : audio} ref={(ref) => audioRef.current[1] = ref} />
          <audio  src={isPlaying === 2 ? audio2 : audio2} ref={(ref) => audioRef.current[2] = ref} />


          </div>
          <div className={style.text}>
          <h4>أَعُوذُ بِاللَّهِ مِنَ الشَّيطَانِ الرَّجِيمِ</h4>
          <h5>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h5>
          <p>
          (1)
        ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (2)
        ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (3) مَٰلِكِ يَوۡمِ ٱلدِّينِ (4)
        إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ (5) ٱهۡدِنَا
        ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ (6) صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ
        عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ
         وَلَا ٱلضَّآلِّينَ (7)
         </p>
          </div>
          <button className={style.btn_class} onClick={() => click('number')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide>
        <div className={style.image}>
          <img src={img1} alt="" onClick={()=>toggleAudio(4)}  key={4}/>
           <h1><span>{number.number2}</span> </h1>
          <img src={img2} alt="" onClick={()=>toggleAudio(3)} key={3}/>
          <audio src={isPlaying === 3 ? audio3 : audio3} ref={(ref) => audioRef.current[3] = ref} />
          <audio src={isPlaying === 4 ? audio4 : audio4} ref={(ref) => audioRef.current[4] = ref} />
          </div>
        <div className={style.text}>
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p>
الم (1) ذلِكَ الْكِتابُ لا رَيْبَ فِيهِ هُدىً لِلْمُتَّقِينَ (2) الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلاةَ وَمِمَّا رَزَقْناهُمْ يُنْفِقُونَ (3) وَالَّذِينَ يُؤْمِنُونَ بِما أُنْزِلَ إِلَيْكَ وَما أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ (4)
أُولئِكَ عَلى هُدىً مِنْ رَبِّهِمْ وَأُولئِكَ هُمُ الْمُفْلِحُونَ (5)
          </p>
        </div>
        <button className={style.btn_class} onClick={() => click('number2')}>
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
           <h1><span>{number.number4}</span> </h1>
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
          <img src={img1} alt="" onClick={()=>toggleAudio(9)}  key={9}/>
           <h1><span>{number.number5}</span> </h1>
          <img src={img2} alt="" onClick={()=>toggleAudio(10)} key={10}/>
          <audio src={isPlaying === 9 ? audio9 : audio9} ref={(ref) => audioRef.current[9] = ref} />
          <audio src={isPlaying === 10 ? audio10 : audio10} ref={(ref) => audioRef.current[10] = ref} />
          </div>
        <div className={style.text}>
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p className={style.font2}>
          قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ .
          </p>
          <h6>[الإخلاص:١-٤]</h6>
          <span>من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين).</span>
          </div>
          <button className={style.btn_class} onClick={() => click('number5')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>
        {/* 6 */}
        <SwiperSlide>
        <div className={style.image}>
          <img src={img1} alt="" onClick={()=>toggleAudio(11)}  key={11}/>
           <h1><span>{number.number6}</span> </h1>
          <img src={img2} alt="" onClick={()=>toggleAudio(12)} key={12}/>
          <audio src={isPlaying === 11 ? audio11 : audio11} ref={(ref) => audioRef.current[11] = ref} />
          <audio src={isPlaying === 12 ? audio12 : audio12} ref={(ref) => audioRef.current[12] = ref} />
          </div>
        <div className={style.text}>
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p className={style.font2}>
          قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. 
          </p>
          <h6>[ الفلق:١-٥ ]</h6>
          </div>
          <button className={style.btn_class} onClick={() => click('number6')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>
        </SwiperSlide>
         {/* 7 */}
         <SwiperSlide>
        <div className={style.image}>
          <img src={img1} alt="" onClick={()=>toggleAudio(13)}  key={13}/>
           <h1><span>{number.number7}</span> </h1>
          <img src={img2} alt="" onClick={()=>toggleAudio(14)} key={14}/>
          <audio src={isPlaying === 13 ? audio13 : audio13} ref={(ref) => audioRef.current[13] = ref} />
          <audio src={isPlaying === 14 ? audio14 : audio14} ref={(ref) => audioRef.current[14] = ref} />
          </div>
        <div className={style.text}>
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p className={style.font2}>
          قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.          </p>
          <h6>[ الناس:١-٦ ]</h6>
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
        <h4>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h4>
          <p>
          رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ       
             </p>
          <h6>[الممتحنة:٤]</h6>
          <p>
          رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ             
          </p>
          <h6>[ الأعراف: 89]</h6>
          <p>
          رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ          </p>
          <h6>[آل عمران الاية ٨]</h6>
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
          <p className={style.mar}>
          «أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.» 
             </p>
          <span>من قالها ثلاث مرات صباحاً ومساء لم يضره شئ</span>
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
          <p className={style.mar}>
          اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ
             </p>
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
          <p className={style.mar}>
          بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم
          </p>
          <span>لم يضره من الله شيء.</span>
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
          <p className={style.mar}>
يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ          </p>
          <span>من قالها فقد دعى بخير الدنيا والأخرة</span>
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
          <p className={style.mar}>
          رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.         </p>
          <span>من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة.</span>
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
          <p>
          اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.
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
          لا إله إلا أنت سبحانك إني كنت من الظالمين.
           </p>
          </div>
          <button className={style.btn_class} onClick={() => click('number15')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide>

            {/*  */}
            
         {/* 16 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number16}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ. 
           </p>
          </div>
          <button className={style.btn_class} onClick={() => click('number16')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 

         {/* 17 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number17}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. 
          </p>
          <span>من قالها حين يمسى أدى شكر يومه.</span>
          </div>
          <button className={style.btn_class} onClick={() => click('number17')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 

         {/* 18 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number18}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.
          </p>
          <span>من قالها أعتقه الله من النار.</span>
          </div>
          <button className={style.btn_class} onClick={() => click('number18')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 
           {/*  */}
           
         {/* 19 */}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number19}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.
            </p>
          <span>من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة.</span>
          </div>
          <button className={style.btn_class} onClick={() => click('number19')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 
         {/* 20*/}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number20}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ ،اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.
            </p>
          </div>
          <button className={style.btn_class} onClick={() => click('number20')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 
         {/* 21*/}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number21}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ . 
            </p>
            <span>من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح.</span>
          </div>
          <button className={style.btn_class} onClick={() => click('number21')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 
         {/* 22*/}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number22}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          اللهم فاطر السماوات والأرض عالم الغيب والشهادة رب كل شيء ومليكه أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي وشر الشيطان وشركه،
 وأن أقترف على نفسي سوءً أو آجره إلى مسلم
            </p>
            <span>من قالها صباحاً ومساء تحميه من وسواس الشيطان</span>
          </div>
          <button className={style.btn_class} onClick={() => click('number22')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 
         {/* 23*/}
         <SwiperSlide>
        <div className={style.image}>

         <h1><span>{number.number23}</span> </h1>
         </div>
        <div className={style.text}>
          <p className={style.mar}>
          «اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، وَبَارِكْ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ »

            </p>
           
          </div>
          <button className={style.btn_class} onClick={() => click('number23')}>
          <span className={style.back}></span>
          <span className={style.front}></span>
          </button>      
            </SwiperSlide> 
      </Swiper>
    </div>
  )
}

export default Aathkaralmsa;
