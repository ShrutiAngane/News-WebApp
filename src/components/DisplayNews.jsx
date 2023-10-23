import React from 'react'
import defaultimg from '../assets/default_image.jpeg'
import defaultimg2 from '../assets/default2.jpg'

const DisplayNews = (props) => {
  return (
    <section className='flex flex-col'>
      {props.news.map((element,index)=>{
        return <div className='grid grid-rows-1 grid-cols-6 gap-x-5' key={index}>
          <img src={/d=blank/.test(element.image_url)?defaultimg2:element.image_url==null?defaultimg2:element.image_url} className='col-end-3 col-start-1 w-[110px] h-[100px] xs:w-[160px] ss:w-[200px] ss:h-[140px] sm:col-end-2' onError={(e)=>e.target.src=defaultimg}></img>
          <div className='flex flex-col justify-evenly row-start-1 col-start-3 sm:col-start-2 col-end-7'>
          <a href={element.link} ><h2 className='text-primary font-bold text-[15px] hover:underline md:font-bolder 2xl:text-[20px]'>{element.title}</h2></a>
          <p className='text-black text-[12px] 2xl:text-[22px] text-ellipsis'>{element.description==null?element.title:element.description.match(/[^.!?]+[.!?]+/g)==null?element.title:element.description.match(/[^.!?]+[.!?]+/g).length<=3?element.description:element.description.match(/[^.!?]+[.!?]+/g).slice(0,3)}</p>
          <button className='bg-softRed text-white  font-bold w-[150px] h-[40px] my-4 transition-all ease-in-out delay-100 hover:bg-softOrange'><a href={element.link}>READ MORE</a></button>
          <p className='text-[12px] 2xl:text-[16px]'>{`Published at : ${element.pubDate}`}</p>
          <hr className={`${index!==props.news.length-1?'flex':'hidden'}`}/>
          </div>
        </div>
      })}
    </section>
  )
}

export default DisplayNews
