import React,{useState} from 'react'
import previous from '../assets/angle-circle-left.svg'
import Next from '../assets/angle-circle-right.svg'
import '../index.css'

const Pagination = (props) => {
    const page_size=props.page_size<=10?1:props.page_size<=50?Math.ceil(props.page_size/10):5;
    console.log(page_size);
    const[indexno,setIndex]=useState(1)
    console.log('index is :',indexno)
    function paginate(){
        props.setpage(props.page)
    }
  return (
    <section className="flex justify-center gap-[10px]">
      <button
        className={`text-[10px] w-[25px] md:w-[40px] md:h-[150px] md:mx-5 md:text-[16px]`}
        disabled={indexno==1?true:false}
        value={"Previous"}
        onClick={() => {
          setIndex((prev)=>prev+1)
          props.setpage(props.page)}}
      >
        <img src={previous} className={`${indexno==1?'opacity-25':''}`}/>
        Previous
      </button>
      <div className="flex justify-center items-center mt-[-5px] gap-1">
        {[...Array(page_size)].map((_, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                paginate()
                console.log(e.target.innerHTML)
                setIndex(e.target.innerHTML) 
              }}
              className={`${indexno==index+1?'bg-grayishBlue':''} px-[2px] ss:p-[8px] ss:mx-2 md:p-4 md:mx-3 mt-0 cursor-pointer hover:bg-grayishBlue`}
            >
              {index+1}
            </span>
          );
        })}
      </div>
      <button
        className={`${indexno==page_size?'disabled':''} text-[10px] w-[25px] md:w-[40px] md:h-[150px] md:text-[16px]`}
        disabled={indexno==page_size?true:false}
        value={"Next"}
        onClick={() => {
          props.setpage(props.page)
          setIndex((prev)=>prev+1)
        }}
      >
        <img src={Next} className={`${indexno==page_size?'opacity-25':''}`}/>
        Next
      </button>
    </section>
  );
}

export default Pagination
