import {useState,React,useEffect} from 'react';

import { useSelector, useDispatch } from "react-redux";
import {updateStatus} from '../slice/navigationSlice';

import styles from '../styles/planing.styles.module.css'; 


const Planing = (props) => {
 
    useEffect=(()=>{
        console.log("UseEffect Called...!")
            },[])
        
          const dispatch = useDispatch()
          const siteInfo = useSelector(state=> state.info);
          const [active, setActive] = useState(siteInfo.siteInfo.info.planing.planingActive)
          const [visited, setVisited] = useState(siteInfo.siteInfo.info.planing.planingVisited)
        
          
          const handleClick =()=>{
                console.log("Welcome i Got Clicked..!")
                // if(siteInfo.siteInfo.info.planing.active===true){
                //   setActive(false);
                // }
        
                // if (siteInfo.siteInfo.info.planing.visited===false){
                //   setVisited(true);
                // }
                
                
                dispatch(updateStatus({
             
                "planing":{
                  "planingActive":false,
                  "planingVisited":true
                },
                "final":{ 
                  "active":false,
                  "visited":true
              }
           
            
                }))
               props.showPlaning(false)
                props.showFinal(true)
                // console.log(siteInfo.siteInfo.info.welcome.welcomeActive)
        
          }
  return (
    <>
         <div  className={styles.container}>
                  <div className={styles.topBar}>
               <div className={styles.topBarBold}>
                <div className={styles.topBarBoldContent}>
                      How are you planing to use Eden?
                </div>
         
               </div>
               <div className={styles.topBarContent}>
                       We'll streamline your setup experince accordingly
               </div>

            </div>
            <div className={styles.bottomInnerContainer}>
              <div className={styles.bottomInnerContent}>  
              <div className={styles.inputContainerOne}>
              Full Name
    
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

export default Planing