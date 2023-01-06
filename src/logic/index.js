import { configureStore } from '@reduxjs/toolkit'
import global from '../app/reducer/reducer'


const rootReducer = configureStore({
    reducer: {
        global,
    },
})

export default rootReducer