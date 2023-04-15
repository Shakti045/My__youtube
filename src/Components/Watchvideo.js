import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Videocard from "./Videocard";
import Videpdetail from "./Videodetail.js"
import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";
import "./reactplayer.css"



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd8084555f1msh92235c16cf28bffp17586ejsnc8cda798bf39',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

function Watchvideo(){
 let location=useLocation();
 let vid=location.pathname.split("/").at(-1);
let [sugestvideo,setsuggestvideo]=useState([]);
let[videodetail,setvideodetail]=useState("");
let {theme}=useContext(Appcontext);

async function getdata(){
    let data=await fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${vid}&part=id%2Csnippet&type=video&maxResults=50`, options);
    let {items} = await data.json();
    setsuggestvideo(items);
}

async function getvideodetail(){
 let data=await fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${vid}`, options);
 let {items}=await data.json();

 setvideodetail(items[0]);

}



useEffect(()=>{
    getvideodetail();
    getdata();
},[location.pathname]);



    return (
           <div className={` ${theme===true?"bg-black text-white":"bg-white text-black"} absolute  -z-30 w-[100vw] h-[100vh] lg:flex lg:gap-10 lg:pl-8 `}>
            <div className="flex  flex-col">
            <ReactPlayer width={"full"}  url={`https://www.youtube.com/watch?v=${vid}`} controls={true}  playing={true}></ReactPlayer>.
            <Videpdetail {...videodetail}></Videpdetail>
            </div>
           
            <div className={`w-full flex flex-col gap-4 ${theme===true?"bg-black text-white":"bg-white text-black"} items-center`}>
            <h1 className={`font-bold text-4xl text-center ${theme===true?"text-red-500":"text-blue-500"} `}>Suggested Videos</h1>
            <div className={` overflow-y-auto w-full ${theme===true?"bg-black text-white":"bg-white text-black"} lg:grid lg:grid-cols-2 lg:gap-2`}>
                {
                    sugestvideo.map((data)=>{
                        return (<Videocard  key={data.id.videoId} {...data}></Videocard>)
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default Watchvideo;