
export default function Projects({projHdng, projDscrptn,videoSrc ,projectId, link}){
    return(
       <a href={link} id={projectId} className="border-amber-50 hover:bg-black hover:border-[1px] relative flex flex-col gap-10  shadow-black box-border  rounded-[10px] justify-center px-3 pt-3 pb-10 text-amber-50 ">
            <h1 className="text-center w-full text-2xl">{projHdng}</h1>
            
            <video autoPlay loop muted playsInline className=" w-full object-contain rounded-[10px] border-[1px] border-amber-50" src={videoSrc}/>
            
            <p className="w-full  md:text-[15px] text-[12px] text-justify">
                {projDscrptn} 
            </p>
       </a>
    
    );
}