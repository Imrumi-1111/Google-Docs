import GoogleButton from 'react-google-button'
import styles from "./login.module.css"
import { useNavigate } from 'react-router-dom'


export default function Login(){
    const navigate=useNavigate()
    function handleClick(){
        navigate('/home')

    }

    return(
        <div className={styles.GoogleButton}>
            <h1> login page</h1>
            <GoogleButton 
            onClick={handleClick}
            />
        </div>
    )
}