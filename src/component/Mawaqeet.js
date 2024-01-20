import React, { useEffect, useState } from 'react'
import style from './css/Mawaqeet.module.css'
function Mawaqeet() {
    const [data,setData]=useState([])
    const [selectedCountry, setSelectedCountry] = useState('egypt');
    const [selectedCity, setSelectedCity] = useState('cairo');
    useEffect(() => {
        const apiUrl = `http://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=${selectedCountry}&method=8`;
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(result => {
            let timings = result.data.timings;
            setData(timings);
            console.log(timings);
          })
          .catch(err => console.log(err));
      }, [selectedCountry, selectedCity]);
    
      const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };
    
      const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
      };
    
  return (
    <div>
        <div className={style.allselect}>
        <div className="select">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option hidden>اختر اسم الدولة</option>
          <option value="egypt">مصر</option>
          <option value="saudi_arabia">السعودية</option>
          <option value="OM">عمان</option>
        </select>
      </div>

      <div className="select">
        <select value={selectedCity} onChange={handleCityChange}>
          <option hidden>اختر اسم المدينة</option>
          {selectedCountry === 'egypt' && (
            <>
              <option value="cairo">القاهرة</option>
              <option value="Alexandria">الاسكندرية</option>
              <option value="Dakahlia">الدقهلية</option>
              <option value="Dakahlia">الدقهلية</option>
              <option value="Dakahlia">الدقهلية</option>
              <option value="Dakahlia">الدقهلية</option>
              
            </>
          )}
          {selectedCountry === 'saudi_arabia' && (
            <>
              <option value="riyadh">الرياض</option>
              {/* Add other Saudi cities as needed */}
            </>
          )}
          {selectedCountry === 'OM' && (
            <>
              <option value="Masqaţ">مسقط</option>
              {/* Add other Saudi cities as needed */}
            </>
          )}
        </select>
        </div>
        </div>
         <section className="py-4 container ">
        <div className="row justify-content-center">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-12 g-4 p-5 ">
                    <div className="col">
                    <div className="card">
                    <div className={style.card}>
                        <h1 className={style.name}>الفجر</h1>
                        {data.Fajr}
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                    <div className={style.card}>
                        <h1 className={style.name}>الشروق</h1>
                        {data.Sunrise}
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                    <div className={style.card}>
                        <h1 className={style.name}>الظهر</h1>
                        {data.Dhuhr}
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                    <div className={style.card}>
                        <h1 className={style.name}>العصر</h1>
                        {data.Asr}
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                    <div className={style.card}>
                        <h1 className={style.name}>المغرب</h1>
                        {data.Maghrib}
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                    <div className={style.card}>
                        <h1 className={style.name}>العشاء</h1>
                        {data.Isha}
                    </div>
                    </div>
                    </div>
        
                   
                  
                </div>
           
      </div>
      </section>
    </div>
  )
}

export default Mawaqeet