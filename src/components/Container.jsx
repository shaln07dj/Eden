import React from "react";

import { useState } from "react";

import styles from "../styles/container.styles.module.css";
import Final from "./Final";
import Head from "./Head";
import Home from "./Home";
import Planing from "./Planing";
import Welcome from "./Welcome";

const Container = () => {
  const [openWelcome, setOpenWelcome] = useState(true);
  const [openHome, setOpenHome] = useState(false);
  const [viewPlaning, setViewPlaning] = useState(false);
  const [viewFinal, setViewFinal] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.innerWrapper}>
              <div className={styles.topInnerContainer}>
                <Head
                  showWelcome={setOpenWelcome}
                  showHome={setOpenHome}
                  showPlaning={setViewPlaning}
                  showFinal={setViewFinal}
                />
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

                {openWelcome && (
                  <Welcome
                    showWelcome={setOpenWelcome}
                    showHome={setOpenHome}
                  />
                )}
                {openHome && (
                  <Home showHome={setOpenHome} showPlaning={setViewPlaning} />
                )}
                {viewPlaning && (
                  <Planing
                    showPlaning={setViewPlaning}
                    showFinal={setViewFinal}
                  />
                )}
                {viewFinal && <Final />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
