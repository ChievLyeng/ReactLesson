import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_USER = "http://localhost:3000/users/users";

export const fetchUser = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(GET_ALL_USER);

  return response.data;
});

// fetchUser.pending === "user/fetch/pending";
// fetchUser.fullfilled === "user/fetch/fullfilled";
// fetchUser.rejected === "user/fetch/rejected";
