import "./Output.css";
import "./Input.css";
import Button from '@mui/material/Button';
import Projects from "./Projects.jsx";
import Headings from "./Headings.jsx";
import List from "./List.jsx";
import Skills from "./Skills.jsx";
import {aboutMeDecription, project01Decription, mailLink, cvLink, myPicLink,  skillItems} from "./tools.js" ;

export default function App(){

  return(
    <div className="mainWrapper bg-gradient-to-r from-[#141E30] to-black">

          <header className="z-20 bg-gradient-to-r from-[#121d31] to-black sticky top-0 h-fit w-full flex justify-between items-center box-border py-5 px-10">

                 <h1 className="text-[10px] w-full text-amber-50 font-roboto sm:text-2xl ">Kartikey Singh Gahlot</h1>

                 <nav className="">

                       <div className="block min-[790px]:hidden ">
                            <hr className="bg-amber-50 w-5 border-0 h-[1px] my-1.5"/>
                            <hr className="bg-amber-50 w-5 border-0 h-[1px] my-1.5"/>
                            <hr className="bg-amber-50 w-5 border-0 h-[1px] my-1.5"/>
                       </div>

                       <ul className="min-[790px]:flex hidden justify-between">
                            <List mainLi="Home"  link="#pageOne" linkTarget="" />
                            <List mainLi="About" link="#pageTwo" linkTarget="" />
                            <List mainLi="Projects" subLi={["One","Two","Three", "Four"]} subLink={["#projectOne", "#projectTwo", "", ""]} link="#pageThree" linkTarget=""/>
                            <List mainLi="Contacts" link="#pageFour" linkTarget=""/>
                       </ul>

                 </nav>

          </header>

          

          <section className="h-screen flex flex-col justify-evenly gap-10" id="pageOne">

               <div className=" flex flex-col min-[430px]:flex-row  min-[430px]:justify-evenly items-center justify-center box-border min-[430px]:px-10  gap-10">

                 <div className="min-[430px]:h-full h-fit flex flex-col justify-center gap-2">
                      <h1 className=" min-[430px]:py-2 py-0 w-full text-amber-50 min-[790px]:text-4xl text-2xl">Hello, Kartikey This side </h1>
                      <h1 className=" min-[430px]:py-2 py-0 w-fit  text-amber-50 min-[790px]:text-4xl text-2xl overflow-hidden introText inline-block  box-border">I'm a</h1>
                 </div>

                 <div className="relative p-3.5 ">
                      
                      <div className="absolute left-[-5px] top-8  triangleBg bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300  h-full w-full p-3 flex items-center ">
                           <div className=" relative bottom-1 triangleBg bg-black h-full w-full" />
                      </div>

                     <img src={myPicLink} className=" relative z-10 min-[790px]:w-80 w-50 object-cover rounded-full" alt="" />
                 </div>

               </div>
                   
               <div className="w-full flex gap-5 justify-center">
                      <Button href={cvLink}   variant="outlined" size="large" sx={{'color':"white",'textTransform':'none',':hover':{ 'backgroundColor':'blue'}}} >My Resume</Button>
                      <Button href={mailLink} variant="outlined" size="large" sx={{'color':"white",'textTransform':'none',':hover':{ 'backgroundColor':'blue'}}} >Hire Me</Button>

               </div>

              
               <Skills skills={skillItems} />



          </section>

          <section className="grid min-[780px]:grid-cols-[1fr_2fr] min-[780px]:grid-row-auto grid-col-1 grid-row-[1fr_2fr] min-[780px]:gap-0 gap-10 box-border px-5 pt-10 pb-30" id="pageTwo">

            
               <div className="flex justify-center items-end">
                    <ul className= "flex min-[780px]:flex-col  w-full flex-row  justify-evenly min-[780px]:gap-0 gap-2">
                         <li className="box-border  h-full text-center  sm:text-3xl text-[12px]  px-3 py-2 min-[780px]:border-l-3 min-[780px]:border-b-0 border-b-3 border-l-0 border-amber-50 text-amber-50 w-full">Web Development</li>
                         <li className="text-amber-50 w-fit relative hidden min-[780px]:block -left-0.5">•</li>
                         <li className="box-border h-full text-center  sm:text-3xl text-[12px]  px-3 py-2 min-[780px]:border-l-3 min-[780px]:border-b-0 border-b-3 border-l-0 border-amber-50 text-amber-50 w-full">Web Hosting</li>
                    </ul>
               </div>

                <div className="">
                    
                    <Headings  pageHeading="About me"/>
                    <p className="text-amber-50 text-justify">
                         {aboutMeDecription}
                   </p>
                </div>
          </section>


          <section className="h-fit flex flex-col justify-between gap-8 px-2" id="pageThree">
               <Headings pageHeadingStyle="w-full" pageHeading="Projects"/>
               <div className="grid grid-cols-1 min-[780px]:grid-cols-3 min-[500px]:grid-cols-2  grid-rows-auto gap-10 p-5 relative">
                    <Projects projectId="projectOne"  link="https://gaming-arena-neon.vercel.app/" projHdng="Gaming Arena" projDscrptn={project01Decription} videoSrc="/gamingArenaVideo.mp4"/>
                    <Projects projectId="projectTwo"  link="https://to-do-app-woad-seven.vercel.app/" projHdng="ToDo App"     projDscrptn={project02Decription} videoSrc="/toDoAppVideo.mp4"/>
               </div>
                 
          </section>

          <section className="h-screen" id="pageFour" >

          </section>


    </div>
  )
}