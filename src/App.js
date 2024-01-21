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
            <Footer/>
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
        </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
