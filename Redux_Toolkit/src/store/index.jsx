import { configureStore, createSlice } from '@reduxjs/toolkit';


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
    }
});

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
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});






// console.log(songsSlice.actions.addSong("New Song!!"))

export { store };
export const { addSong,removeSong } = songsSlice.actions; // creator function
export const { addMovie,removeMovie } = moviesSlice.actions



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