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



        {/* END DuaaAndIbtihalat */}



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
