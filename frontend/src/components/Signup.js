import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css'
import { useState } from 'react';
import axios from 'axios';
function Signup() {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [showErrorMsg, setShowErrormsg] = useState(false)
    const [showSuccessmsg, setShowSucessMsg] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/user/userreg', { userName, userEmail, userPhone, userPassword })
    
        if (res.data.length === 0) {
            setShowErrormsg(true)
            setShowSucessMsg(false)
        }
        else {
            setUserName("")
        setUserEmail("")
        setUserPhone("")
        setUserPassword("")
            setShowSucessMsg(true)
            setShowErrormsg(false)
            setTimeout(() => {
                navigate('/login')
            }, 1000)
        }
        


    }

    return <form className={styles.SigupContainer} onSubmit={handleSubmit}>
        <h3>SignUp Page</h3>
        {showErrorMsg && <p className={styles.errorMsg}>E-mail or Phone no already exist</p>}
        {showSuccessmsg && <p className={styles.successMsg}>Account created successfully</p>}
        <input type="text" placeholder="Enter your Name" onChange={(e) => setUserName(e.target.value)} required></input><br></br>
        <input type="number" placeholder="Enter your Phone-number" onChange={(e) => setUserPhone(e.target.value)} required></input><br></br>
        <input type="email" placeholder="Enter your e-mail" onChange={(e) => setUserEmail(e.target.value)} required></input><br></br>
        <input type="password" placeholder="Enter your password" onChange={(e) => setUserPassword(e.target.value)} required></input><br></br>
        <div className={styles.loginLink}>
            <Link to={'/login'} className={styles.link}> <p>Already Have an accout? <span>Click here</span> to login</p></Link>
        </div>
        <button className="btn btn-primary">SignUp</button>
    </form>
}
export default Signup;