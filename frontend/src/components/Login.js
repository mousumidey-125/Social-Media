import styles from './Login.module.css'
import { Link } from 'react-router-dom';
function Login(){
    return <form className={styles.LoginContainer}>
        <h3>Login Page</h3>
       
        <input type="email" placeholder="Enter your e-mail" ></input><br></br>
        <input type="password" placeholder="Enter your password" ></input><br></br>
        <div className={styles.signupLink}>
    <Link to={'/signup'} className={styles.link}> <p>Don't Have an accout? <span>Click here</span> to create a new accout</p></Link>
    </div>
        <button className="btn btn-primary">Login</button>
    </form>

}
export default Login;