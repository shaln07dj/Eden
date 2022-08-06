import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import {updateStatus} from './slice/navigationSlice';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Container from './components/Container';

function App() {
  const dispatch = useDispatch()
  const siteInfo = useSelector(state=> state.info);
  // console.log(siteInfo.siteInfo.info.welcome.active)

  const handleClick = ()=>{
    console.log("Clicked")
    dispatch(updateStatus({
      "welcome":"active",
      "home" :"active",

    }))
  }
  return (
    <div className="App">
      {/* {siteInfo.siteInfo.info.welcome.welcomeActive&& <Welcome/>}
      {siteInfo.siteInfo.info.home.homeActive&& <Home/>}
      <button onClick={handleClick}>Hide</button> */}
      <Container/>
    </div>
  );
}

export default App;
