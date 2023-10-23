import React, { useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Spinner from './Spinner'
import Error from './Error'
import { useFetchData } from '../hooks/useFetchData'


const Search = (props) => {
  
  const api=import.meta.env.VITE_APP_NEWSAPI_KEY;
  const {fetchData,data,loading,error}=useFetchData()

  useEffect(()=>{

    fetchData(`https://newsdata.io/api/1/news?apikey=${api}&language=en&country=in&q=${props.q}`,false)
        
    },[props.q])
  return (
    <>
    {loading && <Spinner/>}
    {data.length==0?<Error text={error} btn={''} subtext={'Please try searching something else'}/>:<DisplayNews news={data}/>}
    </>
  )
}

export default Search
