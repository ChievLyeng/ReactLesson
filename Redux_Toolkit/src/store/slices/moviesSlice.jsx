import { createSlice} from '@reduxjs/toolkit';
import { reset } from "../action";

const moviesSlice = createSlice ({
    name : 'movie',
    initialState: [],
    reducers: {
        addMovie(state,action) {
            // the state her is just an array
            state.push(action.payload);
        },
        removeMovie(state,action) {
            const index = state.indexOf(action.payload);
            
            // this function is use to delete element from array
            state.splice(index,1); 
            
        },
        // reset(state,action) {
        //     return [];
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset,(state,action) => {
            return []
        })
    }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;