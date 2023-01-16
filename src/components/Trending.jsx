import React, { useState,useEffect } from 'react'
import articles from '../constants/articles.json'
import DisplayNews from './DisplayNews'
import Pagination from './Pagination'


const Trending = () => {
  const[page,setpage]=useState(1)
  const page_size=10
  // const apikey='RvRXDEcMfLtzTfXENrdtstzyqTZBOK67zcduRvFTm00'
  // const[trendingnews,setnews]=useState([])

  // useEffect(()=>{
  //       const options = {
  //         method: "GET",
  //         headers: {
  //           "x-api-key": apikey,
  //         },
  //       };
  //       fetch(
  //         `https://api.newscatcherapi.com/v2/latest_headlines?topic=news&countries=IN&lang=en&page_size=${page_size}&page=${page}`,
  //         options
  //       )
  //         .then((response) => response.json())
  //         .then((response) => {
  //           setnews(response.articles);
  //         })
  //         .catch((err) => console.log(err));
  //   },[page])

  // function update_page(){
  //   setpage((prev)=>prev+1)
  // }
  // function decrement_page(){
  //   setpage((prev)=>prev-1)
  // }

  let trendingnews=articles.articles.slice(14,51)
  return (
    <>
    <DisplayNews news={trendingnews}/>
    <Pagination page={page} page_size={page_size} setpage={setpage}/>
    </>
  )
}

export default Trending
