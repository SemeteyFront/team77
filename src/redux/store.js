import { configureStore } from '@reduxjs/toolkit';
import Courses from './slices/getCourses';
import reducer from './slices/authSlice';
import Rating from './slices/getRating';

const store = configureStore({
    reducer: {
        rating: Rating,
        auth: reducer,
        courses: Courses,
    },
});

export default store;