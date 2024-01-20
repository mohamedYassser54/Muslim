import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import style from '../css/Navbar.module.css'

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 '>
            <div className={style.brand}>
            Muslim
            </div>
        </section>
      </MDBContainer>

      <div className=' p-3 d-flex' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',justifyContent:"center" }}>
       <div className={style.insta}>Instagram:</div>
        <a className={style.name} href='https://www.instagram.com/mohamed_y_asser/'>
         Mohamed Yasser
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer