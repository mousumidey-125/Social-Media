import styles from './SinglePost.module.css'
import React from 'react';
import { usePost } from "../context.js/PostContext";
import axios from "axios";
import { useEffect } from 'react';
import { AiOutlineLike } from "react-icons/ai";
function SinglePost(){
    const {allPost,setAllPost}=usePost()
    useEffect( ()=>{
        axios.get('http://localhost:5000/user/getAllPosts')
        .then((res)=>setAllPost(res.data))
        
    },[])
   const handleLike=(postId)=>{
    console.log(postId)
    axios.put(`http://localhost:5000/user/updateLikes/${postId}`)
    .then((res)=>{console.log(res.data.likes)
        setAllPost((prevPost)=>{
            return prevPost.map((post)=>{
                if(post.postId===postId){
                    return {...post,likes:res.data.likes}
                }
                return post
            })
        })
    
    })
    
    

   }
    return <div className={styles.postContainer}>
        {allPost.map((post)=>
        <div className={styles.singlePostContainer}>
        <p>{post.userName}</p>
        <p>{post.postMessage}</p>
        <p><AiOutlineLike onClick={()=>handleLike(post.postId)}/> {post.likes}</p>
        </div>)}
    </div>
}
export default SinglePost;