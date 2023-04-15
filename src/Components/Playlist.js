import { useEffect } from "react";
import { useLocation } from "react-router";
import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";
import Loader from "./Loader";
import Videocard from "./Videocard";
function Playlist(){
    let location =useLocation();
    let pid=location.pathname.split("/").at(-1);
    let { video,setvideo,loader,setloader}=useContext(Appcontext);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b01d6a9ce1msh404955e2b559f93p1b801cjsn8c0509cb465a',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
  async  function getplaylistldata(){
    setloader(true);
      let data=await fetch(`https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=${pid}&part=snippet&maxResults=50`,options);
      let {items}= await data.json();
      setvideo(items);
      console.log(items);
      setloader(false);
    }
    useEffect(()=>{
        getplaylistldata();
    },[location.pathname])
   

    return (
        <div className="grid lg:grid-cols-4 grid-cols-1  gap-5  lg:pt-28 pt-44 overflow-y-auto">
                 PLAY LIST WORK IS IN PROGRESS
        </div>
    )
}
export default Playlist;