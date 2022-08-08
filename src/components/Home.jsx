import { useState, React, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import { updateStatus } from "../slice/navigationSlice";
import { updateValidation } from "../slice/navigationSlice";

import styles from "../styles/home.styles.module.css";

const Home = (props) => {
  const pattern = "^www.[a-z0-9-]+(?:.[a-z0-9-]+)*.com/";
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [urlName, setUrlName] = useState("");

  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);

  const focus = [first, second, third];
  if (focus[1].current === null || focus[1].current.name) {
    console.log(focus[1]);
  }
  if (url.match(pattern) && focus[0].current.name == "Work Space Name") {
    focus[2].current.focus();
  }

  useEffect =
    (() => {
      console.log("UseEffect Called...!");
    },
    []);

  const dispatch = useDispatch();
  const siteInfo = useSelector((state) => state.info);
  const [active, setActive] = useState(siteInfo.siteInfo.info.home.homeActive);
  const [visited, setVisited] = useState(
    siteInfo.siteInfo.info.home.homeVisited
  );

  if (url.match(pattern) && name.length > 0 && urlName.length > 0) {
    dispatch(
      updateValidation({
        home: {
          valid: true,
        },
      })
    );
  }
  const handleClick = () => {
    console.log("Welcome i Got Clicked..!");
    if (siteInfo.siteInfo.info.home.homeActive === true) {
      setActive(false);
    }

    if (siteInfo.siteInfo.info.home.homeVisited === false) {
      setVisited(true);
    }

    if (url.match(pattern)) {
      dispatch(
        updateStatus({
          home: {
            homeActive: false,
            homeVisited: true,
          },
          planing: {
            planingActive: true,
            planingVisited: false,
          },
          final: {
            active: false,
            visited: false,
          },
        })
      );
      props.showHome(false);
      props.showPlaning(true);
      // console.log(siteInfo.siteInfo.info.welcome.welcomeActive)
    }
  };
  return (
    <>
      <div className={styles.container}>
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
              <input
                onChange={(e) => setName(e.target.value)}
                ref={focus[0]}
                className={styles.inputs}
                type=""
                id="html"
                name="Work Space Name"
                placeholder="Eden"
              />
            </div>
            <div className={styles.inputContainerTwo}>
              Workspace Url
              <div className={styles.workSpaceContainer}>
                <input
                  className={styles.inputFrst}
                  onChange={(e) => setUrl(e.target.value)}
                  ref={focus[1]}
                  type=""
                  id="html"
                  name="urlDomain"
                  placeholder="www.edwn.com/"
                />
                <input
                  onChange={(e) => setUrlName(e.target.value)}
                  className={styles.inputScnd}
                  ref={focus[2]}
                  type=""
                  id="html"
                  name="urlName"
                  placeholder="Example"
                />
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

export default Home;
