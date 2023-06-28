import React, { useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Pagination from './Pagination'
import Spinner from './Spinner'


const Trending = () => {
  const[page,setpage]=useState('')
  const[loading,setloading]=useState(true)
  const [pageSize,setpageSize]=useState(0)
  const[nextPage,setNextPage]=useState('')
  const[trendingnews,setnews]=useState([])

  useEffect(()=>{
        const options = {
          method: "GET",
        };
        const api=import.meta.env.VITE_APP_NEWSAPI_KEY;
        fetch(
          `https://newsdata.io/api/1/news?apikey=${api}&language=en&country=in&page=${page}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setloading(false)
            setnews(response.results);
            console.log(trendingnews)
            setNextPage(response.nextPage)
            setpageSize(response.totalResults)
          })
          .catch((err) => console.log(err));
    },[page])
  
  return (
    <>
    {loading && <Spinner/>}
    <DisplayNews news={trendingnews}/>
    <Pagination page={nextPage} page_size={pageSize} setpage={setpage}/>
    </>
  )
}

export default Trending
