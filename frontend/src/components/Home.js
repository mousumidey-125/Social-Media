import { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Home(){
    const userDetails=JSON.parse(localStorage.getItem('userDetails'))
    

    return <>
    <Navbar/>
   <p>{userDetails.userName}</p>
    
    </>

}
export default Home;