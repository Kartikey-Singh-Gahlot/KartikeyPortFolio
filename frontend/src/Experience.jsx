export default function Experience({data}){

  const processed = data.map((i)=>{
     return (
     <div>
          <li>{i.title}</li>
          <p>
             {i.description}
          </p>
     </div>
     )
  })
  
  return (
    <div>
         <ul>
             {processed}
         </ul>
    </div>
  );
}