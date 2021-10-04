import { useState, useEffect } from "react";
import {useRouter}  from "next/router" ;
import Head from 'next/head' ;
import { FaLinkedin, FaGithub } from 'react-icons/fa'
const HomePage = (props) =>{

    const [dropDown , setDropDown] = useState(false) ; 
    const [text , setText] = useState("Americas") ;
    const [sidebar , setSidebar] = useState(false)
    const [data, setData]= useState({
        name: '',
        email:'',
        location: text,
        message: ''
    })
    const [submit, setSubmit]=useState(false)
const handleChange = e =>{
    e.preventDefault();
    const {name, value}= e.target;
    setData({
        ...data,
        [name]: value,
    })
}


    const handleSubmit = e =>{
        e.preventDefault();
        
        fetch('/api/contact',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            console.log('......======> Response received')
            if (res.status===200){
                console.log('....===========> Response succesful!')
                setSubmit(true)
                setData({
                    name: '',
                    email:'',
                    location: text,
                    message: ''
                })
            }
        })
    }
    const router = useRouter() ;

const dropdownHandler = () => {
    setDropDown(!dropDown) ;
};


    return (
        <div>
            {console.log(data)}
            <Head>
                <title>Santiago Laight</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Desktop NAV BAR start */}
            <section className="mx-auto container px-6 lg:px-14 xl:px-0">
                <div className="hidden md:flex justify-between items-center pt-16 mb-12">
                    <div className="flex flex-row items-center space-x-10">
                        <div>
                            <a onClick={() => router.push("landingPage")} className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                                <p>Intro</p>
                            </a>
                        </div>
                        <div>
                            <a onClick={() => router.push("/")} className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                                <p>Work</p>
                            </a>
                        </div>
                        <div>
                            <a href="#contact" className="cursor-pointer text-base hover:text-gray-300 focus:outline-none focus:text-gray-300 font-semibold leading-none text-white">
                                <p>Contact</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-6">
                        <div className="flex justify-center items-center rounded-lg">
                            <a href="https://github.com/snlaight"><FaGithub size={32} color="#d1d5db" className="" /></a>
                        
                        </div>
                        <div className="flex justify-center items-center rounded-lg">
                        <a href="https://www.linkedin.com/in/santiago-laight/"><FaLinkedin size={32} color="d1d5db" className="" href="https://www.linkedin.com/in/santiago-laight/" /></a>
                        </div>
                    </div>
                </div>
            </section>
{/* MOBILE NAV BAR START*/}
            <div className="relative md:hidden mx-auto container w-full px-6 pb-20 pt-6  ">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        <button className="text-white" id="menu" aria-label="open menu" onClick={() => setSidebar(true)}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 6H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 14H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 18H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center items-center space-x-6">
                        <div className="flex justify-center items-center rounded-lg">
                        <a href="https://github.com/snlaight"><FaGithub size={32} color="#d1d5db" className="" /></a>
                        </div>
                        <div className="flex justify-center items-center rounded-lg">
                      <a href="https://www.linkedin.com/in/santiago-laight/">  <FaLinkedin size={32} color="d1d5db" className="" /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={!sidebar ? "bg-white fixed top-0 w-full h-full transform -translate-x-full z-40 transition duration-700 md:hidden" : "bg-white fixed top-0 w-full h-full transform translate-x-0 z-40 transition duration-700 md:hidden"} id="mobile-nav">
                <div className=" opacity-50 w-full h-full" onClick={() => setSidebar(false)}></div>
                <div className="bg-gray-900 w-full  h-full shadow-lg  z-40 fixed overflow-y-auto  top-0 flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
                    <div className="px-6 h-full">
                        <div className="flex flex-col  justify-between h-full w-full">
                            <div>
                                <div className="border-b border-gray-300  flex justify-between items-center">
                                    <div className="w-10">
                                        <svg viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 31.5L0 31.5L2 31.5ZM13.0625 31.5L11.0625 31.5L13.0625 31.5ZM31.5 49.9375L31.5 51.9375L31.5 49.9375ZM49.9375 31.5L51.9375 31.5L49.9375 31.5ZM31.5 0C23.1457 0 15.1335 3.31874 9.22614 9.22614L12.0546 12.0546C17.2118 6.89731 24.2065 4 31.5 4V0ZM9.22614 9.22614C3.31874 15.1335 0 23.1457 0 31.5L4 31.5C4 24.2065 6.89731 17.2118 12.0546 12.0546L9.22614 9.22614ZM0 31.5C0 39.8543 3.31874 47.8665 9.22614 53.7739L12.0546 50.9454C6.89731 45.7882 4 38.7935 4 31.5L0 31.5ZM9.22614 53.7739C15.1335 59.6813 23.1457 63 31.5 63V59C24.2065 59 17.2118 56.1027 12.0546 50.9454L9.22614 53.7739ZM31.5 63C39.8543 63 47.8665 59.6813 53.7739 53.7739L50.9454 50.9454C45.7882 56.1027 38.7935 59 31.5 59V63ZM53.7739 53.7739C59.6813 47.8665 63 39.8543 63 31.5H59C59 38.7935 56.1027 45.7882 50.9454 50.9454L53.7739 53.7739ZM63 31.5C63 23.1457 59.6813 15.1335 53.7739 9.22614L50.9454 12.0546C56.1027 17.2118 59 24.2065 59 31.5H63ZM53.7739 9.22614C47.8665 3.31874 39.8543 0 31.5 0V4C38.7935 4 45.7882 6.89731 50.9454 12.0546L53.7739 9.22614ZM31.5 11.0625C26.0796 11.0625 20.8813 13.2157 17.0485 17.0485L19.8769 19.8769C22.9596 16.7943 27.1405 15.0625 31.5 15.0625L31.5 11.0625ZM17.0485 17.0485C13.2157 20.8813 11.0625 26.0796 11.0625 31.5L15.0625 31.5C15.0625 27.1405 16.7943 22.9596 19.8769 19.8769L17.0485 17.0485ZM11.0625 31.5C11.0625 36.9204 13.2157 42.1187 17.0485 45.9515L19.8769 43.1231C16.7943 40.0404 15.0625 35.8595 15.0625 31.5L11.0625 31.5ZM17.0485 45.9515C20.8813 49.7843 26.0796 51.9375 31.5 51.9375L31.5 47.9375C27.1405 47.9375 22.9596 46.2057 19.8769 43.1231L17.0485 45.9515ZM31.5 51.9375C36.9204 51.9375 42.1187 49.7843 45.9515 45.9515L43.1231 43.1231C40.0404 46.2057 35.8595 47.9375 31.5 47.9375L31.5 51.9375ZM45.9515 45.9515C49.7843 42.1187 51.9375 36.9204 51.9375 31.5L47.9375 31.5C47.9375 35.8595 46.2057 40.0404 43.1231 43.1231L45.9515 45.9515ZM51.9375 31.5C51.9375 26.0796 49.7843 20.8813 45.9515 17.0485L43.1231 19.8769C46.2057 22.9596 47.9375 27.1405 47.9375 31.5L51.9375 31.5ZM45.9515 17.0485C42.1187 13.2157 36.9204 11.0625 31.5 11.0625L31.5 15.0625C35.8595 15.0625 40.0404 16.7943 43.1231 19.8769L45.9515 17.0485ZM19.1881 15.1883C12.691 20.3859 8.9769 26.6947 8.30509 34.0846C7.63993 41.4012 9.98264 49.5007 15.0135 58.3048L18.4865 56.3202C13.684 47.9159 11.7246 40.6508 12.2887 34.4467C12.846 28.3157 15.8923 22.9474 21.6869 18.3117L19.1881 15.1883ZM43.8119 47.8117C50.3006 42.6208 54.0216 36.3813 54.6947 29.0496C55.3609 21.7936 53.0141 13.7583 47.9865 4.95989L44.5135 6.94444C49.3192 15.3544 51.2745 22.5513 50.7115 28.6839C50.1554 34.7407 47.1161 40.0459 41.3131 44.6883L43.8119 47.8117Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-6 flex w-full items-end justify-end">
                                        <div className=" pb-8 flex items-center justify-end w-full">
                                            <button id="cross" aria-label="close menu" className="focus:outline-none focus:ring-2 rounded-md text-white" onClick={() => setSidebar(false)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ul className="">
                                    <li>
                                        <a className="cursor-pointer">
                                            <div className="text-gray-800 pt-10">
                                                <div className="flex items-center  hover:text-gray-300 text-base text-white">
                                                    <a onClick={() => router.push("/landingPage")} className="focus:outline-none cursor-pointer">
                                                        Intro
                                                    </a>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a className="cursor-pointer">
                                            <div className="text-gray-800 pt-8">
                                                <div className="flex items-center  hover:text-gray-300 text-base text-white">
                                                    <a onClick={() => router.push("/work")} className="focus:outline-none cursor-pointer ">
                                                        Work
                                                    </a>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-gray-800 pt-8 cursor-pointer">
                                        <div className="flex items-center ">
                                            <div className="flex items-center  hover:text-gray-300 text-base text-white">
                                                <div className="w-6 h-6 md:w-8 md:h-8 ">
                                                    <a href="#contact" className="focus:outline-none cursor-pointer ">
                                                        Contact
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* SELF INTRO START */}
            <section>
                <div className="mx-auto container px-6 lg:px-14 xl:px-0">
                    <div className="flex justify-between items-center flex-col xl:flex-row xl:space-x-12 space-y-16 xl:space-y-0">
                        <div className="flex justify-start items-start flex-col ">
                            <div>
                                <h1 className="md:text-7xl text-4xl font-black leading-tight  text-white xl:w-4/5">Hello, I am Santiago Laight.</h1>
                            </div>
                            <div className="md::mt-8 mt-4">
                                <p className="text-2xl leading-6 font-medium  text-white">Full-Stack Developer.</p>
                            </div>
                            <div className="md:mt-4 mt-2">
                                <p className="text-base leading-normal text-gray-400 xl:w-96">I am a Full-Stack Developer located in Warsaw, Poland. </p>
                            </div>
                            <div className="mt-12 border-b border-transparent hover:border-white pb-1">
                                <a href="" className="tracking-wide focus:outline-none focus:text-gray-300 text-base font-bold leading-none  text-white">
                                    <p>Lets get in touch</p>
                                </a>
                            </div>
                        </div>
                        {/* PROJECTS START */}
                        <div className="flex justify-start items-start flex-col xl:w-8/12	">
                            <div>
                                <p className="text-lg font-bold leading-none text-white">PROJECTS</p>
                            </div>
                            <div className="px-8 py-10 mt-4 bg-gray-800 flex  justify-start items-start flex-col rounded">
                                <div className="">
                                    <p className="text-xs font-medium leading-3 text-white">Full-Stack Application</p>
                                </div>
                                <div className="md:mt-2">
                                    <p className="text-2xl md:text-3xl font-semibold lg:leading-7  text-white">FIDOPT</p>
                                </div>
                                <div className="mt-2 md:mt-4 ">
                             <a href="https://fidopt.santilaight.io" target="blank"> <p className="text-xs mb-1 font-medium leading-3 text-white hover:underline" >See the app here.</p></a>
                                    <p className="text-base leading-normal text-gray-300 ">Fidopt is a full-stack application that uses NextJS as a front-end client (tailwindCSS for styling), and MongoDB as the database, with Express.JS as the framework. Initial app framework is deployed on Vercel servers already.</p>
                                    <a href="https://github.com/snlaight/fidopt" target="blank"> <p className="text-xs my-1 font-medium leading-3 text-white hover:underline" >See the code repository here.</p></a>
                                </div>
                                
                            </div>
                            <div className="px-8 py-10 mt-4 bg-gray-800 flex  justify-start items-start flex-col rounded">
                                <div className="">
                                    <p className="text-xs font-medium leading-3 text-white">VanillaJS Application</p>
                                </div>
                                <div className="md:mt-2">
                                    <p className="text-2xl md:text-3xl font-semibold lg:leading-7  text-white">FOOTABLE</p>
                                </div>
                                <div className="mt-2 md:mt-4 ">
                             <a href="https://footable.santilaight.io" target="blank"> <p className="text-xs mb-1 font-medium leading-3 text-white hover:underline" >See the app here.</p></a>
                                    <p className="text-base leading-normal text-gray-300 ">Footable is a pure vanillaJS application, which uses a REST API to provide the match results for the 2020/2021 football season of LaLiga. From these match results, the standings table is created, as well as the statistics page, all using vanillaJS. 
                                    Styling is done with BootstrapCSS, with JavaScript functions to change the last 5 results string characters to icons (as can bee seen on the Standings page.) </p>
                                    <a href="https://github.com/snlaight/filtrando-equipos" target="blank"> <p className="text-xs my-1 font-medium leading-3 text-white hover:underline" >See the code repository here.</p></a>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>



            {/* <section className="mx-auto container mt-36 px-6 lg:px-14 xl:px-0 ">
                <div className="flex flex-col  justify-center items-center">
                    <div className="w-full items-center grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-x-6 gap-x-4 md:gap-x-6 mt-16 xl:mt-0 gap-y-4 md:gap-y-0">
                        <div className="w-full xl:w-72 flex flex-col justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                            <div className="w-full">
                                <div className="w-full">
                                    <img className="w-full" src={"https://cdn.tuk.dev/assets/templates/portfolio/rectangle.png"} alt="spider-web" />
                                </div>
                                <div className="md:mt-6 mt-4">
                                    <p className="text-xs font-medium leading-3 text-white">JAVASCRIPT</p>
                                </div>
                                <div className="md:mt-4 mt-2">
                                    <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">Building an Interactive Showcase with Vue.js & Vue Instant Search </p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a onClick={() => router.push("/projectInner")}  className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
                                    <p className="">Go to project</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-full xl:w-72 flex flex-col justify-between items-start h-full p-3 md:p-6 bg-gray-800 rounded">
                            <div className="w-full">
                                <div className="w-full">
                                    <img className="w-full" src={"https://cdn.tuk.dev/assets/templates/portfolio/book.png"} alt="book" />
                                </div>
                                <div className="md:mt-6 mt-4">
                                    <p className="text-xs font-medium leading-3 text-white">JAVASCRIPT</p>
                                </div>
                                <div className="md:mt-4 mt-2">
                                    <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">In Defense of Utility-First CSS</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a onClick={() => router.push("/projectInner")}  className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
                                    <p className="">Go to project</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-full xl:w-72 flex flex-col h-full justify-between items-start p-3 md:p-6 bg-gray-800 rounded">
                            <div className="w-full">
                                <div className="w-full">
                                    <img className="w-full" src={"https://cdn.tuk.dev/assets/templates/portfolio/coding.png"} alt="book" />
                                </div>
                                <div className="md:mt-6 mt-4">
                                    <p className="text-xs font-medium leading-3 text-white">JAVASCRIPT</p>
                                </div>
                                <div className="md:mt-4 mt-2">
                                    <p className="xl:w-60 text-base md:text-2xl font-semibold text-white">Why Javascript Numbers Are Weird (And How to Fix It)</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a onClick={() => router.push("/projectInner")}  className="cursor-pointer focus:outline-none focus:underline text-xs leading-3 hover:underline focus:underline text-gray-300">
                                    <p className="">Go to project</p>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section> */}

            <section id="contact" className="mt-36">
                <div className="mx-auto container px-6 lg:px-14 xl:px-0">
                    <div className="flex xl:flex-row flex-col justify-between item-start">
                        {/* <div className="flex justify-center item-start flex-col">
                            <div>
                                <p className="md:text-6xl text-4xl font-extrabold text-white">By the numbers</p>
                            </div>
                            <div className="grid grid-cols-2 md:mt-12 mt-6 gap-y-8">
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-xl md:text-3xl font-bold  text-white">1000+</p>
                                    <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">Projects</p>
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-xl md:text-3xl font-bold  text-white">88%</p>
                                    <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">Retention</p>
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-xl md:text-3xl font-bold  text-white">90%</p>
                                    <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">Client retention</p>
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-xl md:text-3xl font-bold  text-white">90,000+</p>
                                    <p className=" md:mt-4 text-lg md:text-2xl font-light leading-normal text-gray-300">Users impacted</p>
                                </div>
                            </div>
                        </div> */}

                        <form onSubmit={handleSubmit} className="mt-16 mb-10 sm:w-9/12  xl:mt-0 lg:w-4/5 xl:w-2/5 flex-col bg-gray-800 md:p-10 p-4 flex justify-center items-start space-y-9">
                        
                        <div>
                                <p className="md:text-6xl text-4xl font-extrabold text-white">Let's get in touch!</p>
                            </div>
                            <div className="flex justify-center items-center w-full flex-col md:space-y-6 space-y-4">
                                
                                <div className="w-full flex justify-start items-center">
                                    
                                    <input name="name" onChange={handleChange} className="focus:ring-2  focus:ring-gray-300 focus:outline-none bg-gray-700  rounded w-full py-3 pl-2 text-base leading-none placeholder:text-gray-300 text-gray-300" type="text" placeholder="Your name" />
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <input name="email" onChange={handleChange}  className="focus:ring-2  focus:ring-gray-300 focus:outline-none bg-gray-700  rounded w-full py-3 pl-2 text-base leading-none placeholder:text-gray-300 text-gray-300" type="email" placeholder="Email address" />
                                </div>

                                <div className="w-full relative">
                                    <button onClick={dropdownHandler} className="focus:ring-2  focus:ring-gray-300 focus:outline-none w-full flex justify-between items-center bg-gray-700  rounded " data-menu>
                                        <p className="pl-2  py-3 text-gray-300 text-base ">{text}</p>
                                        <div className="cursor-pointer text-white mr-3">
                                            {dropDown ? (
                                                <svg id="svg2" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                            ) : (
                                                <svg id="svg1" xmlns="http://www.w3.org/2000/svg" className=" icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                    {dropDown && (
                                        <ul onClick={() => setDropDown(false)} className="transition duration-300  ease-out bg-gray-700 dark:bg-gray-800 shadow rounded mt-2 py-1 w-full absolute">
                                            <li  onClick={() => setText("Asia/Pacific")}>
                                                {" "}
                                                <a tabindex="0" className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white hover:bg-indigo-700 hover:text-gray-400 ">
                                                    <div className=" px-3 py-3 text-base leading-3 tracking-normal   font-normal">Asia/Pacific</div>
                                                </a>
                                            </li>
                                            <li onClick={() => setText("Americas")}>
                                                {" "}
                                                <a tabindex="0" className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white  hover:bg-indigo-700 hover:text-gray-400 ">
                                                    <div className="px-3 py-3 text-base leading-3 tracking-normal  font-normal">Americas</div>
                                                </a>
                                            </li>
                                            <li onClick={() => setText("Europe")}>
                                                {" "}
                                                <a tabindex="0" className=" focus:outline-none focus:text-gray-400  cursor-pointer text-white dark:text-gray-400 dark:hover:text-white hover:bg-indigo-700 hover:text-gray-400">
                                                    <div className=" text-base leading-3 tracking-normal py-3  px-3 font-normal">Europe</div>
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <textarea name="message" onChange={handleChange} id="message" className="focus:ring-2 focus:ring-gray-300 focus:outline-none bg-gray-700 resize-none  rounded w-full py-3 px-2 text-base leading-none placeholder:text-gray-300 text-gray-300" placeholder="Project Description" cols="30" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="w-full border rounded-sm border-white ">
                                <button type="submit" className="focus:ring-2  focus:ring-gray-300 w-full focus:outline-none focus:text-gray-300  hover:text-gray-300 hover:bg-gray-900 text-base font-medium py-3 leading-none text-white">
                                    <p>Let’s get started on your project</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default HomePage;
