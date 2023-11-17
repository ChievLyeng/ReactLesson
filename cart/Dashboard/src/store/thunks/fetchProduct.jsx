import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_PRODUCT =
  "http://localhost:3000/products/get-all-products";

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const response = await axios.get(GET_ALL_PRODUCT);

  return response.data;
  
});
console.log("fetch :",fetchProducts)

// fetchProducts.pending === "product/fetch/pending";
// fetchProducts.fullfilled === "product/fetch/fullfilled";
// fetchProducts.rejected === "product/fetch/rejected";