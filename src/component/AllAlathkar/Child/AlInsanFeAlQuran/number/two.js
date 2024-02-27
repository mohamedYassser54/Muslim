import React from 'react'
import style from'../../css/number.module.css'
function Two() {
  return (
    <div>
       <iframe
       className={style.video}
         src="https://www.youtube.com/embed/qE48KorARKA"
          title="قصص الإنسان في القرآن | الحلقة 2 | أصحاب الأخدود - ج 2 | Human Stories from Qur&#39;an"
          allowFullScreen 
          frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
       </div>
  )
}

export default Two;

