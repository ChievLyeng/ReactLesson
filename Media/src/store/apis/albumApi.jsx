import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const albuumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl : 'httm://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url:'/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET',
                    };
                }
            })
        }
    }

});

export const { useFetchAlbumsQuery } = albuumsApi;
export { albuumsApi };