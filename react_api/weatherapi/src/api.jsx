import axios from 'react';

export const weatherApi = async () =>{

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?appid=2f43c83c40b4e2ddc001d7b04ec46eab&q=Phnom Penh');

    console.log(response);

    return response;
};


// http://api.openweathermap.org/data/2.5/weather?id=524901&appid=f05eee3dbd6c8903c03323fa437babd9

// https://[api.openweathermap.org/data/2.5/weather?q=&appid=2f43c83c40b4e2ddc001d7b04ec46eab