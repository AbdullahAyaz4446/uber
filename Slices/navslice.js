// Slices/navslice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    traveltimeinformation: null,
};

const navslice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.traveltimeinformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navslice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.traveltimeinformation;

export default navslice.reducer;
