import React from 'react'
import styles from '../styles/container.styles.module.css'
import Head from './Head'
import Welcome from './Welcome'

const Container = () => {
  return (
    <>
    <div className={styles.main}>

<div className={styles.outerContainer}>
    <div className={styles.innerContainer}>
        <div className={styles.innerWrapper}>
      
        <div className={styles.topInnerContainer}>
        <Head/>
        </div>
        <div className={styles.bottomInnerContainer}>
            {/* <div className={styles.topBar}>
               <div className={styles.topBarBold}>
                <div className={styles.topBarBoldContent}>
                       Welcome! First things first...
                </div>
         
               </div>
               <div className={styles.topBarContent}>
                        You can always change them later
               </div>

            </div>
            <div className={styles.bottomInnerContent}>

            </div> */}

            <Welcome/>

        </div>      
        </div>


       
    </div>
 
</div>
        </div></>
  )
}

export default Container