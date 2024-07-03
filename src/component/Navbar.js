import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './css/Navbar.module.css'
import dataNa from './dataNavbar/dataNa'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
// Search

// alathkar
// alathkaralsabah
const alathkaralsabah = ["أذكار الصباح"];
// alathkaralmsa
const alathkaralmsa=["أذكار المساء"];
// athkarMasjid1
const athkarMasjid1=["دعاء الذهاب إلى المسجد"];
// athkarMasjid2
const athkarMasjid2=["دعاء دخول المسجد"];
// athkarMasjid3
const athkarMasjid3=["دعاء الخروج من المسجد"];
// alathkaralnawm
const alathkaralnawm=["أذكار النوم"];
// Sleep
const Sleep=["دعاء الفزع عند النوم"];
// Wakeup
const Wakeup=["أذكار الإستيقاظ من النوم"];
// safar
const safar=["دعاء السفر"];
// istikhara
const istikhara=["دعاء صلاة الاستخارة"];
// rain
const rain=["الدعاء إذا رأى المطر"];
// newclothes
const newclothes=["دعاء لبس الثوب الجديد"];
// maqaber
const maqaber=["دعاء زيارة القبور"];
// mosiba
const mosiba=["دعاء من أصيب بمصيبة"];
// message
const message=["رسالة لك"];
// game
const game=["مسابقة"];
// Child
const Child=["أطفال"];
// Stories
const Stories=["حكايات"];
// AlSalah
const AlSalah=["صلاة"];
// Nasheed
const Nasheed=["أناشيد"];

// end alathkar

// home
const home =["الصفحة الرئيسية"]
// alathkar
const alathkar =["الأذكار"]
// asmaallah
const asmaallah =["اسماء الله الحسنى"]
// Mawaqeet
const Mawaqeet =["اوقات الصلاة"]
// downloadApp
const downloadApp =["تحميل التطبيق"]

// Ramadan
// const Ramadan = ["رمضان"]

function NavBar() {
   const [filter,setFilter] = useState('');
    const expand = "lg";
    const navigate =useNavigate();
    const change =(e)=>{
      setFilter(e.target.value);
    }
    const handleClick =(e) =>{
      setIsMenuOpen(false);
      e.preventDefault();
      const name = filter;
      // alathkar
      if(alathkaralsabah.includes(name)){
        navigate("/alathkaralsabah")
      }
      // else if(Ramadan.includes(name)){
      //   navigate("/Ramadan")
      // }
      else if(alathkaralmsa.includes(name)){
        navigate("/alathkaralmsa");
      }
      else if(athkarMasjid1.includes(name)){
        navigate("/athkarMasjid1");
      }
      else if(athkarMasjid2.includes(name)){
        navigate("/athkarMasjid2");
      }
      else if(athkarMasjid3.includes(name)){
        navigate("/athkarMasjid3");
      }
      else if(alathkaralnawm.includes(name)){
        navigate("/alathkaralnawm");
      }
      else if(Sleep.includes(name)){
        navigate("/Sleep");
      }
      else if(Wakeup.includes(name)){
        navigate("/Wakeup");
      }
      else if(safar.includes(name)){
        navigate("/safar");
      }
      else if(istikhara.includes(name)){
        navigate("/istikhara");
      }
      else if(rain.includes(name)){
        navigate("/rain");
      }
      else if(newclothes.includes(name)){
        navigate("/newclothes");
      }
      else if(maqaber.includes(name)){
        navigate("/maqaber");
      }
      else if(mosiba.includes(name)){
        navigate("/mosiba");
      }
      else if(message.includes(name)){
        navigate("/message");
      }
      else if(game.includes(name)){
        navigate("/game");
      }
      else if(Child.includes(name)){
        navigate("/Child");
      }
      else if(Stories.includes(name)){
        navigate("/Stories");
      }
      else if(AlSalah.includes(name)){
        navigate("/AlSalah");
      }
      else if(Nasheed.includes(name)){
        navigate("/Nasheed");
      }
      // end alathkar
      else if(home.includes(name)){
        navigate("/home");
      }
      else if(alathkar.includes(name)){
        navigate("/alathkar");
      }
      else if(asmaallah.includes(name)){
        navigate("/asmaallah");
      }
      else if(Mawaqeet.includes(name)){
        navigate("/Mawaqeet");
      }
      else if(downloadApp.includes(name)){
        navigate("/downloadApp");
      }
      else{
        navigate("*")
      }
    }
    
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const handleLinkClick = () => {
      setIsMenuOpen(false); 
    };
  
    const handleToggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); 
    };
  return (
    <>
       <Navbar key={expand} expand={expand} className={`bg-body-tertiary mb-4 p-4 ${style.Navbar}`} style={{boxShadow:"0 0 8px #89b3e3"}}>
      <Container fluid>
        <Navbar.Toggle onClick={handleToggleMenu} aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          show={isMenuOpen}
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={style.brand2}>
              Muslim
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Form className="d-flex" onSubmit={(e) => handleClick(e, filter)&&handleLinkClick}>
          <Button variant="outline-primary" type='submit' >البحث</Button>
              <Stack spacing={1} sx={{ width: 300}}>
              <Autocomplete
  freeSolo
  id="free-solo-2-demo"
  disableClearable
  options={[
    ...alathkaralsabah,
    ...alathkaralmsa,
    ...athkarMasjid1,
    ...athkarMasjid2,
    ...athkarMasjid3,
    ...alathkaralnawm,
    ...Sleep,
    ...Wakeup,
    ...safar,
    ...istikhara,
    ...rain,
    ...newclothes,
    ...maqaber,
    ...mosiba,
    ...message,
    ...game,
    ...Child,
    ...Stories,
    ...AlSalah,
    ...Nasheed,
    ...home,
    ...alathkar,
    ...asmaallah,
    ...Mawaqeet,
    ...downloadApp,
    // ...Ramadan,
  ]}
  renderInput={(params) => (
    <TextField
      {...params}
      label="البحث"
      InputProps={{
        ...params.InputProps,
        type: 'search',
      }}
      onChange={change}
    />
  )}
  onChange={(event, value) => {
    if (value) {
      setFilter(value);
    }
  }}
/>


              </Stack>
            </Form>
            <Nav className="justify-content-center flex-grow-1 pe-3 " >
              <NavLink to="/home" onClick={handleLinkClick} className={style.colornav}>الصفحة الرئيسية</NavLink>
              <NavLink to="/alathkar" onClick={handleLinkClick} className={style.colornav}>الأذكار</NavLink>
              <NavLink to="/asmaallah" onClick={handleLinkClick} className={style.colornav}>اسماء الله الحسنى</NavLink>
              <NavLink to="/Mawaqeet" onClick={handleLinkClick} className={style.colornav}>اوقات الصلاة</NavLink>
              <NavLink to="/downloadApp" onClick={handleLinkClick} className={style.colornav}>تحميل التطبيق</NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <NavLink to="/home" className={style.brand}>Muslim</NavLink>
      </Container>
    </Navbar>
      
    </>
  );
}

export default NavBar;