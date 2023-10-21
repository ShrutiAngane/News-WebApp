import React, { useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Spinner from './Spinner'
import Error from './Error'


const Search = (props) => {
  
  const[searchnews,setsearchnews]=useState([])
  const[loading,setloading]=useState(true)

  useEffect(()=>{
        const options = {
          method: "GET",
        };
        const api=import.meta.env.VITE_APP_NEWSAPI_KEY;
        fetch(
          `https://newsdata.io/api/1/news?apikey=${api}&language=en&country=in&q=${props.q}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setloading(false)
            setsearchnews(response.results);
          })
          .catch((err) => console.log(err));
    },[props.q])
  return (
    <>
    {loading && <Spinner/>}
    {searchnews.length==0?<Error text={'Sorry! No Results Found'} btn={''} subtext={'Please try searching something else'}/>:<DisplayNews news={searchnews}/>}
    </>
  )
}

export default Search
