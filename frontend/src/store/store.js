import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./auth";
import userManagerSlice from "./manager/user-slice";


const store = configureStore({
   reducer: {
      auth: authSlice,

      // manager slices
      user_manager: userManagerSlice
   },
})

export default store;