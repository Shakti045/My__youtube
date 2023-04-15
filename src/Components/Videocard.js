import { Link } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";
import "./videocard.css"

function Videocard({id,snippet}){

let {theme}=useContext(Appcontext);
if(id.kind==="youtube#video"){
return(

<Link to={`/Watchvideo/${id.videoId}`}>
          <div  className={`  ${theme===true?"text-white":"text-black"} lg:w-320 mob  min-h-[300px]  flex flex-col`}>
         <div className="rounded-md">
         <img src={snippet.thumbnails.medium.url}  className="rounded-md"></img>
         </div>
          <div>
          <p className="lg: w-[320px] ">{snippet.title}</p>
          </div>
          <div>
          <p className=" font-bold text-xl text-red-500">{snippet?.channelTitle}</p>
           <p>{snippet.publishedAt.substring(0,10)+" "+snippet.publishedAt.substring(11,16)}</p> 
          </div>
        </div>
        </Link>
)

}else if(id.kind==="youtube#playlist"){

  return (
    <Link to={`/Playlist/${id.playlistId}`}>
          <div  className=" w-320 min-h-[300px]  flex flex-col ">
         <div className="bg-richblack-700 rounded-md">
         <img src={snippet.thumbnails.medium.url} className="rounded-md"></img>
         </div>
          <div>
          <h1 className=" text-red-500 text-2xl font-bold">PLAYLIST</h1>
          <p className=" w-[320px] ">{snippet.title}</p>
          </div>
          <div>
          <p className=" font-bold text-xl text-red-500">{snippet?.channelTitle}</p>
           <p>{snippet.publishedAt.substring(0,10)+" "+snippet.publishedAt.substring(11,16)}</p> 
          </div>
        
        </div>
        </Link>
)
  
}else if(id.kind==="youtube#channel"){
  return(
    <Link to={`/Channelpage/${id?.channelId}`}>
          <div  className=" w-320 min-h-[300px]  flex flex-col">
         <div className="bg-richblack-700 rounded-md">
         <img src={snippet.thumbnails.medium.url} className="rounded-md"></img>
         </div>
          <div>
          <h1 className=" text-red-500 text-2xl font-bold">CHANNEL</h1>
          <p className=" w-[320px] ">{snippet.title}</p>
          </div>
          <div>
          <p className=" font-bold text-xl text-red-500">{snippet?.channelTitle}</p>
           <p>{snippet.publishedAt.substring(0,10)+" "+snippet.publishedAt.substring(11,16)}</p> 
          </div>
        
        </div>
        </Link>
  )
}
   
}

export default Videocard;