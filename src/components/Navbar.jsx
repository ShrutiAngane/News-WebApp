import React, { useRef, useState } from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import menuclose from '../assets/icon-menu-close.svg'
import { Link } from "react-router-dom"
import '../index.css'
import useClickOutside from './UseClickOutside.js'
import { categories } from '../constants/categories'



const Navbar = (props) => {
    const[toggle,settoggle]=useState(false)
    const[search,setsearch]=useState(false)
    const[searchmob,setsearchmob]=useState(false)
    const[dropdown,setdropdown]=useState(false)
    const[dropdownmob,setdropdownmob]=useState(false)
    const searchref=useRef(null)
    const searchrefmob=useRef(null)
    const dropdownref=useRef(null)
    const dropdownrefmob=useRef(null)
    const searchquery=useRef(null)
    const searchquerydesk=useRef(null)
   

    
    toggle?'':document.body.style.overflowX='hidden'
   

    function display_search(e){
      setsearchmob(true);
    }

    function togglemenu(){
      settoggle((prev)=>!prev)
      toggle?document.body.style.overflowY='visible':document.body.style.overflowY='hidden';
      setdropdown(false);
      setsearch(false);
    }

    function getcategory(e){
        props.setcategory(e.target.getAttribute("data-value"))
        dropdownref.current.classList.add('navlink')
        dropdownref.current.classList.add('relative')
    }

    useClickOutside(dropdownref,()=>{
      setdropdown(false);
    })
    useClickOutside(dropdownrefmob,()=>{
      setdropdownmob(false);
    })
    useClickOutside(searchref,()=>{
      setsearch(false);
    })
    useClickOutside(searchrefmob,()=>{
      setsearchmob(false);
    })


  return (
    <nav className="flex justify-between items-center overflow-hidden md:ml-[20px] md:mr-[20px]">
      <div>
        <Link to='/'><img src={logo}></img></Link>
      </div>
      {/* Mobile navigation */}
      <div className="md:hidden">
        <img src={toggle ? menuclose : menu} onClick={togglemenu} className="w-[30px] h-[25px] cursor-pointer relative z-20"></img>
        <div
          className={`${
            toggle ? "right-0 scale-x-105 duration-500 flex" : "-right-[300px] scale-x-0 duration-500 flex"
          } absolute z-10 top-0 h-[100vh] border`}
        >
          <ul className={`flex flex-col justify-start bg-offWhite w-[300px] ${dropdown?"pt-[80px]":"pt-[120px]"} md:pt-[220px] pl-[10px]`}>
            <Link
              className={`${dropdown?"mb-[10px]":"mb-[50px]"} relative navlink font-bold text-[15px] cursor-pointer hover:text-primary text-secondary`}
              to="/"
              onClick={() => {togglemenu()
              setsearch(false)}}  
            >
              Home
            </Link>
            <Link
              className={`${dropdown?"mb-[10px]":"mb-[50px]"} relative navlink font-bold text-[15px] cursor-pointer hover:text-primary text-secondary`}
              to="/trending"
              onClick={() => togglemenu()}              
            >
              Trending
            </Link>
            <div
              className={`${dropdown?"mb-[20px]":"mb-[50px]"} relative navlink font-bold text-[15px] cursor-pointer hover:text-primary text-secondary`}
              onClick={() => setdropdown(true)}
              ref={dropdownref}
            >
              Categories
              <ul
              className={`${
                dropdown ? "grid grid-cols-2 mt-2" : "hidden"
              } absolute z-10 ml-[15px] md:mt-5`}
            >
              {categories.map((x)=>{
                return <Link to='/categories' className='text-secondary hover:text-primary font-bold' key={x.id}>
                  <div className='hover:underline'
                  data-value={x.data}
                  onClick={(e)=>{
                    getcategory(e);
                    togglemenu()
                  }}>{x.name}</div>
                </Link>
              })}
            </ul>
            </div>
            <div
              onClick={display_search}
              ref={searchrefmob}
            >
              <p className={`text-secondary relative ${searchmob?"hidden":"flex"} navlink ${dropdown?"-bottom-[346px]":"mb-[50px]"} font-bold text-[15px] cursor-pointer hover:text-primary`}>Search</p>
              <div className={`${
                searchmob ? "flex" : "hidden"
              } justify-center items-center text-[15px] ${dropdown?"-bottom-[346px] xs:-bottom-[618px] relative":""}`}>
              <input
                type="text"
                placeholder="search anything here.."
                className="text-center mr-[15px] border-2 h-[45px] w-[190px] ss:w-[218px] md:m-[12px]"
                ref={searchquery}
              ></input>
              <Link
              to="/search"
            >
              <button
                className="bg-softRed text-white h-[40px] w-[60px] ss:w-[83px] cursor-pointer"
                onClick={() => {props.setquery(searchquery.current.value)
                togglemenu()}}
              >
                Search
              </button>
            </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
{/* Desktop navigation */}
      <div className="hidden md:flex">
        <ul className="flex flex-row list-none">
          <Link
            className="text-secondary relative navlink m-10 font-bold text-[18px] 2xl:text-[20px] cursor-pointer hover:text-primary"
            to="/"
          >
            Home
          </Link>
          <div
            ref={dropdownrefmob}
            className={`text-secondary m-10 ${dropdownmob?'':'navlink relative'} font-bold text-[18px] 2xl:text-[20px] cursor-pointer hover:text-primary`}
            onClick={() => setdropdownmob((prev)=>!prev)}
          >
            Categories
            <ul
              className={`${
                dropdownmob ? "grid grid-rows-5 grid-cols-3 2xl:gap-x-2" : "hidden"
              } absolute bg-softRed bg-blend-overlay rounded-lg text-white z-10 max-w-max mt-5 right-[139px] shadow-lg shadow-orange-700`}
            >
              {categories.map((x)=>{
                return <Link to='/categories' className='2xl:mb-4 bg-softRed 2xl:m-3' key={x.id}>
                  <div className='hover:underline'
                  data-value={x.data}
                  onClick={(e)=>getcategory(e)}
                  >{x.name}</div>
                </Link>
              })}
            </ul>
          </div>
          <Link
            className="text-secondary relative navlink m-10 font-bold text-[18px] 2xl:text-[20px] cursor-pointer hover:text-primary"
            to="/trending"
          >
            Trending
          </Link>
          <div
            ref={searchref}
            onClick={()=>setsearch(true)}
            className={`${search?'m-[10px]':'m-10'}`}
          >
            <p className={`text-secondary ${search?"hidden":"flex"} relative navlink  font-bold text-[18px] 2xl:text-[20px] cursor-pointer hover:text-primary`}>Search</p>
            <div
            className={`${
              search ? "flex" : "hidden"
            } justify-center items-center`}
          >
            <input
              type="text"
              placeholder="search anything here.."
              className="text-center md:border-2 md:h-[45px] md:w-[218px] md:m-[12px]"
              ref={searchquerydesk}
            ></input>
            <Link to="/search">
              <button
                className="bg-softRed text-white md:h-[40px] md:w-[83px] cursor-pointer"
                onClick={() => {
                  props.setquery(searchquerydesk.current.value);
                  setsearch((prev)=>!prev);
                  searchref.current.classList.remove("hidden");
                }}
              >
                Search
              </button>
            </Link>
          </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar