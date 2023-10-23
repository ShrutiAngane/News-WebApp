import React, { useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Pagination from './Pagination'
import Spinner from './Spinner'
import { useFetchData } from '../hooks/useFetchData'

const Trending = () => {
  
  const[page,setpage]=useState('')
  const api=import.meta.env.VITE_APP_NEWSAPI_KEY;
  const {fetchData,data,loading,error,nextPage,pageSize}=useFetchData()

  useEffect(()=>{

    fetchData(`https://newsdata.io/api/1/news?apikey=${api}&language=en&country=in${page?`&page=${page}`:''}`,true)
        
    },[page])
  
  return (
    <>
    {loading && <Spinner/>}
    {data.lenghth==0?<Error text={error} btn={''}/>:
    <>
    <DisplayNews news={data}/>
    <Pagination page={nextPage} page_size={pageSize} setpage={setpage}/>
    </>
    }
    </>
  )
}

export default Trending
