import React from 'react'
import previous from '../assets/angle-circle-left.svg'
import Next from '../assets/angle-circle-right.svg'
import '../index.css'

const Pagination = (props) => {
 
    function paginate(p){
        props.setpage(p)
    }
  return (
    <section className="flex justify-center">
      <button
        className={`${props.page===1?'disabled':''} text-[10px] w-[25px] md:w-[40px] md:h-[150px] md:mx-5 md:text-[16px]`}
        value={"Previous"}
        onClick={() => props.setpage((prev) => prev - 1)}
      >
        <img src={previous} className={`${props.page===1?'opacity-25':''}`}/>
        Previous
      </button>
      <div className="flex justify-center items-center mt-[-5px]">
        {[...Array(props.page_size)].map((_, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                paginate(index+1) 
              }}
              className={`${props.page===index+1?'bg-grayishBlue':''}px-[2px] ss:p-[8px] ss:mx-2 md:p-4 md:mx-3 mt-0 border-2 border-black cursor-pointer hover:bg-grayishBlue`}
            >
              {index+1}
            </span>
          );
        })}
      </div>
      <button
        className="text-[10px] w-[25px] md:w-[40px] md:h-[150px] md:text-[16px]"
        value={"Next"}
        onClick={() => {
          props.setpage((prev) => prev + 1)
        }}
      >
        <img src={Next} className={`${props.page===10?'opacity-25':''}`}/>
        Next
      </button>
    </section>
  );
}

export default Pagination
