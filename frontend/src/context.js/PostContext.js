import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from 'react';
const PostContext = createContext();
export const PostProvider = ({ children }) => {
    const [allPost,setAllPost]=useState([])
    const [likedId,setLikedId]=useState(() => {
        const storedLikedId = localStorage.getItem("likedId");
        return storedLikedId ? JSON.parse(storedLikedId) : [];
    });
    
    useEffect(()=>{
        localStorage.setItem("likedId",JSON.stringify(likedId))
    },[likedId])

    const updateLikes = (postId, newLikes) => {
        setAllPost((prevPosts) => {
          return prevPosts.map((post) => {
            if (post.postId === postId) {
              return { ...post, likes: newLikes };
            }
            return post;
          });
        });
      };

      const markAsLiked=(postId)=>{
        setLikedId((prevPost)=>[...prevPost,postId])
      }
    
    return <PostContext.Provider value={{allPost,setAllPost,updateLikes,markAsLiked,likedId}}>
        {children}
    </PostContext.Provider>
}

export const usePost=()=>{
    return useContext(PostContext);
}