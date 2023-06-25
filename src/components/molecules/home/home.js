import NavBar from '../../atoms/navbar/navbar'
import styles from './home.module.css'
import { useNavigate } from 'react-router-dom'
import { TiPlus } from "react-icons/ti";

export default function Home() {
    const navigate = useNavigate()
    function handleLogout() {
        navigate('/editor')
    }

    return (
        <div>
            <NavBar />
            <div className={styles.Home}>
            <div className={styles.headtag}><h4> Start a new document</h4></div>
            <div className={styles.pages}>
                <button className={styles.btn} onClick={handleLogout}><TiPlus
                className={styles.TiPlus}
                /></button>
                <div>
                    <button className={styles.btn} onClick={handleLogout}><TiPlus className={styles.TiPlus}/></button>
                    <h5>Resume</h5>
                </div>
                <div>
                    <button className={styles.btn} onClick={handleLogout}><TiPlus className={styles.TiPlus}/></button>
                    <h5>Resume</h5>
                </div>
                <div>
                    <button className={styles.btn} onClick={handleLogout}><TiPlus className={styles.TiPlus}/></button>
                    <h5>Letter</h5>
                </div>
                <div>
                    <button className={styles.btn} onClick={handleLogout}><TiPlus className={styles.TiPlus}/></button>
                    <h5>Project proposal</h5>
                </div>
                <div>
                    <button className={styles.btn} onClick={handleLogout}><TiPlus className={styles.TiPlus}/></button>
                    <h5>Brochure</h5>
                </div>
            </div>

            </div>
        </div>
    )
}