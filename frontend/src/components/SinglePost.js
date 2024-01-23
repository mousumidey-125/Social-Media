import styles from './SinglePost.module.css'
import React, { useState } from 'react';
import { usePost } from "../context.js/PostContext";
import axios from "axios";
import { useEffect } from 'react';
import { AiOutlineLike,AiFillLike } from "react-icons/ai";
function SinglePost({ postId }) {
    const { allPost, updateLikes , markAsLiked,likedId} = usePost()
    const [isLiked,setIsLiked]=useState(false)
    useEffect(()=>{
        console.log(likedId)
        setIsLiked(likedId.includes(postId));
    },[likedId,postId])
   

    const post = allPost.find((post) => post.postId === postId);
    if (!post) {
        return <p>loading...</p>
    }
    const handleLike = () => {
        if(!isLiked){
            axios.put(`http://localhost:5000/user/updateLikes/${postId}`)
            .then((res) => {
                updateLikes(postId, res.data.likes)
                markAsLiked(postId)
                setIsLiked(true);
                
            })
        }
        
    }
    return <div className={styles.postContainer}>
        <p>{post.userName}</p>
        <p>{post.postMessage}</p>
        <p>{isLiked ? <AiFillLike/>: <AiOutlineLike onClick={() => handleLike()} />} {post.likes}</p>
    </div>
}
export default SinglePost;