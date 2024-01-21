import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import SinglePost from "./SinglePost";
function Home(){
    const [allPost,setAllPost]=useState([])
    useEffect( ()=>{
        const res=axios.get('http://localhost:5000/user/getAllPosts')
        .then((res)=>setAllPost(res.data))
        
    },[])
    

    return <>
    <Navbar/>
   {allPost.map((post)=><SinglePost allPost={allPost}/>)}
    
    </>

}
export default Home;