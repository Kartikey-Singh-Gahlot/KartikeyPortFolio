export default function Experience({experienceTitle,experienceDescription,experienceBoxStyle}){
  
  if((!experienceTitle) && (!experienceDescription) && experienceBoxStyle) return <h1>...loading</h1>
  return (
    <div className={experienceBoxStyle}>
        <h1 className="min-[780px]:text-[18px] text-[12px] font-bold">{experienceTitle}</h1>
    
         <ul className="my-3 min-[780px]:list-none list-disc">
             {experienceDescription.map((i)=>{ return <li>{i}</li>})}
         </ul>
    </div>
  );
}