import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albuumsApi } from './apis/albumApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albuumsApi.reducerPath] :  albuumsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
        .concat(albuumsApi.middleware);
  }
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery } from './apis/albumApi';

