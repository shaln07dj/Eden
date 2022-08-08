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
        

    },
    isValid:{
            "welcome":{
                "valid":false
            },
            home:{
                valid:false
            },
            planing:{
                valid:false
            },
            final:{
                valid:false
            }


    },
 
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

            if (action.payload?.final?.active===true ){
                state.siteInfo.info.final.active=true
            }
            if (action.payload?.final?.active===false ){
                state.siteInfo.info.final.active=false
            }
            if (action.payload?.final?.visited===true ){
                state.siteInfo.info.final.visited=true
            }
            if (action.payload?.final?.visited===false ){
                state.siteInfo.info.final.visited=false
            }
            console.log(action.payload?.welcome)
        },
        updateValidation(state,action){
                if(action.payload?.welcome?.valid===true){
                    state.isValid.welcome.valid=true
                }

                console.log("validation action  called", action.payload.welcome)
                console.log("validation action  called", state.isValid.welcome.valid)

                if(action.payload?.welcome?.valid===false){
                    state.siteInfo.isValid.welcome.valid=false
                }

                if(action.payload?.home?.valid===true){
                    state.isValid.home.valid=true
                }
                if(action.payload?.home?.valid===false){
                    state.siteInfo.isValid.home.valid=false
                }
        }

       
    },
    
});


export const {updateStatus, updateValidation} = infoSlice.actions
export default infoSlice.reducer;