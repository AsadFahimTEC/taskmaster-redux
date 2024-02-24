import {configureStore} from '@reduxjs/toolkit';

import tasksSlice from './features/tasks/tasksSlice';
import UserSlice from '../components/tasks/user/UserSlice';
import baseApi from './features/api/baseApi';

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice: UserSlice,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export default store;