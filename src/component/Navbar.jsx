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

// Search

// alathkar
// alathkaralsabah
const alathkaralsabah = ["أذكار الصباح", "اذكار الصباح", "اذكارالصباح", "أذكارالصباح"];
// alathkaralmsa
const alathkaralmsa=["أذكار المساء", "اذكار المساء", "اذكارالمساء", "أذكارالمساء"];
// athkarMasjid1
const athkarMasjid1=["دعاء الذهاب إلى المسجد", "دعاء الذهاب الى المسجد", "دعاءالذهاب الى المسجد" ];
// athkarMasjid2
const athkarMasjid2=["دعاء دخول المسجد", "دعاءدخول المسجد"];
// athkarMasjid3
const athkarMasjid3=["دعاء الخروج من المسجد", "دعاءالخروج من المسجد"];
// alathkaralnawm
const alathkaralnawm=["أذكار النوم", "اذكار النوم", "اذكارالنوم", "أذكارالنوم"];
// Sleep
const Sleep=["دعاء الفزع عند النوم", "الفزع", "دعاء الفزع"];
// Wakeup
const Wakeup=["أذكار الإستيقاظ من النوم", "أذكارالإستيقاظ من النوم", "أذكار الاستيقاظ من النوم", "اذكار الإستيقاظ من النوم","اذكار الاستيقاظ من النوم"];
// safar
const safar=["دعاء السفر","دعاءالسفر"];
// istikhara
const istikhara=["دعاء صلاة الاستخارة","دعاءصلاة الاستخارة","دعاء صلاه الاستخاره"];
// rain
const rain=["الدعاء إذا رأى المطر","الدعاء اذا راى المطر"];
// newclothes
const newclothes=["دعاء لبس الثوب الجديد","دعاءلبس الثوب الجديد"];
// maqaber
const maqaber=["دعاء زيارة القبور","دعاءزيارة القبور"];
// mosiba
const mosiba=["دعاء من أصيب بمصيبة","دعاءمن أصيب بمصيبة","دعاء من اصيب بمصيبة","دعاء من أصيب بمصيبه"];
// message
const message=["رسالة لك","رسالة","رساله لك","رساله"];
// game
const game=["مسابقة","مسابقه","لعبه","لعبة"];
// Child
const Child=["أطفال","اطفال"];
// Stories
const Stories=["حكايات","مسلسلات"];
// AlSalah
const AlSalah=["صلاة","صلاه","تعلم الصلاة","تعلم الصلاه"];
// Nasheed
const Nasheed=["أناشيد","اناشيد"];

// end alathkar

// home
const home =["الصفحة الرئيسية","الصفحه الرئيسيه"]
// alathkar
const alathkar =["الأذكار","الاذكار","اذكار","أذكار"]
// asmaallah
const asmaallah =["اسماء الله الحسنى","اسماء الله","اسماء الله الحسني"]
// Mawaqeet
const Mawaqeet =["اوقات الصلاة","اوقات الصلاه","مواعيد الصلاه","مواعيد الصلاة","مواقيت الصلاه","مواقيت الصلاة"]
// downloadApp
const downloadApp =["تحميل التطبيق","تنزيل التطبيق","التطبيق","البرنامج","تحميل البرنامج","تنزيل البرنامج"]
function NavBar() {
   const [filter,setFilter] = useState('');
    const expand = "lg";
    const navigate =useNavigate();
    const change =(e)=>{
      setFilter(e.target.value);
    }
    const handleClick =(e) =>{
      e.preventDefault();
      const name = filter;
      // alathkar
      if(alathkaralsabah.includes(name)){
        navigate("/alathkaralsabah")
      }
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
  return (
    <>
        <Navbar key={expand} expand={expand} className={`bg-body-tertiary mb-4 p-4 ${style.Navbar}`} style={{boxShadow:"0 0 8px #89b3e3"}}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={style.brand2} >
                Muslim
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="d-flex" onSubmit={handleClick}>
              <Button variant="outline-primary" type='submit'>البحث</Button>
                  <Form.Control
                    type="search"
                    placeholder="البحث"
                    className="me-2"
                    aria-label="Search"
                    onChange={change}
                  />
                </Form>
                <Nav className="justify-content-center flex-grow-1 pe-3 " >
                  <NavLink to="/home" className={style.colornav}>الصفحة الرئيسية</NavLink>
                  <NavLink to="/alathkar" className={style.colornav}>الأذكار</NavLink>
                  <NavLink to="/asmaallah" className={style.colornav}>اسماء الله الحسنى</NavLink>
                  <NavLink to="/Mawaqeet" className={style.colornav}>اوقات الصلاة</NavLink>
                  <NavLink to="/downloadApp" className={style.colornav}>تحميل التطبيق</NavLink>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <NavLink to="/home" className={style.brand} >Muslim</NavLink>
          </Container>
        </Navbar>
      
    </>
  );
}

export default NavBar;