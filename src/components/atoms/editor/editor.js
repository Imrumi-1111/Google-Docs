import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Fragment, useState, useEffect} from 'react'
import  Toolbar  from '../toolbar/toolbar';
import styles from './editor.module.css'
import MainNav from '../navbar/loginNav';

export default function Editor(){
    const [editorsData, setEditorsData] = useState("")
    
    function getEditorData(value){
        console.log(value)

}
useEffect(()=> {
    const updateDocument = setTimeout(()=> {
        console.log(editorsData)
    },2000);

    return() => clearTimeout(updateDocument)
},[editorsData]);

    return(
    <Fragment>
        <div>
            <MainNav/>

            <div className={styles.Editor}>
                <Toolbar className={styles.Toolbar}/>
                <ReactQuill className={styles.ReactQuill} value={editorsData}
            onChange={getEditorData}/>
            </div>
            
        </div>
    </Fragment>
)
}