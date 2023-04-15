import { createContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router";
export let Appcontext=createContext();
 function Appcontexprovider({children}){
   let navigate=useNavigate();
  let [loader,setloader]=useState(false);
  let [theme,settheme]=useState(true);
  let [video,setvideo]=useState([]);

  const options = {
	method: 'GET',
	headers: {
      'X-RapidAPI-Key': 'b01d6a9ce1msh404955e2b559f93p1b801cjsn8c0509cb465a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
   async function getdata(search="WORLD"){
      navigate("/")
     setloader(true);
   try{
    let data=await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet%2Cid&regionCode=IN&maxResults=50`, options);
    let {items}=await data.json();
    toast.success("Video upated Successfully")
    setvideo(items);
   }catch(err){
    console.log(err);
    toast.error("Searver is facing some isssues now please try again later")
   }
    setloader(false);
  }
 useEffect(()=>{
    getdata();
 },[])



 let value={
    loader,
    setloader,
    theme,
    settheme,
    video,
    setvideo,
    getdata
 }
 return <Appcontext.Provider value={value}>
        {children}
       </Appcontext.Provider>
}

export default Appcontexprovider;