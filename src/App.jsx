import "./Output.css";
import "./Input.css";
import Button from '@mui/material/Button';
import Projects from "./Projects.jsx";
import Headings from "./Headings.jsx";
import List from "./List.jsx";
import Skills from "./Skills.jsx";
import {aboutMeDecription, project01Decription, project02Decription,project03Decription, mailLink, cvLink, myPicLink,  skillItems, headerData, navData} from "./tools.js" ;
import { useState } from "react";

export default function App(){

let [status, setStatus] = useState(0);
let [headerStyle, setHeaderStyle] = useState(headerData[0]);
let [navStyle, setNavStyle] = useState(navData[0]);

function trgrMobNav(){

  if (window.innerWidth >= 790) return;

  if(status == 0){
     setStatus(1);
     setHeaderStyle(headerData[1]);
     setNavStyle(navData[1]);
  }
  else{
     setStatus(0);
     setHeaderStyle(headerData[0]);
     setNavStyle(navData[0]);
  }
}

  return(
    <div className="mainWrapper bg-gradient-to-r from-[#141E30] to-black">

          <header className={headerStyle}>

               <div className="flex justify-around w-full">
                 <h1 className="text-[15px] w-full text-amber-50 font-roboto sm:text-2xl ">Kartikey Singh Gahlot</h1>
                 <div className="block min-[790px]:hidden " onClick={trgrMobNav}>
                      <hr className="bg-amber-50 w-5 border-0 h-[1px] my-1.5"/>
                      <hr className="bg-amber-50 w-5 border-0 h-[1px] my-1.5"/>
                      <hr className="bg-amber-50 w-5 border-0 h-[1px] my-1.5"/>
                 </div>
                </div>

               <nav className="">

                       <ul className={navStyle}>
                            <List mainLi="Home"  link="#pageOne" linkTarget="" onClk={trgrMobNav}/>
                            <List mainLi="About" link="#pageTwo" linkTarget="" onClk={trgrMobNav}/>
                            <List mainLi="Projects" subLi={["One","Two"]} subLink={["#projectOne", "#projectTwo"]} link="#pageThree" linkTarget="" onClk={trgrMobNav}/>
                            <List mainLi="Contact" link="#pageFour" linkTarget="" onClk={trgrMobNav}/>
                       </ul>

                 </nav>

          </header>

          

          <section className="h-screen flex flex-col justify-evenly gap-10 pages" >

               <div className=" flex flex-col min-[430px]:flex-row  min-[430px]:justify-evenly items-center justify-center box-border min-[430px]:px-10  gap-10" headingId="pageOne">

                 <div className="min-[430px]:h-full h-fit flex flex-col justify-center gap-2">
                      <h1 className=" min-[430px]:py-2 py-0 w-full text-amber-50 min-[790px]:text-4xl text-2xl">Hello, Kartikey This side </h1>
                      <h1 className=" min-[430px]:py-2 py-0 w-fit  text-amber-50 min-[790px]:text-4xl text-2xl overflow-hidden introText inline-block  box-border">I'm a</h1>
                 </div>

                 <div className="relative p-3.5 ">
                      
                      <div className="absolute left-[-5px] top-8  triangleBg bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300  h-full w-full p-3 flex items-center ">
                           <div className=" relative bottom-1 triangleBg bg-black h-full w-full" />
                      </div>

                     <img src={myPicLink} className=" relative z-10 min-[790px]:w-80 w-50 object-cover rounded-full" alt="my Image" />
                 </div>

               </div>
                   
               <div className="w-full flex gap-5 justify-center">
                      <Button href={cvLink}   variant="outlined" size="large" sx={{'color':"white",'textTransform':'none',':hover':{ 'backgroundColor':'blue'}}} >My Resume</Button>
                      <Button href={mailLink} variant="outlined" size="large" sx={{'color':"white",'textTransform':'none',':hover':{ 'backgroundColor':'blue'}}} >Hire Me</Button>

               </div>

              
               <Skills skills={skillItems} />



          </section>

          <section className="pages grid min-[780px]:grid-cols-[1fr_2fr] min-[780px]:grid-row-auto grid-col-1 grid-row-[1fr_2fr] min-[780px]:gap-0 gap-10 box-border px-5 pt-10 pb-30" >

            
               <div className="flex justify-center items-end">
                    <ul className= "flex min-[780px]:flex-col  w-full flex-row  justify-evenly min-[780px]:gap-0 gap-2">
                         <li className="box-border  h-full text-center  sm:text-3xl text-[12px]  px-3 py-2 min-[780px]:border-l-3 min-[780px]:border-b-0 border-b-3 border-l-0 border-amber-50 text-amber-50 w-full">Web Development</li>
                         <li className="text-amber-50 w-fit relative hidden min-[780px]:block -left-0.5">•</li>
                         <li className="box-border h-full text-center  sm:text-3xl text-[12px]  px-3 py-2 min-[780px]:border-l-3 min-[780px]:border-b-0 border-b-3 border-l-0 border-amber-50 text-amber-50 w-full">Web Hosting</li>
                    </ul>
               </div>

                <div className="">
                    
                    <Headings  pageHeading="About me" headingId="pageTwo"/>
                    <p className="text-amber-50 text-justify">
                         {aboutMeDecription}
                   </p>
                </div>
          </section>


          <section className="pages h-fit flex flex-col justify-between gap-10 pt-10 pb-30 ">
               <Headings pageHeadingStyle="w-full" pageHeading="Projects" headingId="pageThree"/>
               <div className="grid grid-cols-1  min-[780px]:grid-cols-3 min-[500px]:grid-cols-2  grid-rows-auto gap-2 p-5 relative">
                    <Projects projectId="projectOne"    link="https://gaming-arena-neon.vercel.app/"            projHdng="Gaming Arena"              projDscrptn={project01Decription} videoSrc="/gamingArenaVideo.mp4"/>
                    <Projects projectId="projectTwo"    link="https://to-do-app-woad-seven.vercel.app/"         projHdng="ToDo App"                  projDscrptn={project02Decription} videoSrc="/toDoAppVideo.mp4"/>
                    <Projects projectId="projectThree"  link="https://kartikey-singh-gahlot.github.io/ChatBot/" projHdng="Patient Query Webpage"     projDscrptn={project03Decription} videoSrc="/chatBotAppVideo.mp4"/>
               </div>
                 
          </section>
         
          <section className="pages h-fit flex flex-col items-center">

               <Headings pageHeadingStyle="" pageHeading="Contact" headingId="pageFour"/>
              
                       <p className="text-amber-50 text-justify py-10 px-10">
                         I'm always excited to collaborate on new and exciting projects — whether it's frontend development, full-stack applications, or just tech talk! <br></br> If you’re looking for a passionate web developer who loves writing clean code and creating smooth user experiences, feel free to reach out. <br></br> Let's build something amazing together!
                       </p>

                    <footer className="flex w-full h-fit items-center bg-gradient-to-r from-gray-800 to-gray-950 py-10">
                         <ul className=" flex w-full text-amber-50 justify-around  items-center min-[780px]:flex-row flex-col ">
                            <li className="my-2 text-justify">Mail :<a href="mailto:2002gehlotkartikeysingh@gmail.com" className="underline hover:text-blue-400">2002gehlotkartikeysingh@gmail.com</a></li>
                            <li className="my-2 text-justify">Location : <a>Jaipur, Rajasthan, India</a></li>
                            <li className="my-2 text-justify">CV : <a href={cvLink} className="underline hover:text-blue-400" target="_blank">View Here</a></li>
                            <li className="my-2 text-justify">GitHub : <a href="https://github.com/kartikey-singh-gahlot" target="_blank" className="underline hover:text-blue-400">kartikey-singh-gahlot</a></li>       
                        </ul>
                    </footer>               
          </section>

    </div>
  )
}