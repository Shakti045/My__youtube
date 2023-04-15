import { useEffect } from "react";
import { useLocation } from "react-router";
import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";
import Loader from "./Loader";
import Videocard from "./Videocard";
function Channelpage(){
    let location =useLocation();
    let cid=location.pathname.split("/").at(-1);
    let { video,setvideo,loader,setloader}=useContext(Appcontext);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b01d6a9ce1msh404955e2b559f93p1b801cjsn8c0509cb465a',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
  async  function getchanneldata(){
    setloader(true);
      let data=await fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${cid}&part=snippet%2Cid&order=date&maxResults=50`,options);
      let {items}= await data.json();
      setvideo(items);
      setloader(false);
    }
    useEffect(()=>{
        getchanneldata();
    },[location.pathname])
   

    return (
        <div className="grid lg:grid-cols-4 grid-cols-1  gap-5  lg:pt-28 pt-44 overflow-y-auto overflow-x-hidden h-[100vh] w-[100vw] absolute -z-20 top-0 left-0 right-0 bottom-0 bg-richblack-700">
           {
             loader===true?(<Loader></Loader>):( video.map((data)=>{
                return <Videocard key={data?.id?.videoId} {...data}></Videocard>
            }))
           }
        </div>
    )
}
export default Channelpage;