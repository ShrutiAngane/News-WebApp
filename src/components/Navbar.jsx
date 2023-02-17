import React, { useRef, useState } from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import menuclose from '../assets/icon-menu-close.svg'
import { Link } from "react-router-dom"
import '../index.css'



const Navbar = (props) => {
    const[toggle,settoggle]=useState(false)
    const[search,setsearch]=useState(false)
    const[dropdown,setdropdown]=useState(false)
    const[categoryclick,setclick]=useState(false)
    const searchref=useRef(null)
    const dropdownref=useRef(null)
    const homelink=useRef(null)
    const trendinglink=useRef(null)

    function display_search(e){
      e.target.classList.add('hidden');
      setsearch(true);
    }

    function togglemenu(){
      settoggle((prev)=>!prev)
      toggle?document.body.style.overflow='visible':document.body.style.overflowY='hidden';
      setdropdown(false);
      setsearch(false);
    }

    function getcategory(e){
        props.setcategory(e.target.getAttribute("data-value"))
        dropdownref.current.classList.add('navlink')
        dropdownref.current.classList.add('relative')
    }


  return (
    <nav className="flex justify-between items-center overflow-hidden">
      <div>
        <img src={logo}></img>
      </div>
      <div className="md:hidden">
        <img
          src={toggle ? menuclose : menu}
          onClick={togglemenu}
          className="w-[30px] h-[25px] cursor-pointer relative z-20"
        ></img>
        <div
          className={`${
            toggle ? "right-0 scale-x-105 duration-500 flex" : "-right-[300px] scale-x-0 duration-500"
          } absolute z-10 top-0 bottom-[-6px] border`}
        >
          <ul className={`flex flex-col justify-start bg-offWhite w-[300px] ${dropdown?"pt-[80px] xs:pt-[20px]":"pt-[120px]"} md:pt-[220px] pl-[10px]`}>
            <Link
              className={`${dropdown?"mb-[10px]":"mb-[50px]"} relative navlink font-bold text-[15px] cursor-pointer hover:text-primary text-secondary`}
              to="/"
              onClick={() => {settogle((prev) => !prev)
              setsearch(false)}}
              ref={homelink}
            >
              Home
            </Link>
            <Link
              className={`${dropdown?"mb-[10px]":"mb-[50px]"} relative navlink font-bold text-[15px] cursor-pointer hover:text-primary text-secondary`}
              to="/trending"
              onClick={() => settogle((prev) => !prev)}
              ref={trendinglink}
            >
              Trending
            </Link>
            <div
              className={`${dropdown?"mb-[20px]":"mb-[50px]"} relative navlink font-bold text-[15px] cursor-pointer hover:text-primary text-secondary`}
              ref={dropdownref}
              onClick={(e) => {
                if (e.target.classList.contains("navlink")) {
                  e.target.classList.remove("navlink");
                  e.target.classList.remove("relative");
                  e.target.classList.add("margindrop");
                  homelink.current.classList.add("margindrop")
                  trendinglink.current.classList.add("margindrop")
                  setdropdown((prev) => !prev);
                } else {
                  e.target.classList.add("navlink");
                  e.target.classList.add("relative");
                  e.target.classList.remove("margindrop");
                  homelink.current.classList.remove("margindrop")
                  trendinglink.current.classList.remove("margindrop")
                  setdropdown((prev) => !prev);
                }
              }}
            >
              Categories
              <ul
              className={`${
                dropdown ? "grid grid-cols-2 xs:flex xs:flex-col mt-2" : "hidden"
              } absolute z-10 ml-[15px] md:mt-5`}
            >
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="sport"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev) 
                  }}
                >
                  Sports
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="tech"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Technology
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="world"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  World
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="finance"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Finance
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="politics"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }
                }
                >
                  Politics
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="business"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Business
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="economics"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }
                }
                >
                  Economics
                </div>
              </Link>
              <Link to="/categories" className=" text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="entertainment"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Entertainment
                </div>
              </Link>
              <Link to="/categories" className=" text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="beauty"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Beauty
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="travel"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Travel
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="music"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Music
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="food"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Food
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="science"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Science
                </div>
              </Link>
              <Link to="/categories" className="text-secondary  hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="gaming"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Gaming
                </div>
              </Link>
              <Link to="/categories" className="text-secondary hover:text-primary font-bold">
                <div
                  className="hover:underline"
                  data-value="energy"
                  onClick={(e) => {getcategory(e)
                    settoggle((prev) => !prev)
                  }}
                >
                  Energy
                </div>
              </Link>
            </ul>
            </div>
            <div
              ref={searchref}
              className={`text-secondary relative ${search?"hidden":"flex"} navlink ${dropdown?"-bottom-[346px] xs:-bottom-[618px]":"mb-[50px]"} font-bold text-[15px] cursor-pointer hover:text-primary`}
              onClick={display_search}
            >
              Search
            </div>
            <Link
              className={`${
                search ? "flex" : "hidden"
              } justify-center items-center text-[15px] ${dropdown?"-bottom-[346px] xs:-bottom-[618px] relative":""}`}
              to="/search"
            >
              <input
                type="text"
                placeholder="search anything here.."
                className="text-center mr-[15px] border-2 h-[45px] w-[218px] md:m-[12px]"
                value={props.userinput}
                onChange={(e) => setquery(e.target.value)}
              ></input>
              <button
                className="bg-softRed text-white h-[40px] w-[83px] cursor-pointer"
                onClick={() => console.log("jed")}
              >
                Search
              </button>
            </Link>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="flex flex-row list-none">
          <Link
            className="text-secondary relative navlink m-10 font-bold text-[18px] xl:text-[20px] cursor-pointer hover:text-primary"
            to="/"
            onClick={()=>setsearch(false)}
          >
            Home
          </Link>
          <div
            ref={dropdownref}
            className="text-secondary m-10 navlink relative font-bold text-[18px] xl:text-[20px] cursor-pointer hover:text-primary"
            onClick={(e) => {
              if (e.target.classList.contains("navlink")) {
                e.target.classList.remove("navlink");
                e.target.classList.remove("relative");
                setdropdown((prev) => !prev);
              } else {
                e.target.classList.add("navlink");
                e.target.classList.add("relative");
                setdropdown((prev) => !prev);
              }
            }}
          >
            Categories
            <ul
              className={`${
                dropdown ? "grid grid-rows-5 grid-cols-3 xl:gap-x-2" : "hidden"
              } absolute bg-softRed bg-blend-overlay rounded-lg text-white z-10 max-w-max mt-5 right-[10px] shadow-lg shadow-orange-700`}
            >
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="sport"
                  onClick={(e) => getcategory(e)}
                >
                  Sports
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="tech"
                  onClick={(e) => getcategory(e)}
                >
                  Technology
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="world"
                  onClick={(e) => getcategory(e)}
                >
                  World
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="finance"
                  onClick={(e) => getcategory(e)}
                >
                  Finance
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="politics"
                  onClick={(e) => getcategory(e)}
                >
                  Politics
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="business"
                  onClick={(e) => getcategory(e)}
                >
                  Business
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="economics"
                  onClick={(e) => getcategory(e)}
                >
                  Economics
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="entertainment"
                  onClick={(e) => getcategory(e)}
                >
                  Entertainment
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="beauty"
                  onClick={(e) => getcategory(e)}
                >
                  Beauty
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="travel"
                  onClick={(e) => getcategory(e)}
                >
                  Travel
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="music"
                  onClick={(e) => getcategory(e)}
                >
                  Music
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="food"
                  onClick={(e) => getcategory(e)}
                >
                  Food
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="science"
                  onClick={(e) => getcategory(e)}
                >
                  Science
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="gaming"
                  onClick={(e) => getcategory(e)}
                >
                  Gaming
                </div>
              </Link>
              <Link to="/categories" className=" xl:mb-4 bg-softRed xl:m-3">
                <div
                  className="hover:underline"
                  data-value="energy"
                  onClick={(e) => getcategory(e)}
                >
                  Energy
                </div>
              </Link>
            </ul>
          </div>
          <Link
            className="text-secondary relative navlink m-10 font-bold text-[18px] xl:text-[20px] cursor-pointer hover:text-primary"
            to="/trending"
          >
            Trending
          </Link>
          <div
            ref={searchref}
            className={`text-secondary ${search?"hidden":"flex"} relative navlink m-10 font-bold text-[18px] xl:text-[20px] cursor-pointer hover:text-primary`}
            onClick={display_search}
          >
            Search
          </div>
          <div
            className={`${
              search ? "flex" : "hidden"
            } justify-center items-center`}
          >
            <input
              type="text"
              placeholder="search anything here.."
              className="text-center md:border-2 md:h-[45px] md:w-[218px] md:m-[12px]"
              value={props.userinput}
              onChange={(e) => props.setquery(e.target.value)}
            ></input>
            <Link to="/search">
              <button
                className="bg-softRed text-white md:h-[40px] md:w-[83px] cursor-pointer"
                onClick={() => {
                  props.setquery(props.userinput);
                  setsearch((prev)=>!prev);
                  searchref.current.classList.remove("hidden");
                }}
              >
                Search
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
