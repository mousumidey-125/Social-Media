import { useState } from "react";
import Navbar from "./Navbar";
import styles from "./Profile.module.css"
import axios from "axios";
import { useEffect } from "react";
import SinglePost from "./SinglePost";
import { usePost } from "../context.js/PostContext";

function Profile(){
    const userDetails=JSON.parse(localStorage.getItem('userDetails'))
    const {allPost,setAllPost}=usePost()
   const [mypost,setMyPost]=useState([])
   const [loading, setLoading] = useState(false);
   
    useEffect( ()=>{
        axios.get(`http://localhost:5000/user/getPostByEmail/${userDetails.userEmail}`)
        .then((res)=>{
            setMyPost(res.data)
            setLoading(true)
        })
        .catch((error) => {
            console.error("Error fetching posts:", error);
            setMyPost([]); 
          });
        
    },[mypost])
    
    return <>
    <Navbar></Navbar>

    <p>{userDetails.userName}</p>
    
    <div className={styles.postContainer}>
        {mypost.map((post)=><SinglePost key={post.postId} isOwnProfile={true} post={post}/>)}
    </div>
    </>

}
export default Profile;