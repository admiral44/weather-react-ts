import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <>
      <div className='col-4'>
        <div className="card border-info w-100" style={{ backgroundImage: 'linear-gradient(to bottom, #5511ac, #482cb7, #393dc1, #264cca, #0059d1)', color:'#fff' }}>
          <div className="card-body">

            <div className='row m-0'>
              <div className='col-8'>
                <h5 className="card-title heading" style={{ fontSize: '1.2rem' }}><b>{data.name} - {data.sys.country}</b></h5>

                <p className="heading" style={{ fontSize: '.8rem' }}>temp - {data.weather[0].description}</p>
                <div className='w-100 d-flex align-items-center justify-content-around'>
                  <p style={{ fontSize: '.6rem' }} >{fahrenheit}<sup>&#8457;</sup></p>
                  <p style={{ fontSize: '.6rem' }} >{celsius}<sup>&#8451;</sup></p>
                  <p style={{ fontSize: '.6rem' }}>{data.main.temp}K</p>
                </div>
              </div>
              <div className='col-4'>
                <div className='text-center'>
                  <img style={{ height: '3.5rem', width: '3.5rem' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="card-img-top" alt="..." />
                  <p className="heading" style={{ fontSize: '.4rem' }}>{data.weather[0].description}</p>
                </div>
              </div>
            </div>

            <div className='row mt-2 mb-2 p-0'>
              <div className='col-4'>
                <img src="https://img.icons8.com/color/28/null/hygrometer.png" alt='..' />
                <p className="card-text">{data.main.humidity}</p>
                <p className="heading" style={{ fontSize: '.4rem' }}>humidity</p>
              </div>
              <div className='col-4'>
                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/28/null/external-pressure-weather-flaticons-flat-flat-icons.png" alt='..' />
                <p className="card-text">{data.main.pressure}</p>
                <p className="heading" style={{ fontSize: '.4rem' }}>Pressure</p>
              </div>
              <div className='col-4'>
                <img src="https://img.icons8.com/fluency/28/null/wind.png" alt='..' />
                <p className="card-text">{data.wind.speed}</p>
                <p className="heading" style={{ fontSize: '.4rem' }}>Wind</p>
              </div>
            </div>

          </div>
        </div>

        <div className="card border-info w-100 mt-3 p-1" style={{ backgroundImage: 'linear-gradient(to top, #5511ac, #482cb7, #393dc1, #264cca, #0059d1)', color:'#fff' }}>
          <p className='heading m-0' style={{ fontSize: '.6rem',paddingLeft: '5px',display: 'flex' }}>Extended Calender</p>
          <div className='row m-0 g-3'>
            
            <div className='col-2'>
              <div className='text-center'>
                <p className='heading m-0' style={{ fontSize: '.3rem' }}><b>Day 1</b></p>
                <img style={{ height: '1.3rem', width: '1.3rem' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="card-img-top" alt="..." />
                <p className="heading" style={{ fontSize: '.3rem' }}><b>{data.weather[0].main}</b></p>
                <p className='heading' style={{ fontSize: '.3rem' }}>{fahrenheit}<sup>&#8457;</sup> <br />{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
            <div className='col-2'>
              <div className='text-center'>
                <p className='heading m-0' style={{ fontSize: '.3rem' }}><b>Day 2</b></p>
                <img style={{ height: '1.3rem', width: '1.3rem' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="card-img-top" alt="..." />
                <p className="heading" style={{ fontSize: '.3rem' }}><b>{data.weather[0].main}</b></p>
                <p className='heading' style={{ fontSize: '.3rem' }}>{fahrenheit}<sup>&#8457;</sup> <br />{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
            <div className='col-2'>
              <div className='text-center'>
                <p className='heading m-0' style={{ fontSize: '.3rem' }}><b>Day 3</b></p>
                <img style={{ height: '1.3rem', width: '1.3rem' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="card-img-top" alt="..." />
                <p className="heading" style={{ fontSize: '.3rem' }}><b>{data.weather[0].main}</b></p>
                <p className='heading' style={{ fontSize: '.3rem' }}>{fahrenheit}<sup>&#8457;</sup> <br />{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
            <div className='col-2'>
              <div className='text-center'>
                <p className='heading m-0' style={{ fontSize: '.3rem' }}><b>Day 4</b></p>
                <img style={{ height: '1.3rem', width: '1.3rem' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="card-img-top" alt="..." />
                <p className="heading" style={{ fontSize: '.3rem' }}><b>{data.weather[0].main}</b></p>
                <p className='heading' style={{ fontSize: '.3rem' }}>{fahrenheit}<sup>&#8457;</sup> <br />{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
            <div className='col-2'>
              <div className='text-center'>
                <p className='heading m-0' style={{ fontSize: '.3rem' }}><b>Day 5</b></p>
                <img style={{ height: '1.3rem', width: '1.3rem' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="card-img-top" alt="..." />
                <p className="heading" style={{ fontSize: '.3rem' }}><b>{data.weather[0].main}</b></p>
                <p className='heading' style={{ fontSize: '.3rem' }}>{fahrenheit}<sup>&#8457;</sup> <br />{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
            <div className='col-2'>
              <div className='text-center'>
                <p className='heading m-0' style={{ fontSize: '.3rem' }}><b>Day 2</b></p>
                <img style={{ height: '1.3rem', width: '1.3rem' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="card-img-top" alt="..." />
                <p className="heading" style={{ fontSize: '.3rem' }}><b>{data.weather[0].main}</b></p>
                <p className='heading' style={{ fontSize: '.3rem' }}>{fahrenheit}<sup>&#8457;</sup> <br />{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;