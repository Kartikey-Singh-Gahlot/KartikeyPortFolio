import "./Output.css";

export default function List({mainLi, subLi, link, linkTarget, subLink}){

 if(subLi){
    let subItems = subLi.map((i,idx)=>{return <a href={subLink[idx]}><li className="hover:bg-blue-700  hover:border-black text-[15px] text-amber-50 w-full py-1 px-6 text-center border-[1px] rounded-3xl border-amber-50 bg-black my-2">{i}</li> </a>});
    return (
    <ul>
        <a className="relative mainBox" href={link} target={linkTarget} >
         <li className="hover:bg-blue-700  text-[15px] border-[1px] border-black text-amber-50 px-6 py-2 w-full rounded-3xl">{mainLi}</li>
         <ul className="absolute subBox w-fit left-2">
            {subItems}
         </ul>
        </a>
    </ul>
      
    );
 }
 else{

    return(
        <a href={link} target={linkTarget}>
          <li className="hover:bg-blue-700 text-[15px] text-amber-50 px-6 py-2 w-full rounded-3xl">{mainLi}</li>
        </a>  
    );
 }
}