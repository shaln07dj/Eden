import React from "react";

import {useState} from "react";

import styles from '../styles/head.styles.module.css';

const Head = () => {
//     useEffect=(()=>{
// console.log("UseEffect Called...!")
//     },[])

    const [isvalid, setIsValid]=useState(true)
    const handleColor = ()=>{
        // console.log(styles.round.value)
        setIsValid(!isvalid)
        console.log(isvalid)
    }
  return (
    <>
    <div className={styles.main}>
      <div className={styles.topBar}>
       Eden
       <button onClick={handleColor}>Change</button>
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
           <div className={`${isvalid ===true ? styles.roundActive : styles.roundVisited}`}>

            <div className={styles.roundInner}>1</div>
           </div>
           <div className={`${isvalid ===true ? styles.lineActive : styles.lineVisited}`}></div>

</div>
<div className={styles.one}>
           {/* <div className={styles.roundActive}> */}
           <div className={`${isvalid ===true? styles.roundActive : styles.roundVisited}`}>

           <div className={styles.roundInner}>2</div>
           </div>
           <div className={`${isvalid ===true ? styles.line : styles.lineVisited}`}></div>

</div>
<div className={styles.one}>
           {/* <div className={styles.roundActive}> */}
           <div className={`${isvalid ===true ? styles.roundActive : styles.roundVisited}`}>
           <div className={styles.roundInner}>3</div>
           </div>
           <div className={`${isvalid ===true ? styles.line : styles.lineVisited}`}></div>

</div>
<div className={styles.one}>
           <div className={styles.round4}>
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
