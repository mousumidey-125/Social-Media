import { Link } from 'react-router-dom';
import styles from './Signup.module.css'
function Signup(){
    return <form className={styles.SigupContainer}>
    <h3>SignUp Page</h3>
    <input type="text" placeholder="Enter your Name" ></input><br></br>
    <input type="number" placeholder="Enter your Phone-number" ></input><br></br>
    <input type="email" placeholder="Enter your e-mail" ></input><br></br>
    <input type="password" placeholder="Enter your password" ></input><br></br>
    <div className={styles.loginLink}>
    <Link to={'/login'} className={styles.link}> <p>Already Have an accout? <span>Click here</span> to login</p></Link>
    </div>
    <button className="btn btn-primary">SignUp</button>
</form>
}
export default Signup;