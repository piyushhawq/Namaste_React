import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "userLocation",
    initialState: {
        cityName: "Varanasi",
        displayName: "Varanasi",
        latitude: "25.3176452",
        longitude: "82.9739144"
        
    },
    reducers: {
        setUserLocation : (state, action)=>{
            state.cityName = action.payload.name
            state.displayName = action.payload.display_name
            state.latitude = action.payload.lat
            state.longitude = action.payload.lon
        }
    }
})

export const { setUserLocation } = locationSlice.actions;
export default locationSlice.reducer;
