import React from 'react';

import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {updateStatus} from '../slice/navigationSlice';

import styles from '../styles/welcome.styles.module.css'; 


const Welcome = (props) => {
  
      useEffect=(()=>{
console.log("UseEffect Called...!")
    },[])

  const dispatch = useDispatch()
  const siteInfo = useSelector(state=> state.info);
  const [active, setActive] = useState(siteInfo.siteInfo.info.welcome.welcomeActive)
  const [visited, setVisited] = useState(siteInfo.siteInfo.info.welcome.welcomeVisited)

  
  const handleClick =()=>{
        console.log("Welcome i Got Clicked..!")
        if(siteInfo.siteInfo.info.welcome.welcomeActive===true){
          setActive(false);
        }

        if (siteInfo.siteInfo.info.welcome.welcomeVisited===false){
          setVisited(true);
        }
        
        
        dispatch(updateStatus({
          "welcome": {
            "welcomeActive":false,
            "welcomeVisited":true
        },
        "home":{
          "homeActive":true,
          "homeVisited":false
        }
    
        }))
       props.showWelcome(false)
        props.showHome(true)
        // console.log(siteInfo.siteInfo.info.welcome.welcomeActive)

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
    
              <input className={styles.inputs} type="" id="html" name="fav_language" />

                
                </div>
                <div className={styles.inputContainerTwo}>
              Display Name
    
              <input className={styles.inputs} type="" id="html" name="fav_language" />

                
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