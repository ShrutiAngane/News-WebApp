import React, { useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Pagination from './Pagination'
import Spinner from './Spinner'


const Trending = () => {
  const[page,setpage]=useState(1)
  const[loading,setloading]=useState(true)
  const page_size=10
  const[trendingnews,setnews]=useState([])

  useEffect(()=>{
        const options = {
          method: "GET",
          headers: {
            "x-api-key": import.meta.env.VITE_APP_NEWSAPI_KEY,
          },
        };
        fetch(
          `https://api.newscatcherapi.com/v2/latest_headlines?topic=news&countries=IN&lang=en&page_size=${page_size}&page=${page}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setloading(false)
            setnews(response.articles);
          })
          .catch((err) => console.log(err));
    },[page])

  function update_page(){
    setpage((prev)=>prev+1)
  }
  function decrement_page(){
    setpage((prev)=>prev-1)
  }

  
  return (
    <>
    {loading && <Spinner/>}
    <DisplayNews news={trendingnews}/>
    <Pagination page={page} page_size={page_size} setpage={setpage}/>
    </>
  )
}

export default Trending
