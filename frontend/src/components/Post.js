import { useState } from "react";
import Navbar from "./Navbar";
import styles from './Post.module.css'
import axios from 'axios'
function Post() {
    const userDetails=JSON.parse(localStorage.getItem('userDetails'))
    const [postMessage,setPostMessage]=useState("")
    const handleSubmit=async ()=>{
        const res= await axios.post('http://localhost:5000/user/addPost',{"userName":userDetails.userName,"userEmail":userDetails.userEmail,postMessage})
        setPostMessage("")
    }
    return <>
    <Navbar></Navbar>
    <div className={styles.postContainer}>
        <textarea rows="10" cols="100" className={styles.postArea} placeholder="Share your thought, achievements,stories here..." onChange={(e)=>setPostMessage(e.target.value)} value={postMessage} required></textarea>
        <button className="btn btn-primary postButton" onClick={handleSubmit}>Post</button>
    </div>
    </>
}
export default Post;