import React from 'react';

import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {updateStatus} from '../slice/navigationSlice';
import { updateValidation } from '../slice/navigationSlice';
import { updateData} from '../slice/navigationSlice';


import styles from '../styles/welcome.styles.module.css'; 


const Welcome = (props) => {
  
      useEffect=(()=>{
console.log("UseEffect Called...!")
    },[])

  const dispatch = useDispatch()
  const siteInfo = useSelector(state=> state.info);
  const [fullName,setFullName] = useState(siteInfo.data.welcome.fullName);
  const [dispName,setDispName] = useState(siteInfo.data.welcome.displayName);

  const [active, setActive] = useState(siteInfo.siteInfo.info.welcome.welcomeActive)
  const [visited, setVisited] = useState(siteInfo.siteInfo.info.welcome.welcomeVisited)

  if(fullName.length>0 && dispName.length>0){

    dispatch(updateValidation({
      "welcome":{
        "valid":true
      }
    }))
    dispatch(updateData({
      welcome:{
        fullName:fullName,
        displayName:dispName
    }
    }))
  }
  const handleClick =()=>{
        console.log("Welcome i Got Clicked..!")
        if(siteInfo.siteInfo.info.welcome.welcomeActive===true){
          setActive(false);
        }

        if (siteInfo.siteInfo.info.welcome.welcomeVisited===false){
          setVisited(true);
        }
        
        
  
        if(fullName.length>0 && dispName.length>0){
 
     
          dispatch(updateStatus({
            "welcome": {
              "welcomeActive":false,
              "welcomeVisited":true
          },
          "home":{
            "homeActive":true,
            "homeVisited":false
          }, "final":{ 
            "active":false,
            "visited":false
        }
      
          }))
          
        props.showWelcome(false)
        props.showHome(true)
        }

     
  }
  return (
    <>
    <div  className={styles.container}>
                  <div className={styles.topBar}>
               <div className={styles.topBarBold}>
                <div className={styles.topBarBoldContent}>
                       Welcome! First things first...
                </div>
         
               </div>
               <div className={styles.topBarContent}>
                        You can always change them later
               </div>

            </div>
            <div className={styles.bottomInnerContainer}>
              <div className={styles.bottomInnerContent}>  
              <div className={styles.inputContainerOne}>
              Welcome Full Name
    
              <input onChange={(e)=>setFullName(e.target.value)} className={styles.inputs} type="" name="full_name" value={fullName}/>

                
                </div>
                <div className={styles.inputContainerTwo}>
              Display Name
    
              <input onChange={(e)=>setDispName(e.target.value)} className={styles.inputs} type=""  name="display_name" value={dispName}/>

                
                </div>
                <div className={styles.inputContainerOne}>
                <button onClick={handleClick} className={styles.btnStyle}>Create Workspace</button>
                </div>
              </div>

            </div>
    </div>
    </>
  )
}

export default Welcome