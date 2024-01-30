import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './css/Navbar.module.css'
function NavBar() {
    const expand = "lg";
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
              <Form className="d-flex">
              <Button variant="outline-primary">البحث</Button>
                  <Form.Control
                    type="search"
                    placeholder="البحث"
                    className="me-2"
                    aria-label="Search"
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