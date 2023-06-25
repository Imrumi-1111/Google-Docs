import styles from './loginNav.module.css'
import {FiStar} from 'react-icons/fi'

export default function MainNav(){
    return(
        <>
        <div className={styles.logo}>
            <img 
            src="./google-docs.png"
            alt="icon"
            />
            <input className={styles.document} placeHolder="Untitled document" />
            <FiStar className={styles.FiStar}/>
            <div className={styles.head}>
            <p className={styles.para}>File</p>
            <p className={styles.para}>Edit</p>
            <p className={styles.para}>View</p>
            <p className={styles.para}>Insert</p>
            <p className={styles.para}>Format</p>
            <p className={styles.para}>Tools</p>
            <p className={styles.para}>Extensions</p>
            <p className={styles.para}>Help</p>
            </div>
        </div>
        </>
    )
}