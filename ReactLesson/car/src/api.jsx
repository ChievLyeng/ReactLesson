import axios from 'axios';

export const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID jDfFf5G1dWe-mll_l-IDsr8gI8P6tod2zVWwhkn5czo'
        },
        params:{
            query: term
        },
    });
    return response.data.results;
};