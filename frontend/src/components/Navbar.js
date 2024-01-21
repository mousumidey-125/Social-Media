import styles from './Navbar.module.css'
function Navbar() {
    return <div className={styles.navContainer}>
        <div className={styles.leftNav}>
            <p>SocialSphere</p>
        </div>
        <div className={styles.rightNav}>
            <p>Home</p>
            <p>Post</p>
            <p>Profile</p>
            <p>LogOut</p>
        </div>

    </div>

}
export default Navbar;