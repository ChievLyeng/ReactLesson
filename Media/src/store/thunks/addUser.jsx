import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import{faker} from '@faker-js/faker'

axios.defaults.withCredentials = true;

const firstName = 'Onana';
const lastName = "Onana";
const email = "Onana@gmail.com";
const phoneNumber = "0119999999";
const birthDate = "2001-10-10";
const gender = "Male";
const role = 'admin';
const password = "@Lyeng12345";

const addUser = createAsyncThunk('user/add', async () => {
    try{
        const response = await axios.post('http://localhost:3001/api/v1/users/register',{
        firstName,
        lastName,
        email,
        phoneNumber,
        birthDate,
        gender,
        role,
        password
    })
    return response.data
    }catch(err){
        console.log(err)
    }
})

export { addUser };