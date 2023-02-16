import React, { useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Spinner from './Spinner'


const Search = (props) => {
  
  const apikey='TDJ-7vRhQtYnGOsMS2h8kQ713e-IOwecOKfYUFIv3M0'
  const[searchnews,setsearchnews]=useState([])
  const[loading,setloading]=useState(true)

  useEffect(()=>{
        const options = {
          method: "GET",
          headers: {
            "x-api-key": apikey,
          },
        };
        fetch(
          `https://api.newscatcherapi.com/v2/search?q=${props.q}&lang=en&page_size=5`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setloading(false)
            setsearchnews(response.articles);
          })
          .catch((err) => console.log(err));
    },[props.q])
  return (
    <>
    {loading && <Spinner/>}
    <DisplayNews news={searchnews}/>
    </>
  )
}

export default Search
