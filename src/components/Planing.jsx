import { useState, React, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateStatus, updateData } from "../slice/navigationSlice";

import styles from "../styles/planing.styles.module.css";

const Planing = (props) => {
  useEffect =
    (() => {
      console.log("UseEffect Called...!");
    },
    []);

  const dispatch = useDispatch();
  const siteInfo = useSelector((state) => state.info);
  const [firstSelected, setFirstSelected] = useState(
    siteInfo.data.planing.plan1?.active
  );
  const [secondSelected, setSecondSelected] = useState(
    siteInfo.data.planing.plan2?.active
  );
  const [plan1Type, setPlan1Type] = useState(siteInfo.data.planing.plan1?.type);
  const [plan2Type, setPlan2Type] = useState(siteInfo.data.planing.plan2?.type);
  const [plan1Info, setPlan1Info] = useState(siteInfo.data.planing.plan1?.info);
  const [plan2Info, setPlan2Info] = useState(siteInfo.data.planing.plan2?.info);

  const [active, setActive] = useState(
    siteInfo.siteInfo.info.planing.planingActive
  );
  const [visited, setVisited] = useState(
    siteInfo.siteInfo.info.planing.planingVisited
  );
  const handleClickOne = (e) => {
    setFirstSelected(true);
    setSecondSelected(false);
  };
  const handleClickTwo = (e) => {
    setSecondSelected(true);
    setFirstSelected(false);
  };

  const handlePlanOne = (e) => {
    console.log(e.currentTarget.innerHTML);
    let text = e.currentTarget.innerHTML;
    let pos = text.search("</h4>");
    let result = text.slice(4, pos);
    let planinfo = text.split(`<h4>${result}</h4>`);
    setPlan1Type(result);
    console.log(result);
    setPlan1Info(planinfo[1]);
    console.log(planinfo[1]);
  };

  const handlePlanTwo = (e) => {
    console.log(e.currentTarget.innerHTML);
    let text = e.currentTarget.innerHTML;
    let pos = text.search("</h4>");
    let result = text.slice(4, pos);
    let planinfo = text.split(`<h4>${result}</h4>`);

    console.log(result);
    setPlan2Type(result);
    setPlan2Info(planinfo[1]);
    console.log(planinfo[1]);
  };
  const handleClick = () => {
    console.log("Welcome i Got Clicked..!");

    dispatch(
      updateStatus({
        planing: {
          planingActive: false,
          planingVisited: true,
        },
        final: {
          active: false,
          visited: true,
        },
      })
    );

    dispatch(
      updateData({
        planing: {
          plan1: {
            type: plan1Type,
            info: plan1Info,
            active: firstSelected,
          },
          plan2: {
            type: plan2Type,
            info: plan2Info,
            active: secondSelected,
          },
        },
      })
    );
    props.showPlaning(false);
    props.showFinal(true);
  };
  return (
    <>
      <div className={styles.container}>
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
            <div className={styles.bottomInnerWrapper}>
              <div className={styles.bottomInnerOne}>
                <div
                  onClick={handleClickOne}
                  className={`${
                    firstSelected === true
                      ? styles.bottomInnerOneContentSelected
                      : styles.bottomInnerOneContent
                  }`}
                >
                  <div
                    onClick={handlePlanOne}
                    className={styles.bottomInnerOneInner}
                  >
                    <h4>For Myself</h4>
                    Write better. Think more clearly. Stay organized.
                  </div>
                </div>
              </div>
              <div className={styles.bottomInnerTwo}>
                <div
                  onClick={handleClickTwo}
                  className={`${
                    secondSelected === true
                      ? styles.bottomInnerTwoContentSelected
                      : styles.bottomInnerTwoContent
                  }`}
                >
                  <div
                    onClick={handlePlanTwo}
                    className={styles.bottomInnerOneInner}
                  >
                    <h4>With My Team</h4>
                    Wikis, docs, tasks & projects, all in one palce.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputContainerOne}>
              <button onClick={handleClick} className={styles.btnStyle}>
                Create Workspace
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planing;
