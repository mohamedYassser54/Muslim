import React,{ lazy,useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Loading from './component/Loading';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Footer2 from "./component/dataAsmaallah.js/Footer2"
import Footer3 from "./component/footer/footer3"

const Btn = lazy(()=>import('./component/Btn'))
const Home = lazy(()=>import('./component/Home'))
const Asmaallah = lazy(()=>import('./component/Asmaallah'))
const Mawaqeet = lazy(()=>import('./component/Mawaqeet'))
const Alathkar = lazy(()=>import('./component/Alathkar'))
const Alathkaralsabah = lazy(()=>import('./component/AllAlathkar/alathkaralsabah'))
const Alathkaralmsa = lazy(()=>import('./component/AllAlathkar/alathkaralmsa'))
const  AthkarMasjid1 = lazy(()=>import('./component/AllAlathkar/athkarMasjid1'))
const  AthkarMasjid2 = lazy(()=>import('./component/AllAlathkar/athkarMasjid2'))
const  AthkarMasjid3 = lazy(()=>import('./component/AllAlathkar/athkarMasjid3'))
const  Athkarduaa = lazy(()=>import('./component/AllAlathkar/athkarduaa'))
const  Safar = lazy(()=>import('./component/AllAlathkar/safar'))
const  Alathkaralnawm = lazy(()=>import('./component/AllAlathkar/alathkaralnawm'))
const  Sleep = lazy(()=>import('./component/AllAlathkar/Sleep'))
const  Wakeup = lazy(()=>import('./component/AllAlathkar/wakeup'))
const  Istikhara = lazy(()=>import('./component/AllAlathkar/istikhara'))
const  Rain = lazy(()=>import('./component/AllAlathkar/rain'))
const  Newclothes = lazy(()=>import('./component/AllAlathkar/newclothes'))
const  Maqaber = lazy(()=>import('./component/AllAlathkar/al-maqaber'))
const  Mosiba = lazy(()=>import('./component/AllAlathkar/mosiba'))
const  Message = lazy(()=>import('./component/AllAlathkar/Message'))
const  Game = lazy(()=>import('./component/AllAlathkar/game'))

// child
const  Child = lazy(()=>import('./component/AllAlathkar/child')) 
const  Stories  = lazy(()=>import('./component/AllAlathkar/Child/Stories')) 

// AlInsanFeAlQuran
const  AlInsanFeAlQuran  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/AlInsanFeAlQuran')) 
const  One  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/one')) 
const  Two  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/two')) 
const  Three  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/three')) 
const  Four  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/four')) 
const  Five  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/five')) 
const  Six  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/six')) 
const  Seven  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/seven')) 
const  Eight  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/eight')) 
const  Nine  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/nine')) 
const  Ten  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Ten')) 
const  Eleven  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Eleven')) 
const  Twelve  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Twelve')) 
const  Thirteen  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Thirteen')) 
const  Fourteen  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Fourteen')) 
const  Fifteen  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Fifteen')) 
const  Sixteen  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Sixteen')) 
const  Seventeen  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Seventeen')) 
const  Eighteen  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Eighteen')) 
const  Nineteen  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Nineteen')) 
const  Twenty  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Twenty')) 
const  TwentyOne  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentyOne')) 
const  TwentyTwo  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentyTwo')) 
const  TwentyThree  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentyThree')) 
const  TwentyFour  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentyFour')) 
const  TwentyFive  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentyFive')) 
const  TwentySix  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentySix')) 
const  TwentySeven  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentySeven')) 
const  TwentyEight  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentyEight')) 
const  TwentyNine  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/TwentyNine')) 
const  Thirty  = lazy(()=>import('./component/AllAlathkar/Child/AlInsanFeAlQuran/number/Thirty')) 

// AlSiraAlNabawiya
const  AlSiraAlNabawiya  = lazy(()=>import('./component/AllAlathkar/Child/AlSiraAlNabawiya/AlSiraAlNabawiya')) 

// YunusAlihAlsalam
const  YunusAlihAlsalam  = lazy(()=>import('./component/AllAlathkar/Child/YunusAlihAlsalam/YunusAlihAlsalam')) 

// VideoKids
const  AllVideo  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/AllVideo')) 
const  Teknologia  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Teknologia')) 
const  Alkhayer  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Alkhayer')) 
const  Esthlak  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Esthlak')) 
const  Family  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Family')) 
const  Exam  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Exam')) 
const  Cheatinginexamination  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Cheatinginexamination')) 
const  Iknow  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Iknow')) 
const  PatientVisit  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/PatientVisit')) 
const  Namima  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/Namima')) 
const  Alhamdulillah  = lazy(()=>import('./component/AllAlathkar/Child/VideoKids/Teknologia/alhamdulillah')) 

// AlSalah
const  AlSalah  = lazy(()=>import('./component/AllAlathkar/Child/AlSalah/AlSalah')) 
const  Ablution  = lazy(()=>import('./component/AllAlathkar/Child/AlSalah/All/Ablution')) 
const  LearnPray  = lazy(()=>import('./component/AllAlathkar/Child/AlSalah/All/LearnPray')) 
const  LearnSalah1  = lazy(()=>import('./component/AllAlathkar/Child/AlSalah/All/LearnSalah1')) 
const  LearnSalah2  = lazy(()=>import('./component/AllAlathkar/Child/AlSalah/All/LearnSalah2')) 
const  LearnSalah3  = lazy(()=>import('./component/AllAlathkar/Child/AlSalah/All/LearnSalah3')) 

// Nasheed
const  Songs  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/Songs')) 
const  Nasheed1  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed1')) 
const  Nasheed2  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed2')) 
const  Nasheed3  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed3')) 
const  Nasheed4  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed4')) 
const  Nasheed5  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed5')) 
const  Nasheed6  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed6')) 
const  Nasheed7  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed7')) 
const  Nasheed8  = lazy(()=>import('./component/AllAlathkar/Child/SongsKids/All/Nasheed8')) 

// QuranForKids
const  QuranForKids  = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/QuranForKids')) 
const  AlFatiha = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlFatiha')) 
const  AlIkhlas = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlIkhlas')) 
const  AlFalaq = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlFalaq')) 
const  AlNas = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlNas')) 
const  AlKafiroun = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlKafiroun')) 
const  AlKawthar = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlKawthar')) 
const  AlMasad = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlMasad')) 
const  AlNasr = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlNasr')) 
const  Mutafifin = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Mutafifin')) 
const  Abas= lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Abas')) 
const  AlInshiqaq = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlInshiqaq')) 
const  AlInfitar = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlInfitar')) 
const  AlNaba = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlNaba')) 
const  AlTakwir = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlTakwir')) 
const  Nazi3at = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Nazi3at')) 


const  AlAsr = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlAsr')) 
const  AlBalad = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlBalad')) 
const  AlBayyinah = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlBayyinah')) 
const  Alfi = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Alfil')) 
const   AlBorouj= lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlBorouj')) 
const  AlAalaa = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlAalaa')) 
const  AlAlaq = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlAlaq')) 
const  Adiyat = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Adiyat')) 
const  AlDhuha = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlDhuha'))
const  AlFajr = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlFajr')) 
const  Alfil = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Alfil')) 
const  AlGhashiyah = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlGhashiyah')) 
const  AlHumazah = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlHumazah')) 
const   AlLail= lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlLail')) 
const  AlQadr = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlQadr')) 
const  AlQariah = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlQariah')) 
const  AlShams = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlShams')) 
const  Alsharh = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Alsharh')) 
const  AlTakathor = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlTakathor')) 
const  AlTariq = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlTariq')) 
const  AlTin = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlTin')) 
const  AlZalzalah = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlZalzalah')) 
const  Quraysh = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/Quraysh')) 
const  AlMa3oun = lazy(()=>import('./component/AllAlathkar/Child/QuranForKids/quran/AlMa3oun')) 


// not Found
const NotFound =lazy(()=>import('./component/NotFound'))

const  DownloadApp = lazy(()=>import('./component/DownloadApp'))

const  Toastify = lazy(()=>import('./component/toastify'))
function App() {
  useEffect(() => {
    const notifyEvery10Seconds = () => {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            const notification = new Notification('صلي علي النبي');
          }
        });
      }
    };

    const intervalId = setInterval(notifyEvery10Seconds, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        
        {/* btn */}
        <Route path='/' element={
          <React.Suspense fallback={<Loading/>}>
            <Btn/>
            </React.Suspense>
        }/>
        <Route path='/Toastify' element={
          <React.Suspense fallback={<Loading/>}>
            <Toastify/>
            </React.Suspense>
        }/>
        {/* Home */}
        <Route path='/home' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Home/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>

        {/* NotFound */}
        <Route path='*' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
              <NotFound/>
              <Footer/>
            </div>
          </React.Suspense>
        }/>

        {/* asmaallah */}
     <Route path='/asmaallah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Asmaallah/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>
        {/* Mawaqeet */}
     <Route path='/Mawaqeet' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Mawaqeet/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>
        {/*  alathkar*/}
     <Route path='/alathkar' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Alathkar/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>
        {/*  alathkaralsabah*/}
     <Route path='/alathkaralsabah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Alathkaralsabah/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*  alathkaralmsa*/}
     <Route path='/alathkaralmsa' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Alathkaralmsa/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*  AthkarMasjid1*/}
     <Route path='/athkarMasjid1' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <AthkarMasjid1/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*  AthkarMasjid2*/}
     <Route path='/athkarMasjid2' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <AthkarMasjid2/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*  AthkarMasjid3*/}
     <Route path='/athkarMasjid3' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <AthkarMasjid3/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*athkarduaa*/}
     <Route path='/athkarduaa' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Athkarduaa/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*safar*/}
     <Route path='/safar' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Safar/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*alathkaralnawm*/}
     <Route path='/alathkaralnawm' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Alathkaralnawm/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*Sleep*/}
     <Route path='/sleep' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Sleep/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*wake up*/}
     <Route path='/wakeup' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Wakeup/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*Istikhara*/}
     <Route path='/istikhara' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Istikhara/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*rain*/}
     <Route path='/rain' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Rain/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/*Newclothes*/}
     <Route path='/newclothes' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Newclothes/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/* Maqaber */}
     <Route path='/maqaber' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Maqaber/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/* Mosiba */}
     <Route path='/mosiba' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Mosiba/>
            <Footer3/>
            </div>
            </React.Suspense>
        }/>
        {/* Message */}
     <Route path='/message' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Message/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>
        {/* game */}
     <Route path='/game' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Game/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>





        {/* Child */}
        <Route path='/Child' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Child/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>

        {/* Stories */}
        <Route path='/Stories' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Stories/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* AlInsanFeAlQuran */}
        <Route path='/AlInsanFeAlQuran' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlInsanFeAlQuran/>
            <Footer2/>
            </div>
            </React.Suspense>
        }/>
        {/* One */}
        <Route path='/One' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <One/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Two */}
        <Route path='/Two' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Two/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Three */}
        <Route path='/Three' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Three/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Four */}
        <Route path='/Four' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Four/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Five */}
        <Route path='/Five' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Five/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Six */}
        <Route path='/Six' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Six/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Seven */}
        <Route path='/Seven' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Seven/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Eight */}
        <Route path='/Eight' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Eight/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Nine */}
        <Route path='/Nine' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nine/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>

        {/* Ten */}
        <Route path='/Ten' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Ten/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Eleven */}
        <Route path='/Eleven' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Eleven/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Twelve */}
        <Route path='/Twelve' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Twelve/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Thirteen */}
        <Route path='/Thirteen' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Thirteen/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Fourteen */}
        <Route path='/Fourteen' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Fourteen/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Fifteen */}
        <Route path='/Fifteen' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Fifteen/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Sixteen */}
        <Route path='/Sixteen' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Sixteen/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>

        {/* Seventeen */}
        <Route path='/Seventeen' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Seventeen/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Eighteen */}
        <Route path='/Eighteen' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Eighteen/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Nineteen */}
        <Route path='/Nineteen' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nineteen/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Twenty */}
        <Route path='/Twenty' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Twenty/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentyOne */}
        <Route path='/TwentyOne' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentyOne/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentyTwo */}
        <Route path='/TwentyTwo' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentyTwo/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentyThree */}
        <Route path='/TwentyThree' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentyThree/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentyFour */}
        <Route path='/TwentyFour' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentyFour/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentyFive */}
        <Route path='/TwentyFive' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentyFive/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentySix */}
        <Route path='/TwentySix' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentySix/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentySeven */}
        <Route path='/TwentySeven' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentySeven/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentyEight */}
        <Route path='/TwentyEight' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentyEight/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* TwentyNine */}
        <Route path='/TwentyNine' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <TwentyNine/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Thirty */}
        <Route path='/Thirty' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Thirty/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>


         {/* End AlInsanFeAlQuran */}


         {/* Al Sira Al Nabawiya */}
         <Route path='/AlSiraAlNabawiya' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlSiraAlNabawiya/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
         {/*End Al Sira Al Nabawiya */}

         {/* YunusAlihAlsalam */}
         <Route path='/YunusAlihAlsalam' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <YunusAlihAlsalam/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* End YunusAlihAlsalam */}

         {/* التنشئةالسليمة */}
         <Route path='/التنشئةالسليمة' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AllVideo/>
            <Footer2/>
            </div>
            </React.Suspense>
            }/>

         {/* Teknologia */}
         <Route path='/Teknologia' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Teknologia/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Alkhayer */}
         <Route path='/Alkhayer' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Alkhayer/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Esthlak */}
         <Route path='/Esthlak' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Esthlak/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Family */}
         <Route path='/Family' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Family/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Exam */}
         <Route path='/Exam' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Exam/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Namima */}
         <Route path='/Namima' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Namima/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Cheatinginexamination */}
         <Route path='/Cheatinginexamination' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Cheatinginexamination/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Iknow */}
         <Route path='/Iknow' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Iknow/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* PatientVisit */}
         <Route path='/PatientVisit' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <PatientVisit/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* Alhamdulillah */}
         <Route path='/alhamdulillah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Alhamdulillah/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>

         {/* End التنشئةالسليمة */}

         {/* AlSalah */}
          {/* AlSalah */}
          <Route path='/AlSalah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlSalah/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
          {/* Ablution */}
          <Route path='/Ablution' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Ablution/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
          {/* LearnPray */}
          <Route path='/LearnSalah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <LearnPray/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
          {/* LearnSalah1 */}
          <Route path='/LearnSalah1' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <LearnSalah1/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
          {/* LearnSalah2 */}
          <Route path='/LearnSalah2' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <LearnSalah2/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
          {/* LearnSalah3 */}
          <Route path='/LearnSalah3' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <LearnSalah3/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
         {/* End Al */}


        {/* Nasheed */}
        <Route path='/Nasheed' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Songs/>
            <Footer2/>
            </div>
            </React.Suspense>
            }/>

        {/* Nasheed1 */}
        <Route path='/Nasheed1' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed1/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
        {/* Nasheed2 */}
        <Route path='/Nasheed2' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed2/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
        {/* Nasheed3 */}
        <Route path='/Nasheed3' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed3/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
        {/* Nasheed4 */}
        <Route path='/Nasheed4' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed4/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
        {/* Nasheed5 */}
        <Route path='/Nasheed5' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed5/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
        {/* Nasheed6 */}
        <Route path='/Nasheed6' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed6/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
        {/* Nasheed7 */}
        <Route path='/Nasheed7' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed7/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
        {/* Nasheed8 */}
        <Route path='/Nasheed8' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nasheed8/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>


        {/*End Nasheed */}

        {/* QuranForKids.js */}
        <Route path='/QuranForKids' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <QuranForKids/>
            <Footer2/>
            </div>
            </React.Suspense>
            }/>

            {/* al-fatiha */}
        <Route path='/AlFatihah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlFatiha/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlIkhlas */}
        <Route path='/AlIkhlas' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlIkhlas/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlFalaq */}
        <Route path='/AlFalaq' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlFalaq/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlNas */}
        <Route path='/AlNas' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlNas/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlKafiroun */}
        <Route path='/AlKafiroun' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlKafiroun/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlKawthar */}
        <Route path='/AlKawthar' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlKawthar/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlMasad */}
        <Route path='/AlMasad' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlMasad/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlNasr */}
        <Route path='/AlNasr' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlNasr/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* Mutafifin */}
        <Route path='/Mutafifin' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Mutafifin/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* Abas */}
        <Route path='/Abas' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Abas/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlInshiqaq */}
        <Route path='/AlInshiqaq' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlInshiqaq/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlInfitar */}
        <Route path='/AlInfitar' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlInfitar/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlNaba */}
        <Route path='/AlNaba' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlNaba/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlTakwir */}
        <Route path='/AlTakwir' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlTakwir/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* Nazi3at */}
        <Route path='/Nazi3at' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Nazi3at/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>

            {/* AlAsr */}
        <Route path='/AlAsr' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlAsr/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlBalad */}
        <Route path='/AlBalad' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlBalad/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlBayyinah */}
        <Route path='/AlBayyinah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlBayyinah/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* Alfi */}
        <Route path='/Alfi' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Alfi/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlBorouj */}
        <Route path='/AlBorouj' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlBorouj/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
       
            {/* AlAalaa */}
        <Route path='/AlAalaa' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlAalaa/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlAlaq */}
        <Route path='/AlAlaq' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlAlaq/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* Adiyat */}
        <Route path='/Adiyat' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Adiyat/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlDhuha */}
        <Route path='/AlDhuha' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlDhuha/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlFajr */}
        <Route path='/AlFajr' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlFajr/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* Alfil */}
        <Route path='/Alfil' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Alfil/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlGhashiyah */}
        <Route path='/AlGhashiyah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlGhashiyah/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlHumazah */}
        <Route path='/AlHumazah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlHumazah/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlLail */}
        <Route path='/AlLail' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlLail/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlQadr */}
        <Route path='/AlQadr' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlQadr/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>
            {/* AlQariah */}
        <Route path='/AlQariah' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <AlQariah/>
            <Footer/>
            </div>
            </React.Suspense>
            }/>  
             {/* AlShams */}
            <Route path='/AlShams' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <AlShams/>
                <Footer/>
                </div>
                </React.Suspense>
                }/>
                 {/* Alsharh */}
            <Route path='/Alsharh' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <Alsharh/>
                <Footer/>
                </div>
                </React.Suspense>
                
                }/>
                   {/* AlTakathor */}
            <Route path='/AlTakathor' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <AlTakathor/>
                <Footer/>
                </div>
                </React.Suspense>
                
                }/>
                {/* AlTariq */}
            <Route path='/AlTariq' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <AlTariq/>
                <Footer/>
                </div>
                </React.Suspense>
                
                }/>
                {/* AlTin */}
            <Route path='/AlTin' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <AlTin/>
                <Footer/>
                </div>
                </React.Suspense>
                
                }/>
                {/* AlZalzalah */}
            <Route path='/AlZalzalah' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <AlZalzalah/>
                <Footer/>
                </div>
                </React.Suspense>
                
                }/>
                {/* Quraysh */}
            <Route path='/Quraysh' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <Quraysh/>
                <Footer/>
                </div>
                </React.Suspense>
                
                }/>
                {/* AlMa3oun */}
            <Route path='/AlMa3oun' element={
              <React.Suspense fallback={<Loading/>}>
                <div>
                <Navbar/>
                <AlMa3oun/>
                <Footer/>
                </div>
                </React.Suspense>
                
                }/>
       
            {/* end QuranForKids.js */}


        {/* END Child */}

        {/*DownloadApp*/}
     <Route path='/downloadApp' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <DownloadApp/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
