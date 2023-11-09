import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const songsSlice = createSlice ({
    name : 'song',
    initialState: [],
    reducers: {
        addSong(state,action) {
            // the state her is just an array
            state.push(action.payload);
        },
        removeSong(state,action) {
            const index = state.indexOf(action.payload);
            
            // this function is use to delete element from array
            state.splice(index,1); 
            
        },
        
    },
    extraReducers(builder){
        // moviesSlice.actions.reset =  'movie/reset'
        builder.addCase(reset,(state,action) => {
            return [];
        });
    }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;

// console.log(songsSlice.actions.addSong("New Song!!"))

// const startingState = store.getState();
// console.log(JSON.stringify(startingState))

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song!!!'
// })

// another way to dispatch state
// store.dispatch(
//     songsSlice.actions.addSong("some Song!!")
// )

// store.dispatch(
//     songsSlice.actions.addSong("some Song2!!")
// )


// const finalState = store.getState();
// console.log(JSON.stringify(finalState))