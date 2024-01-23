import { createContext, useContext, useState } from "react";

const PostContext = createContext();
export const PostProvider = ({ children }) => {
    const [allPost,setAllPost]=useState([])
    return <PostContext.Provider value={{allPost,setAllPost}}>
        {children}
    </PostContext.Provider>
}

export const usePost=()=>{
    return useContext(PostContext);
}