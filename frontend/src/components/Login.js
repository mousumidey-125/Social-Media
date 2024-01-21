import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [showErrorMsg, setShowErrormsg] = useState(false)
    const [showSuccessmsg, setShowSucessMsg] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/user/userlogin', { userEmail, userPassword })


        if (res.data.length === 0) {
            setShowErrormsg(true)
            setShowSucessMsg(false)
        }
        else {

            localStorage.setItem('user', 'user')
            localStorage.setItem('userDetails', JSON.stringify(res.data[0]))
            setUserEmail("")
            setUserPassword("")
            setShowSucessMsg(true)
            setShowErrormsg(false)
            setTimeout(() => {
                navigate('/home', { replace: true })
            }, 1000)
        }



    }


    return <form className={styles.LoginContainer} onSubmit={handleSubmit}>
        <h3>Login Page</h3>
        {showErrorMsg && <p className={styles.errorMsg}>Invalid E-mail or Phone </p>}
        {showSuccessmsg && <p className={styles.successMsg}>LogIn SuccessFul</p>}
        <input type="email" placeholder="Enter your e-mail" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} required></input><br></br>
        <input type="password" placeholder="Enter your password" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} required></input><br></br>
        <div className={styles.signupLink}>
            <Link to={'/signup'} className={styles.link}> <p>Don't Have an accout? <span>Click here</span> to create a new accout</p></Link>
        </div>
        <button className="btn btn-primary">Login</button>
    </form>

}
export default Login;