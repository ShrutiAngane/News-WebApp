import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import articles from '../constants/articles.json'
import Spinner from './Spinner'

const News = () => {
    let data=articles.articles[11]
    let headlines=articles.articles.slice(8,11)
    const [covid,setcovid]=useState([])
    const[loading,setloading]=useState(true)
    useEffect(()=>{
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
      <section className='md:row-end-2 md:col-start-1 col-end-3'>
    <div className='grid gap-x-5 md:grid-cols-2'>
        <img src={data.media} className='md:col-end-2'></img>
        <h2 className='text-primary font-extrabold md:text-[35px] md:row-end-3 md:col-start-1'>{data.title}</h2>
        <div className='md:flex md:flex-col justify-evenly md:row-start-1 md:row-end-3'>
        <p className='text-secondary md:col-start-2 md:text-[20px]'>{data.summary}</p>
        <button className='bg-softRed text-white font-bold w-[150px] h-[60px] my-4 transition-all ease-in-out delay-100 hover:bg-softOrange md:col-start-2'><a href={data.link}>READ MORE</a></button>
        </div>
    </div>
    </section>
    <section className='md:col-start-3 z-0'>
      <div className='flex flex-col bg-primary h-[100%] justify-evenly p-[30px]'>
      {loading && <Spinner/>}
        <h2 className='font-bolder text-softOrange text-[30px] text-center mb-5 md:mb-0 drop-shadow-md'>COVID-19 UPDATES</h2>
        {covid.map((element,index)=>{
          return <div key={element.news_id} className='flex flex-col cursor-pointer mt-5'>
            <a className='text-white mb-5 hover:font-semibold hover:underline decoration-solid text-[22px]' href={element.link}>{element.title}</a>
            <p className='text-secondary mb-5'>{element.content}</p>
            <hr className={`${index!==covid.length-1?'flex mt-5':'hidden'}`}/>
          </div>
        })}
      </div>
    </section>
    <section className='flex flex-col md:flex-row gap-x-40 col-start-1 col-end-4 row-start-2 row-end-2 h-fit'>
      {headlines.map((element,index)=>{
        return <div className='grid grid-rows-1 gap-x-5' key={element._id}>
          <img src={element.media} className='w-[100%] h-[100%]'></img>
          <h4 className='row-start-1 col-start-2 font-inter text-[50px] text-grayishBlue font-bold'>{`0${(index+1)}`}</h4>
          <h2 className='row-start-1 col-start-2 mt-[74px] font-inter text-primary font-bold cursor-pointer text-[13px] md:text-[20px]'><a href={element.link} className='m-0'>{element.title}</a></h2>
        </div>

      })}

    </section>
    </main>
  )
}

export default News
