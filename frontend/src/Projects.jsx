
export default function Projects({data}){


 
    const processed = data.map((i)=>{
        return (
            <a href={i.link} className="hover:bg-black hover:border-amber-50 relative flex flex-col gap-10  shadow-black box-border border-[1px] border-[#00000000] rounded-[10px] justify-center px-3 pt-3 pb-10 text-amber-50">
                <h1 className="text-center  w-full text-2xl">{i.title}</h1>
                
                <video autoPlay loop muted playsInline className=" w- object-contain rounded-[10px] border-[1px] border-amber-50" src={i.src}/>
                
                <p className="w-full  md:text-[15px] text-[12px] text-justify">
                    {i.description} 
                </p>

                <ul className="flex flex-wrap w-full gap-3">
                    {i.techUsed.map((tech, idx) => ( <li className="border-[1px] border-amber-50 px-3 md:text-[15px] text-[12px]"  key={idx}>{tech}</li>))}
               </ul>
            </a> 
        );
    })

    return(
        <div className="grid grid-cols-1  min-[780px]:grid-cols-3 min-[500px]:grid-cols-2  grid-rows-auto gap-2 p-5 relative">
             {processed}
        </div>   
    );
}