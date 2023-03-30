import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import './index.css'
import { Routes, Route } from "react-router-dom"
import Trending from './components/Trending';
import Search from './components/Search';
import Categories from './components/Categories';
import Error from './components/Error';



function App() {
  const[query,setquery]=useState('')
  const[category,setcategory]=useState('')
  return (
    <>
      <div className='bg-offWhite'>        
        <Navbar setquery={setquery} userinput={query} setcategory={setcategory}/>
        <Routes>
          <Route path='/' element={<News/>}/>
           <Route path='/trending' element={<Trending/>}/>
           <Route path='/search' element={<Search q={query}/>}/>
          <Route path='/categories' element={<Categories cat={category}/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App
