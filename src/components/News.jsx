import React, { useEffect,useState } from 'react'
import Spinner from './Spinner'
import defaultimg from '../assets/default_image.jpeg';


const News = () => {
    const [covid,setcovid]=useState([])
    const[loading,setloading]=useState(true)
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

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '658e699f22msh8344fd6dc2522ffp1a7a85jsnd47b7a9075c3',
          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      
      fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0', options)
        .then(response => response.json())
        .then(response =>{ 
          setloading(false)
          setcovid(response.news.slice(0,3)) 
        })
        .catch(err => console.error(err));

    },[])
  return (
    <main className='flex flex-col md:grid md:grid-cols-3 md:gap-y-5'>
      <section className='md:col-start-1 col-end-3 md:row-end-1'>
      {news.map((element)=>{
        return <div key={element._id} className='flex flex-col justify-between md:grid md:gap-x-5 md:grid-cols-2'>
          <img src={element.media} className='md:col-span-3 w-[100%] xl:w-[1200px] xl:h-[500px] lg:h-[500px] md:h-[600px] ' onError={(e)=>e.target.src=defaultimg}></img>
        <h2 className='text-primary font-extrabold sm:text-[25px] md:text-[35px] md:row-end-3 md:col-start-1'>{element.title}</h2>
        <p className='text-secondary md:col-start-2 sm:text-[18px] md:row-start-2 xl:text-[20px]'>{element.summary}</p>
        <button className='bg-softRed text-white font-bold w-[150px] h-[60px] my-4 md:mt-[340px] lg:mt-[228px] xl:mt-[220px] transition-all ease-in-out delay-100 hover:bg-softOrange md:col-start-1 md:row-start-2'><a href={element.link}>READ MORE</a></button>
        </div>
      })}
        
    </section>
    <section className='md:col-start-3 z-0 md:row-end-1'>
      <div className='flex flex-col bg-primary h-[100%] justify-evenly md:p-[10px] lg:p-[30px]'>
      {loading && <Spinner/>}
        <h2 className='font-bolder text-softOrange text-[25px] xl:text-[30px] text-center mb-5 md:mb-0 drop-shadow-md'>COVID-19 UPDATES</h2>
        {covid.map((element,index)=>{
          return <div key={element.news_id} className='flex flex-col cursor-pointer mt-5'>
            <a className='text-white mb-5 hover:font-semibold hover:underline decoration-solid text-[14px] md:text-[16px] xl:text-[22px]' href={element.link}>{element.title}</a>
            <p className='text-secondary mb-5'>{element.content}</p>
            <hr className={`${index!==covid.length-1?'flex mt-5':'hidden'}`}/>
          </div>
        })}
      </div>
    </section>
    <section className='flex flex-col md:flex-row lg:gap-x-40 col-start-1 col-end-4 row-start-2 row-end-2 h-fit'>
      {headlines.map((element,index)=>{
        return <div className='grid grid-rows-1 gap-x-5' key={element._id}>
          <img src={element.media} className='w-[200px] md:w-[100%] md:h-[100%]' onError={(e)=>e.target.src=defaultimg}></img>
          <h4 className='row-start-1 col-start-2 font-inter text-[50px] text-grayishBlue font-bold'>{`0${(index+1)}`}</h4>
          <h2 className='row-start-1 col-start-2 mt-[74px] font-inter text-primary font-bold hover:underline cursor-pointer text-[13px] sm:text-[16px] md:text-[18px] xl:text-[20px]'><a href={element.link} className='m-0'>{element.title}</a></h2>
        </div>

      })}

    </section>
    </main>
  )
}

export default News
