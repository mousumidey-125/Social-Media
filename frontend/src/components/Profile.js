import Navbar from "./Navbar";

function Profile(){
    const userDetails=JSON.parse(localStorage.getItem('userDetails'))
    return <>
    <Navbar></Navbar>
    <p>{userDetails.userName}</p>
    </>

}
export default Profile;