import React from "react";

import {useState,useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import {updateStatus} from '../slice/navigationSlice';

import styles from '../styles/head.styles.module.css';

const Head = (props) => 
{const dispatch = useDispatch()
var siteInfo = useSelector(state=> state.info);
    useEffect=(()=>{
console.log("UseEffect Called...!")
    },[siteInfo])


    const [isvalid, setIsValid]=useState(true)
    const handleColor = ()=>{
        // console.log(styles.round.value)
        setIsValid(!isvalid)
        console.log(isvalid)
    }
    console.log(siteInfo)
    const handleOne = ()=>{
        console.log("One Clicked");
        props.showWelcome(true)
        props.showHome(false)
        props.showPlaning(false)
        props.showFinal(false)

        dispatch(updateStatus({
            "welcome": {
              "welcomeActive":true,
              "welcomeVisited":false
         
          },
          "home":{
            "homeActive":false,
            "homeVisited":false
          },
          "planing":{
            "planingActive":false,
            "planingVisited":false
        }
      
          }))
    }
    const handleTwo = ()=>{
      console.log("One Clicked");
      props.showWelcome(false)
      props.showHome(true)
      props.showPlaning(false)
      props.showFinal(false)
      dispatch(updateStatus({
          "welcome": {
            "welcomeActive":false,
            "welcomeVisited":true
        },
        "home":{
          "homeActive":true,
          "homeVisited":false
        },
        "planing":{
          "planingActive":false,
          "planingVisited":false
      }
    
        }))
  }
  const handleThree = ()=>{
    console.log("One Clicked");
    props.showWelcome(false)
    props.showHome(false)
    props.showPlaning(true)
    props.showFinal(false)
    dispatch(updateStatus({
        "welcome": {
          "welcomeActive":false,
          "welcomeVisited":true
      },
      "home":{
        "homeActive":false,
        "homeVisited":true
      },
      "planing":{
        "planingActive":true,
        "planingVisited":false
    }
  
      }))
}

const handleFour = ()=>{
  console.log("One Clicked");
  props.showWelcome(false)
  props.showHome(false)
  props.showPlaning(false)
  props.showFinal(true)
  dispatch(updateStatus({
      "welcome": {
        "welcomeActive":false,
        "welcomeVisited":true
    },
    "home":{
      "homeActive":false,
      "homeVisited":true
    },
    "planing":{
      "planingActive":false,
      "planingVisited":true
  }

    }))
}
  return (
    <>
    <div className={styles.main}>
      <div className={styles.topBar}>
       Eden
      
      </div >
      <div className={styles.wrapper}>
        <div className={styles.container}>
           <div className={styles.content}>
           {/* <div className={`${isvalid ==false ? styles.line : styles.line2}`}>
           </div>
           <div className={`${isvalid ==false ? styles.line : styles.line2}`}>
</div> */}
           <div className={styles.one}>
           {/* <div className={styles.roundActive}> */}
           <div onClick={handleOne} className={`${siteInfo.siteInfo.info.welcome.welcomeActive===true? styles.roundActive:siteInfo.siteInfo.info.welcome.welcomeVisited===true? styles.roundVisited: styles.roundActive 
          }`}>

            <div className={styles.roundInner}>1</div>
           </div>
           <div className={`${siteInfo.siteInfo.info.welcome.welcomeActive===true ?styles.lineActive : siteInfo.siteInfo.info.welcome.welcomeVisited===true? styles.lineVisited :styles.line }`}></div>

</div>
<div className={styles.one}>
           {/* <div className={styles.roundActive}> */}
           <div onClick={handleTwo} className={`${siteInfo.siteInfo.info.home.homeVisited===true? styles.roundVisited : siteInfo.siteInfo.info.home.homeVisited===true? styles.roundActive:styles.roundActive }`}>

           <div className={styles.roundInner}>2</div>
           </div>
           <div className={`${siteInfo.siteInfo.info.home.homeActive ===true ? styles.lineActive :siteInfo.siteInfo.info.home.homeVisited===true? styles.lineVisited:styles.line}`}></div>

</div>
<div className={styles.one}>
           {/* <div className={styles.roundActive}> */}
           <div onClick={handleThree} className={`${siteInfo.siteInfo.info.planing.planingVisited===true? styles.roundVisited : siteInfo.siteInfo.info.planing.planingVisited===true? styles.roundActive:styles.roundActive }`}>
           <div className={styles.roundInner}>3</div>
           </div>
           <div  className={`${siteInfo.siteInfo.info.planing.planingActive ===true ? styles.lineActive :siteInfo.siteInfo.info.planing.planingVisited===true? styles.lineVisited:styles.line}`}></div>

</div>
<div className={styles.one}>
           <div onClick={handleFour}className={`${siteInfo.siteInfo.info.final.visited===true? styles.roundVisited4 : styles.round4}`}>
           <div className={styles.roundInner}>4</div>
           </div>
          

</div>
           </div>

        </div>      
       
      </div>
      </div>
    </>
  );
};

export default Head;
