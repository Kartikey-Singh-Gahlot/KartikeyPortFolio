export default function Experience({data}){

  const processed = data.map((i, idx)=>{
     const style =  (idx % 2 == 0) ? `col-start-1 row-start-${idx+1}` : `col-start-2 row-start-${idx+1}`;
     return (
     <div className={style}>
          <h1 className="w-full min-[780px]:text-[18px] text-[12px] font-bold">{i.title}</h1>
          <ul className="my-3 min-[780px]:list-none  list-disc">
             {i.description.map((i)=>{ return <li>{i}</li>})}
          </ul>
     </div>
     )
  })
  
  return (
    <div className=" text-amber-50 mt-10 md:grid flex flex-col grid-cols-2 grid-rows-[auto] mb-10 px-3" >
             {processed}
    </div>
  );
}