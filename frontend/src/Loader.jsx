export default function Loader(){
    return(
       <div className="w-full flex  text-2xl justify-center items-center py-10 relative gap-5">
          <h1 className="loadingTextAnimation text-white">Loading.... </h1>
           <div className="loadingAnimation h-10 w-10   flex justify-center items-center rounded-full relative border-amber-50  border-b-5 border-l-5 ">
              
           </div>
          
        </div>
    );
}