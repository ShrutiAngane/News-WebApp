import React,{ useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Pagination from './Pagination'
import Spinner from './Spinner'


const Categories = (props) => {
  const[loading,setloading]=useState(true)
  const[page,setpage]=useState('')
  const [pageSize,setpageSize]=useState(0)
  const[categorynews,setcatnews]=useState([])
  const[nextPage,setNextPage]=useState('')

  useEffect(()=>{
        const options = {
          method: "GET",
        };
        const api=import.meta.env.VITE_APP_NEWSAPI_KEY;
        fetch(
          `https://newsdata.io/api/1/news?apikey=${api}&language=en&country=in&category=${props.cat}&page=${page}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setloading(false)
            setcatnews(response.results);
            setNextPage(response.nextPage)
            setpageSize(response.totalResults)
          })
          .catch((err) => console.log(err));
    },[page,props.cat])

  
  return (
    <>
    {loading && <Spinner/>}
    <DisplayNews news={categorynews}/>
    <Pagination page={nextPage} setpage={setpage} page_size={pageSize}/>
    </>
  )
}

export default Categories
