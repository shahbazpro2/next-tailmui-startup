import { combineReducers } from "@reduxjs/toolkit"
import ApiCacheSlice from "redux/ApiCacheSlice"
const reducers = combineReducers({
	apiCache: ApiCacheSlice
})

export default reducers
