import styles from './Login.module.css'
function Login(){
    return <form className={styles.LoginContainer}>
        <h3>Login Page</h3>
       
        <input type="email" placeholder="Enter your e-mail" ></input><br></br>
        <input type="password" placeholder="Enter your password" ></input><br></br>
        <button className="btn btn-primary">Login</button>
    </form>

}
export default Login;