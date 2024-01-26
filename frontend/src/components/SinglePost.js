import styles from './SinglePost.module.css'
import React, { useState } from 'react';
import { usePost } from "../context.js/PostContext";
import axios from "axios";
import { useEffect } from 'react';
import { AiOutlineLike,AiFillLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
function SinglePost({ postId , isOwnProfile,post}) {
    const { allPost, updateLikes , markAsLiked,likedId } = usePost()
    const [isLiked,setIsLiked]=useState(false)
    const [showAction,setShowAction]=useState(false)
    useEffect(()=>{
        setIsLiked(likedId.includes(postId));
        
    },[likedId,postId])

    
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

    const handleAction=()=>{
        setShowAction(!showAction)

    }
    const handleDelete=()=>{
        axios.delete(`http://localhost:5000/user/deleteuserpost/${post.userEmail}/${post.postId}`)
        .then((result)=>{
            console.log(result.data)
        }).catch((err)=>{
            console.log(err)
        })

    }
    return <div className={styles.postContainer}>
        <div className={styles.postContent}>
        <p>{post.userName}</p>
        <p>{post.postMessage}</p>
        <p>{isLiked ? <AiFillLike/>: <AiOutlineLike onClick={() => handleLike()} />} {post.likes}</p>
        </div>
        {showAction && <div onClick={()=>handleDelete()}><p>Delete</p> <p>Edit</p></div>}
        {isOwnProfile && <div onClick={()=>handleAction()} className={styles.actions}><BsThreeDotsVertical /></div>}
        
    </div>
}
export default SinglePost;