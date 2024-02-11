import React, { useEffect, useState } from 'react'
import style from './css/Mawaqeet.module.css'
function Mawaqeet() {
    const [data,setData]=useState([])
    const [selectedCountry, setSelectedCountry] = useState('egypt');
    const [selectedCity, setSelectedCity] = useState('cairo');
    useEffect(() => {
      const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=${selectedCountry}&method=8`;
        fetch(apiUrl)
          .then(res => res.json())
          .then(result => {
            let timings = result.data.timings;
            setData(timings);
            console.log(timings);
          })
          .catch(err => console.error("Error fetching data:", err));
      }, [selectedCountry, selectedCity]);
    
      const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };
    
      const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
      };
    
  return (
    <div className={style.Mawaqeet}>
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
              <option value="Aswan">أسوان</option>
              <option value="Matrouh">مطروح</option>
              <option value="Dakahlia">الدقهلية</option>
              <option value="Port Said">بورسعيد</option>
              
            </>
          )}
          {selectedCountry === 'saudi_arabia' && (
            <>
              <option value="riyadh">الرياض</option>
              <option value="Makkah">مكه</option>
              <option value="Dammam">الدمام</option>
              <option value="Abha">أبها</option>
              <option value="Madinah">المدينة المنورة</option>
            </>
          )}
          {selectedCountry === 'OM' && (
            <>
              <option value="Muscat">مسقط</option>
              <option value="Al Buraymi">البريمي</option>
              <option value="Musandam">مسندم</option>
              <option value="Ash Sharqiyah North">محافظة شمال الشرقية</option>
              <option value="Dhofar">ظفار</option>
            </>
          )}
        </select>
        </div>
        </div>
         <section className="py-1 container ">
        <div className="row justify-content-center">
                <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2 g-4">
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
