// store.js
import { configureStore } from '@reduxjs/toolkit';
import navReducer from './Slices/navslice'; // Ensure the path is correct

const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});

export default store;
