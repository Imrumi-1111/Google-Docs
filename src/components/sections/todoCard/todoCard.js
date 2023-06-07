import React, { useState } from 'react'
import styles from "./todoCard.module.css"
import {SlOptions} from "react-icons/sl"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {BiCommentAdd} from "react-icons/bi" 
import { ClockLoader } from 'react-spinners'
import {BsPersonWorkspace} from "react-icons/bs"
import { v4 as uuidv4 } from "uuid";
//import { Link } from 'react-router-dom'


export default function InProgress({item}) {
  const[wantToSeeList,setWantToSeeList]=useState(false)
  //const[moreAdd,setMoreAdd]=useState(false)
    const[workinProgress,setWorkinProgress]=useState("")
    const[lis,setLis]=useState([])
    function handleChange(e){
       let datum= e.target.value
       setWorkinProgress(datum)
     
 }
 
    function handleToDelete(indexNum){
      const filteredData=lis.filter((ele,index)=>index!==indexNum);
        setLis(filteredData);
        localStorage.setItem("Task_To_Do",filteredData)
        

    }
    function handleToView(){
      setWantToSeeList(!wantToSeeList)
    }
    function handleAdd(){
      if(workinProgress===""){
        alert("Write the Task Please")
        setWorkinProgress("")
      }
      else if(lis.includes(workinProgress)){
        alert("Already")
        setWorkinProgress("")
      }
      else{const data=[workinProgress,...lis]
      setLis(data)
      setWorkinProgress("")
      localStorage.setItem("Task_To_Do",data)
      }   

    }
    function handleEnter(e){
      if(e.keyCode===13){
        if(workinProgress===""){
          alert("Write the Task Please")
          setWorkinProgress("")
        }
        else if(lis.includes(workinProgress)){
          alert("Already")
          setWorkinProgress("")
        }
        else{const data=[workinProgress,...lis]
        setLis(data)
        setWorkinProgress("")
        localStorage.setItem("Task_To_Do",data)
        }   
  

      }
    }
  return (
    <div className={styles.main} >
      {/* <Link to={`/details/${item.id}`}>{item.title}</Link> */}
     { !wantToSeeList ?<div className={styles.bluff_container}>
     <button className={styles.bluffbutton} onClick={handleToView}>Add a List</button>
     <br/>
     <ClockLoader color="red" className={styles.clock} />
     </div>
     :
     <div className={styles.container}>
      <BsPersonWorkspace className={styles.logo}/>
        <div className={styles.container1}>
              
      <input placeholder="    To Do "
      className={styles.field1}
      />
      <button className={styles.moreoption}><SlOptions/></button>
      </div>

        <span className={styles.taskContainer}>
          {
        lis.map((ele,index)=>{
          return(
            <div key={uuidv4()} className={styles.singleTaskContainer}>
              
              <p  className={styles.singleTask} >{ele}</p>
              <button onClick={()=>handleToDelete(index)} className={styles.delButton}><RiDeleteBin5Fill/></button>
              
              </div>
              
            
          )
        })}</span>
        <div >
                <input className={styles.field} type='text' onChange={handleChange} value={workinProgress} onKeyDown={handleEnter} placeholder='    + Add Task'></input>
                <button onClick={handleAdd} className={styles.addbutton}> <BiCommentAdd/></button>
        </div>
        
        
        </div>
        
    }
    
    </div>
  )
}