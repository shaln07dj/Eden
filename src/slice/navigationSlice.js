import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    siteInfo: {
        "info":{
            "welcome": {
                "welcomeActive":true,
                "welcomeVisted":false
            },
            "home":{
                "HomeActive":true,
                "HomeVisted":false
            },
            "planing":{
                "active":true,
                "visted":false
            },
            "final":{ 
                "active":true,
                "visted":false
            }
        }
        

    }
};

const infoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        updateStatus(state,action){
            if (action.payload.welcome==="active"){
                state.siteInfo.info.welcome.welcomeActive=!state.siteInfo.info.welcome.welcomeActive
            }
            if (action.payload.home==="active"){
                state.siteInfo.info.home.homeActive=!state.siteInfo.info.home.homeActive
            }
            console.log(action.payload.welcome)
        }
    }
});

export const {updateStatus} = infoSlice.actions
export default infoSlice.reducer;