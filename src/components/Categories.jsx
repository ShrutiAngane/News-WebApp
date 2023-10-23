import React,{ useState,useEffect } from 'react'
import DisplayNews from './DisplayNews'
import Pagination from './Pagination'
import Spinner from './Spinner'
import Error from './Error'
import { useFetchData } from '../hooks/useFetchData'


const Categories = (props) => {

  const api=import.meta.env.VITE_APP_NEWSAPI_KEY;
  const {fetchData,data,loading,error,nextPage,pageSize}=useFetchData()
  const[page,setpage]=useState('')
  
  useEffect(()=>{

      fetchData(`https://newsdata.io/api/1/news?apikey=${api}&language=en&country=in&category=${props.cat}${page?`&page=${page}`:''}`,true);

        
    },[page,props.cat])

  
  return (
    <>
    {loading && <Spinner/>}
    {data.length==0?<Error text={error} btn={''}/>:
    <>
      <DisplayNews news={data}/>
      <Pagination page={nextPage} setpage={setpage} page_size={pageSize}/>
    </>
    }
    </>
  )
}

export default Categories
