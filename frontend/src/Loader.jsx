export default function Loader(){
    return(
       <div className="w-full flex  text-2xl justify-center items-center py-10 relative gap-5">
          <h1 className="loadingTextAnimation text-white">Loading.... </h1>
           <div className="h-20 w-20   flex justify-center items-center rounded-full relative border-5 border-b-white animate-spin box-border">
                <div className="h-15 w-15 rounded-full border-5  border-b-[#ffffff8d] border-dotted border-l-white  box-border">
                    
                </div>
           </div>
          
        </div>
    );
}