import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




/**
 * createAsyncThunk is a utility that simplifies handling asynchronous logic in redux apps,
 * especially when dealing with api calls and other sideEffects
 * it manages loading, success, and error states in your reducers with less boilerplate
 */
export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (page: number) => {
                            const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
                            return res.data;
                        });


const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        page: 1,
        totalPages: 0,
        status: 'idle',
        error: null,
    } as any,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCharacters.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.items = action.payload.results
            state.totalPages = action.payload.info.pages
        })
        .addCase(fetchCharacters.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
});

export const { setPage } = charactersSlice.actions;
export default charactersSlice.reducer;