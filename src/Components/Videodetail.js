import {  useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { FcLike,FcDislike,FcLikePlaceholder } from 'react-icons/fc';
import {IoMdHeartDislike } from 'react-icons/io';

import { toast } from "react-hot-toast";
function Videodetail(props){
    let location=useLocation();

let [showdesc,setshowdesc]=useState(false);

let [liked,setliked]=useState(false);
let [disliked,setdisliked]=useState(false);
function likehandler(b) {
    if(b===true){
     setliked(true);
     toast.success("ADDED TO LIKED VIDEOS")
   
    }else{
        setliked(false);
        toast.success("REMOVED FROM LIKED VIDEOS")
       
    }
}

function dislikehandler(b){
    if(b===true){
        setdisliked(true);
        toast.error("VIDEO DISLIKED")
    }else{
        setdisliked(false);
        toast.error("DISLIKE REMOVED")
    }
}
useEffect(()=>{
    setliked(false);
    setdisliked(false);
},[location.pathname]);
    return (
        <div>
         <h1 className=" text-lg font-bold">{props?.snippet?.title}</h1>
         <div className=" grid grid-cols-3 items-center justify-center lg:flex gap-5">
          
            <p>Views:</p><span>{props?.statistics?.viewCount}</span>
            
          
            <p>Comments:</p><p>{props?.statistics?.commentCount}</p>
              
            {
                liked===true?<FcLike onClick={()=>likehandler(false)} className="text-xl"></FcLike>:(<><FcLikePlaceholder className="text-xl text-white" onClick={()=>likehandler(props,true)}></FcLikePlaceholder><p>{props?.statistics?.likeCount}</p></>)
            }
            {
                disliked===true?<FcDislike onClick={()=>dislikehandler(false)} className="text-xl"></FcDislike>:<IoMdHeartDislike className="text-xl text-white" onClick={()=>dislikehandler(true)}></IoMdHeartDislike>
            }
              <button onClick={()=>setshowdesc(!showdesc)}>Description...</button>
         </div>

       
         <p>
            {
                showdesc===true?(`${props?.snippet?.description}`):""
            }
         </p>
        </div>
    )
}

export default Videodetail;