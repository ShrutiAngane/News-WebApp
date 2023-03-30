import React, { useEffect,useState } from 'react'
import Spinner from './Spinner'
import defaultimg from '../assets/default_image.jpeg';
import article from '../constants/articles.json'
import defaultimg2 from '../assets/default2.jpg'
import ReactAnimatedWeather from 'react-animated-weather'
import { weathericons } from '../constants/weather';



const News = () => {
    const[weatherData,setweather]=useState({})
    const[news,setnews]=useState([])
    const[headlines,setheadline]=useState([])
    useEffect(()=>{
      const opt = {
        method: "GET",
        headers: {
          "x-api-key": import.meta.env.VITE_APP_NEWSAPI_KEY,
        },
      };
      fetch(
        `https://api.newscatcherapi.com/v2/latest_headlines?topic=news&countries=IN&lang=en`,
        opt
      )
        .then((response) => response.json())
        .then((response) => {
          setnews(response.articles.slice(0,1))
          setheadline(response.articles.slice(1,4));
          
        })
        .catch((err) => console.log(err));

        const dynamicWeather=(response)=>{
          const coords=response.coords;
          // alert(`Your latitude is ${coords.latitude} and your longitutde is ${coords.longitude}`)
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=en&appid=00f3f0ea968e536561dfe9112736987e`)
          .then((response)=>response.json())
          .then((data)=>setweather(data))
          .catch((err)=>console.log(err))
          
        }
  
        const staticWeather=()=>{
          alert('latitude longitude not found!')
        }

      navigator.geolocation.getCurrentPosition(dynamicWeather,staticWeather)
      

    },[])
  return (
    <main className='flex flex-col justify-evenly md:grid md:grid-cols-3 md:gap-y-5 max-w-full md:ml-[20px] mr-[20px] mt-[10px] mb-[10px]'>
      <section className='flex md:col-start-1 col-end-3 md:row-end-1 md:items-start'>
      {news.map((element)=>{
        return <div key={element._id} className='flex flex-col justify-between m-0 lg:items-center md:grid md:gap-x-5 md:grid-cols-2  w-full'>
          <div className='bg-black md:col-span-3 w-[100%]'>
          <img src={/d=blank/.test(element.media)?defaultimg:element.media} className='md:col-span-3 m-0 w-[100%] h-[300px] sm:h-[400px] 2xl:h-[500px] object-contain object-center' onError={(e)=>e.target.src=defaultimg}></img>
          </div>
          <div className='flex flex-col w-full lg:h-full justify-start gap-[20px] items-start md:col-start-1 md:row-start-2'>
          <h2 className='hidden md:block text-primary font-extrabold text-[18px] md:text-[20px]  2xl:text-[25px] text-ellipsis overflow-hidden'>{element.title?element.title:element.excerpt}</h2>
          <a className='md:hidden hover:cursor-pointer hover:underline' href={element.link}><h2 className='text-primary font-extrabold text-[18px] md:text-[20px] text-ellipsis overflow-hidden'>{element.title}</h2></a>
          <button className='hidden md:flex items-center justify-center bg-softRed text-white font-bold w-[150px] h-[60px] transition-all ease-in-out delay-100 hover:bg-softOrange'><a href={element.link}>READ MORE</a></button>
          </div>
          <p className='text-secondary md:col-start-2 text-[14px] md:row-start-2 md:text-[16px] 2xl:text-[20px] md:self-start'>{element.summary.length>20?element.summary:element.excerpt}</p>
        </div>
      })}
        
    </section>
    <section className='md:col-start-3 z-0 md:row-end-1 max-w-full max-h-full'>
      <div className='flex flex-col bg-primary h-[100%] justify-evenly items-center p-[10px] 2xl:p-[30px]'>
        <h2 className='font-bolder text-softOrange text-[25px] 2xl:text-[30px] text-center mb-5 md:mb-0 drop-shadow-md'>TODAY'S WEATHER</h2>
        <div className='flex flex-col items-center gap-3'>
        {weatherData.weather?<ReactAnimatedWeather icon={weathericons[weatherData.weather[0].main]?weathericons[weatherData.weather[0].main].icon : weathericons.ClearDay.icon} color={weathericons[weatherData.weather[0].main]?weathericons[weatherData.weather[0].main].color:weathericons.ClearDay.color} size={112} animate={true}/>:<p>Default image</p>}
        {weatherData.main?<h1 className='text-[#FFFFFF] text-[2rem] font-bold'>{weatherData.main.temp}°C</h1>:'Temperature not found'}
        <p className='text-[1.2rem] text-secondary'>{weatherData.name},India</p>
        {weatherData.weather?<h4 className='text-[1.2rem] text-secondary'>{weatherData.weather[0].main}</h4>:''}
        </div>
        <div className='flex flex-col w-[90%] ss:w-[75%] md:w-[100%] lg:w-[85%] 2xl:w-[70%] rounded-md p-[1em] bg-[rgba(255,255,255,0.2)]'>
          <div className='flex flex-col xs:flex-row justify-between sm:justify-around md:justify-between items-center'>
              <p className='text-[#FFFFFF] text-[1.5rem]'>Pressure</p>
              {weatherData.main?<p className='text-[1.5rem] text-[#FFFFFF]'>{weatherData.main.pressure}mbar</p>:'Pressure not found'}
          </div>
          <div className='flex flex-col xs:flex-row justify-between sm:justify-around md:justify-between items-center'>
              <p className='text-[#FFFFFF] text-[1.5rem]'>Humidity</p>
              {weatherData.main?<p className='text-[1.5rem] text-[#FFFFFF]'>{weatherData.main.humidity}%</p>:'humidity not found'}
          </div>
          <div className='flex flex-col xs:flex-row justify-between sm:justify-around md:justify-between items-center'>
              <p className='text-[#FFFFFF] text-[1.5rem]'>WindSpeed</p>
              {weatherData.wind?<p className='text-[1.5rem] text-[#FFFFFF]'>{weatherData.wind.speed}km/h</p>:'windspeed not found'}
          </div>
        </div>
      </div>
    </section>
    <section className='flex flex-col md:flex-row justify-between md:items-center col-start-1 col-end-4 row-start-2 row-end-2 h-fit max-w-full'>
      {headlines.map((element,index)=>{
        return <div className='grid grid-rows-1 items-center gap-x-1 md:w-[330px] lg:w-[400px] 2xl:w-[500px] w-fit' key={element._id}>
          <img src={/d=blank/.test(element.media)?defaultimg2:element.media} className='max-w-[150px] 2xl:max-w-[200px] h-[100%] object-fill' onError={(e)=>e.target.src=defaultimg}></img>
          <div className='flex flex-col h-full w-full justify-evenly items-start col-start-2'>
            <h4 className='font-inter text-[40px] ss:text-[50px] text-grayishBlue font-bold'>{`0${(index+1)}`}</h4>
            <h2 className='font-inter text-primary font-bold hover:underline cursor-pointer text-[13px] sm:text-[16px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]'><a href={element.link} className='m-0'>{element.title?element.title.length>67?element.title.slice(0,60)+'...':element.title:element.excerpt}</a></h2>
          </div>
        </div>

      })}
    </section>
    </main>
  )
}

export default News
