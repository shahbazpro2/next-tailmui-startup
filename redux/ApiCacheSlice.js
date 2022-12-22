import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    content2: {}
}

const ApiCacheSlice = createSlice({
    name: "apicache",
    initialState,
    reducers: {
        setApiCache: (state, action) => {
            state[action.payload.key] = action.payload.value
        },

    },
})
export const {
    setApiCache
} = ApiCacheSlice.actions
export default ApiCacheSlice.reducer
