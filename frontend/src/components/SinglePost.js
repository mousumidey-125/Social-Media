import styles from './SinglePost.module.css'
import React from 'react';
function SinglePost({allPost}){
    const handleProfile=(e)=>{
        console.log(e)

    }
    return <div className={styles.postContainer}>
        {allPost.map((post)=>
        <div className={styles.singlePostContainer}>
        <p onClick={()=>handleProfile(post.userName)}>{post.userName}</p>
        <p>{post.postMessage}</p>
        </div>)}
    </div>
}
export default SinglePost;