import {useState,React,useEffect, useRef} from 'react';

import { useSelector, useDispatch } from "react-redux";
import {updateStatus} from '../slice/navigationSlice';

import styles from '../styles/home.styles.module.css';


const Home = (props) => {
  const pattern ='^www\.[a-z0-9-]+(?:\.[a-z0-9-]+)*\.com/'
  const [url, setUrl] = useState("")
  const first = useRef(null);
  const second =useRef(null);
  const focus = [first, second,]

  if(url.match(pattern)){
    focus[1].current.focus()
  }

    useEffect=(()=>{
        console.log("UseEffect Called...!")
            },[])
        
          const dispatch = useDispatch()
          const siteInfo = useSelector(state=> state.info);
          const [active, setActive] = useState(siteInfo.siteInfo.info.home.homeActive)
          const [visited, setVisited] = useState(siteInfo.siteInfo.info.home.homeVisited)
        
          
          const handleClick =()=>{
                console.log("Welcome i Got Clicked..!")
                if(siteInfo.siteInfo.info.home.homeActive===true){
                  setActive(false);
                }
        
                if (siteInfo.siteInfo.info.home.homeVisited===false){
                  setVisited(true);
                }
                
                
                dispatch(updateStatus({
                  "home": {
                    "homeActive":false,
                    "homeVisited":true
                },
                "planing":{
                    "planingActive":true,
                    "planingVisited":false
                }

            
                }))
                props.showHome(false)
                props.showPlaning(true)
                // console.log(siteInfo.siteInfo.info.welcome.welcomeActive)
        
          }
  return (
    <>
     <div  className={styles.container}>
                  <div className={styles.topBar}>
               <div className={styles.topBarBold}>
                <div className={styles.topBarBoldContent}>
                      Let's set up a home for all your work
                </div>
         
               </div>
               <div className={styles.topBarContent}>
                        You can always change them later
               </div>

            </div>
            <div className={styles.bottomInnerContainer}>
              <div className={styles.bottomInnerContent}>  
              <div className={styles.inputContainerOne}>
              Workspace Name

              <input className={styles.inputs} type="" id="html" name="fav_language" placeholder='Eden'/>

                
                </div>
                <div className={styles.inputContainerTwo}>
              Workspace Url
              <div className={styles.workSpaceContainer}>
              <input className={styles.inputFrst}onChange={(e)=>setUrl(e.target.value)} ref={focus[0]} type="" id="html" name="fav_language" placeholder='www.edwn.com/'/>
              <input className={styles.inputScnd} ref={focus[1]} type="" id="html" name="fav_language" placeholder='Example'/>

                </div>
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

export default Home