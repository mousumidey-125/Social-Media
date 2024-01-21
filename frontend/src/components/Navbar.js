import { Link, useNavigate,useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    const navigate =useNavigate()
    const location = useLocation();
    const user=localStorage.getItem('user')
    const userDetails=JSON.parse(localStorage.getItem('userDetails'))
    const handleLogout=()=>{
        localStorage.removeItem(user)
        localStorage.removeItem(userDetails)
        localStorage.clear()
        navigate('/login',{ replace: true })


    }

    return <div className={styles.navContainer}>
        <div className={styles.leftNav}>
            <p>SocialSphere</p>
        </div>
        <div className={styles.rightNav}>
        
            <div className={location.pathname === '/home' ? styles.active : ''}>
                    <Link to={'/home'} className={styles.link}><p>Home</p></Link>
                </div>
            
            <div className={location.pathname === '/post' ? styles.active : ''}>
                    <Link to={'/post'} className={styles.link}><p>Post</p></Link>
                </div>
            <div className={location.pathname === '/profile' ? styles.active : ''}>
                    <Link to={'/profile'} className={styles.link}><p>Profile</p></Link>
                </div>
          
            <p onClick={handleLogout}>LogOut</p>
        </div>

    </div>

}
export default Navbar;