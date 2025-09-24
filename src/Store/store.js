import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './slice.js'

const store = configureStore({
    reducer:{
        auth:AuthSlice,
    }
})

export default store