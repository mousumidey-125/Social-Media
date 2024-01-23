import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SinglePost from "./SinglePost";
import { usePost } from "../context.js/PostContext";

function Home(){
    const {allPost}=usePost()
    

    return <>
    <Navbar/>
    {allPost.map((post)=><SinglePost key={post.postId} postId={post.postId}/>)}
   
    
    </>

}
export default Home;