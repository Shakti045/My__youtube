import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";

function Sidebar(){
  let {getdata,theme}=useContext(Appcontext);
    return(
        <div className={`overflow-scroll lg:overflow-hidden  lg:flex lg:flex-col lg:gap-2 lg:pt-28 lg:absolute  lg:bottom-0 lg:top-0 lg:-z-10  lg:justify-between lg:py-7 lg:px-2 font-bold lg:w-[15vw] flex ${theme===true?"bg-richblack-800 text-white":"bg-white text-black"}`}>
          <button onClick={()=>getdata("WORLD")} className=" p-3 lg:bg-red-700 rounded-lg">Home</button>
          <button onClick={()=>getdata("Song")} className=" p-3 focus:bg-red-700 rounded-lg">Music</button>
          <button  onClick={()=>getdata("Coding")} className=" p-3 focus:bg-red-700 rounded-lg">Coding</button>
          <button  onClick={()=>getdata("News")} className=" p-3 focus:bg-red-700 rounded-lg">News</button>
          <button onClick={()=>getdata("Sports")} className=" p-3 focus:bg-red-700 rounded-lg">Sports</button>
          <button  onClick={()=>getdata("Technology")} className=" p-3 focus:bg-red-700 rounded-lg">Tech</button>
          <button onClick={()=>getdata("Eduation")}  className=" p-3 focus:bg-red-700 rounded-lg">Education</button>
          <button  onClick={()=>getdata("English Music")} className=" p-3 focus:bg-red-700 rounded-lg">English music</button>
          <button  onClick={()=>getdata("Fashion")} className=" p-3 focus:bg-red-700 rounded-lg">Fashion</button>
        </div>
    )
}
export default Sidebar;