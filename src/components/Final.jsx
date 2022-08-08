import React from 'react';

import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {updateStatus} from '../slice/navigationSlice';

import styles from '../styles/final.styles.module.css'; 


const Final = () => {
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

          //  props.showWelcome(false)
          //   props.showHome(true)
            // console.log(siteInfo.siteInfo.info.welcome.welcomeActive)
    
      }
  return (
    <>
     <div  className={styles.container}>
                  <div className={styles.topBar}>
               <div className={styles.topBarBold}>
                <div className={styles.topBarBoldContent}>
                     
                </div>
         
               </div>
               <div className={styles.topBarContent}>
                      
               </div>

            </div>
            <div className={styles.bottomInnerContainer}>
              <div className={styles.bottomInnerContent}>  
              <div className={styles.inputContainerCheck}>
             <div className={styles.check_div}>
             <div className={styles.check}> &#10003;</div>
             </div>
                
                </div>
                <div className={styles.inputContainerContent}>
              
               <div className={styles.topBarBold}>
                <div className={styles.topBarBoldContent}>
                       Congratulations, Eden
                </div>
         
               </div>
               <div className={styles.topBarContent}>
                        You have completed onboarding you can start using the Eden!
               </div>

         
                
                </div>
                <div className={styles.inputContainerBtn}>
                <button onClick={handleClick} className={styles.btnStyle}>Launch</button>
                </div>
              </div>

            </div>
    </div>
    </>
  )
}

export default Final