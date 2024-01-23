import { useState } from "react";
import Navbar from "./Navbar";
import styles from "./Profile.module.css"
import axios from "axios";
import { useEffect } from "react";
import SinglePost from "./SinglePost";

function Profile(){
    const userDetails=JSON.parse(localStorage.getItem('userDetails'))

   const [mypost,setMyPost]=useState([])
    useEffect( ()=>{
        axios.get(`http://localhost:5000/user/getPostByEmail/${userDetails.userEmail}`)
        .then((res)=>setMyPost(res.data)
        ).catch((error) => {
            console.error("Error fetching posts:", error);
            setMyPost([]); 
          });
        
    },[])
    return <>
    <Navbar></Navbar>

    <p>{userDetails.userName}</p>
    <div className={styles.postContainer}>
        {mypost.map((post)=><SinglePost postId={post.postId} key={post.postId}/>)}


    </div>
    </>

}
export default Profile;