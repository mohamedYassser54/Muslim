import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import style from '../css/Navbar.module.css'

function Footer() {
  return (
    <div style={{marginTop:"100px"}}>
    <MDBFooter bgColor='light' className="text-center text-lg-left" style={{position:"absolute",bottom:"-120px", left:"0",right:"0", marginTop:"300px"}}>
        <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 '>
            <div className={style.brand}>
            Muslim
            </div>
        </section>
      </MDBContainer>

      <div className=' p-3 d-flex' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',justifyContent:"center" }}>
        <a className={style.name} href='https://www.instagram.com/mohamed_y_asser/'>
         Mohamed Yasser
        </a>
       <div className={style.insta}>:Instagram</div>
      </div>
    </MDBFooter>
    </div>
  );
}
export default Footer