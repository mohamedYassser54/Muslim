import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import style from './css/footer.module.css'

function Footer() {
  return (
    <MDBFooter  className={`text-center text-lg-left ${style.footer2}`} >
        <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 '>
            <div className={style.brand}>
            Muslim
            </div>
        </section>
      </MDBContainer>

      <div className=' p-3 d-flex' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',justifyContent:"center" }}>
       <h3 className={style.nameee}>كل عام وانتم بخير </h3>
      </div>
    </MDBFooter>
  );
}
export default Footer