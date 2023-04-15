import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";
import Videocard from "./Videocard";
import Loader from "./Loader";

function Feed(){
    let {video,loader,theme}=useContext(Appcontext);

    return (
        <div className={`lg:grid lg:grid-cols-3 bg-black flex flex-col gap-2 lg:gap-0 lg:pl-[17vw] lg:pt-28 pt-[20vh] overflow-y-auto h-[100vh] w-[100vw] absolute -z-20 top-0 left-0 right-0 bottom-0 ${theme===true?"lg:bg-richblack-700":"bg-white"}`}>
           {
             loader===true?(<Loader></Loader>):( video.map((data)=>{
                return <Videocard key={data?.id?.videoId} {...data}></Videocard>
            }))
           }
        </div>
    )
}
export default Feed;