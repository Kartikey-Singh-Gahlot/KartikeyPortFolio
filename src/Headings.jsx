export default function Headings({pageHeading, pageHeadingStyle}){

 let crntStyle = "min-[430px]:text-4xl text-3xl  text-amber-50 text-center my-5";

 if(pageHeadingStyle){
    crntStyle = crntStyle.concat(pageHeadingStyle);
 }

 return <h1 className={crntStyle}>{pageHeading}</h1>
}