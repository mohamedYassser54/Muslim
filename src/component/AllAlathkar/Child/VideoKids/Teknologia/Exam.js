import React from 'react'
import style from'../../css/number.module.css'

function Exam() {
  return (
    <div>
       <iframe
       className={style.video}
       allowFullScreen
       src="https://www.youtube.com/embed/BLC95dluN8U?list=RDCMUCH3sARtnO18M5VPwLh-2_7g" title="ما هي كلمة السر التي قالها عمر لامة جعلتة يتفوق في الامتحان"
                 >
        
       </iframe>
    </div>
  )
}

export default Exam

