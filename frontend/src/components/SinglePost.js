import styles from './SinglePost.module.css'
import React from 'react';
import { usePost } from "../context.js/PostContext";
import axios from "axios";
import { useEffect } from 'react';
import { AiOutlineLike } from "react-icons/ai";
function SinglePost({ postId }) {
    const { allPost, updateLikes } = usePost()

    const post = allPost.find((post) => post.postId === postId);
    if (!post) {
        return <p>loading...</p>
    }
    const handleLike = (postId) => {
        axios.put(`http://localhost:5000/user/updateLikes/${postId}`)
            .then((res) => {
                updateLikes(postId, res.data.likes)
            })
    }
    return <div className={styles.postContainer}>
        <p>{post.userName}</p>
        <p>{post.postMessage}</p>
        <p><AiOutlineLike onClick={() => handleLike(post.postId)} /> {post.likes}</p>
    </div>
}
export default SinglePost;