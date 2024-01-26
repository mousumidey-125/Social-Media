import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SinglePost from "./SinglePost";
import { usePost } from "../context.js/PostContext";
import axios from "axios";

function Home(){
    const {allPost,setAllPost}=usePost()
    useEffect( ()=>{
        axios.get('http://localhost:5000/user/getAllPosts')
        .then((res)=>setAllPost(res.data))
    },[])
    

    return <>
    <Navbar/>
    {allPost.map((post)=><SinglePost key={post.postId} post={post}/>)}
    </>

}
export default Home;