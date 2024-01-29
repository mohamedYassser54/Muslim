import React,{ lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Loading from './component/Loading';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Footer2 from "./component/dataAsmaallah.js/Footer2"
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
const  Child = lazy(()=>import('./component/AllAlathkar/child')) 
const  Stories  = lazy(()=>import('./component/AllAlathkar/Child/Stories')) 
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
const  AlSiraAlNabawiya  = lazy(()=>import('./component/AllAlathkar/Child/AlSiraAlNabawiya/AlSiraAlNabawiya')) 
const  YunusAlihAlsalam  = lazy(()=>import('./component/AllAlathkar/Child/YunusAlihAlsalam/YunusAlihAlsalam')) 



const  DownloadApp = lazy(()=>import('./component/DownloadApp'))
function App() {
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
            <Footer/>
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
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*  alathkaralmsa*/}
     <Route path='/alathkaralmsa' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Alathkaralmsa/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*  AthkarMasjid1*/}
     <Route path='/athkarMasjid1' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <AthkarMasjid1/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*  AthkarMasjid2*/}
     <Route path='/athkarMasjid2' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <AthkarMasjid2/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*  AthkarMasjid3*/}
     <Route path='/athkarMasjid3' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <AthkarMasjid3/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*athkarduaa*/}
     <Route path='/athkarduaa' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Athkarduaa/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*safar*/}
     <Route path='/safar' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Safar/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*alathkaralnawm*/}
     <Route path='/alathkaralnawm' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Alathkaralnawm/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*Sleep*/}
     <Route path='/sleep' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Sleep/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*wake up*/}
     <Route path='/wakeup' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Wakeup/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*Istikhara*/}
     <Route path='/istikhara' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Istikhara/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*rain*/}
     <Route path='/rain' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Rain/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/*Newclothes*/}
     <Route path='/newclothes' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Newclothes/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Maqaber */}
     <Route path='/maqaber' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Maqaber/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Mosiba */}
     <Route path='/mosiba' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Mosiba/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* Message */}
     <Route path='/message' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Message/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>
        {/* game */}
     <Route path='/game' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
              <Navbar/>
            <Game/>
            <Footer/>
            </div>
            </React.Suspense>
        }/>





        {/* Child */}
        <Route path='/Child' element={
          <React.Suspense fallback={<Loading/>}>
            <div>
            <Navbar/>
            <Child/>
            <Footer/>
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
