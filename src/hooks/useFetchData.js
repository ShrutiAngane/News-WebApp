import { useState } from "react";

export const useFetchData=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [pageSize,setpageSize]=useState(0)
    const[nextPage,setNextPage]=useState('')
    const[error,setError]=useState('')

    const options = {
        method: "GET",
      };

    function fetchData(url,pagination){

        fetch(url,options).then(
            (response) =>{
                if(response.status===200){
                  return response.json();
                }else{
                    throw new Error('Sorry! No Results Found')
                }   
              }
          ).then(
            (response)=>{
                setData(response.results)
                setLoading(false)
                if(pagination){
                    setpageSize(response.totalResults);
                    setNextPage(response.nextPage);
                }
            }
          ).catch(
            (err) =>{ 
                setError(err.message);
                setLoading(false);
              }
          )

    }
    
    return { fetchData,data,loading,error,nextPage,pageSize }

}