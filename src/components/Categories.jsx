import React,{ useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Pagination from './Pagination'
import Spinner from './Spinner'


const Categories = (props) => {
  const[loading,setloading]=useState(true)
  const[page,setpage]=useState(1)
  const page_size=10
  const[categorynews,setcatnews]=useState([])

  useEffect(()=>{
        const options = {
          method: "GET",
          headers: {
            "x-api-key": import.meta.env.VITE_APP_NEWSAPI_KEY,
          },
        };
        fetch(
          `https://api.newscatcherapi.com/v2/latest_headlines?topic=${props.cat}&countries=IN&lang=en&page_size=${page_size}&page=${page}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setloading(false)
            setcatnews(response.articles);
          })
          .catch((err) => console.log(err));
    },[page,props.cat])

  
  return (
    <>
    {loading && <Spinner/>}
    <DisplayNews news={categorynews}/>
    <Pagination page={page} setpage={setpage} page_size={page_size}/>
    </>
  )
}

export default Categories
