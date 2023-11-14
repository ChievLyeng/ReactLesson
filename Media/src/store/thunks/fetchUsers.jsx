import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    //dev only
    await pause(2000)

    return response.data;
});


const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve,duration);
    });
}