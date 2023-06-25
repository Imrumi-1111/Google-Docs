import styles from './navbar.module.css'
import { HiMenu } from "react-icons/hi";
import { FaSearch } from 'react-icons/fa'

export default function NavBar(){
    return(
        <div className={styles.NavBar}>
            <HiMenu/>
            <div className={styles.logo}>
            <img
            src="./google-docs.png"
            alt="icon"
            height="30rem"
            />
            </div>
            <p className={styles.p}>Docs</p>
            <div className={styles.nav}>
            <FaSearch
            className={styles.icon}/>
            <input className={styles.search} placeHolder="search"/>
            </div>
            </div>
        
    )
}