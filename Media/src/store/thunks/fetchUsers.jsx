import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;
export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/users');

    // dev only
    await pause(100);
    console.log("response : ", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};