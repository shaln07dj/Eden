import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    siteInfo: {
        "info":{
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
            },
            "final":{ 
                "active":false,
                "visited":false
            }
        }
        

    }
};

const infoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        updateStatus(state,action){
            if (action.payload?.welcome?.welcomeActive===true){
                state.siteInfo.info.welcome.welcomeActive=true
            }
            if (action.payload?.welcome?.welcomeActive===false){
                state.siteInfo.info.welcome.welcomeActive=false
            }
            if(action.payload?.welcome?.welcomeVisited===true){
                state.siteInfo.info.welcome.welcomeVisited=true
            }

            if(action.payload?.welcome?.welcomeVisited===false){
                state.siteInfo.info.welcome.welcomeVisited=false
            }
            if (action.payload?.home?.homeActive===true ){
                state.siteInfo.info.home.homeActive=true
            }
            if (action.payload?.home?.homeActive===false ){
                state.siteInfo.info.home.homeActive=false
            }
            if (action.payload?.home?.homeVisited===true ){
                state.siteInfo.info.home.homeVisited=true
            }
            if (action.payload?.home?.homeVisited===false ){
                state.siteInfo.info.home.homeVisited=false
            }
            if (action.payload?.planing?.planingActive===true ){
                state.siteInfo.info.planing.planingActive=true
            }
            if (action.payload?.planing?.planingActive===false ){
                state.siteInfo.info.planing.planingActive=false
            }
            if (action.payload?.planing?.planingVisited===true ){
                state.siteInfo.info.planing.planingVisited=true
            }
            if (action.payload?.planing?.planingVisited===false ){
                state.siteInfo.info.planing.planingVisited=false
            }
            if (action.payload?.final?.active===false ){
                state.siteInfo.info.final.active=false
            }
            if (action.payload?.final?.visited===true ){
                state.siteInfo.info.final.visited=true
            }
            console.log(action.payload?.welcome)
        }
    }
});

export const {updateStatus} = infoSlice.actions
export default infoSlice.reducer;