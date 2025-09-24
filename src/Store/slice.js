import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:"Auth",
    initialState:{
        status:false,
        userData:null
    },
    reducers:{
         userLogin(state,action){
        state.status = true;
        state.userData = action.payload.userData
         },

         userLogout(state){
         state.status =false;
         state.userData = null;
         }
    }
})


export const {userLogin,userLogout} = AuthSlice.actions
export default AuthSlice.reducer

