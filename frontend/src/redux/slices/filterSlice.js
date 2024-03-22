import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter(state, action) {
            // I can mutate state thanks to immer library
            state.title = action.payload;
            //I can also return new state as usually
            //return {...state, title: action.payload}
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload
        },
        setOnlyFavorite: (state) => {
            state.onlyFavorite = !state.onlyFavorite
        },
        resetFilters: (state) => {
            return initialState
        }
    },
})

export const {
    setTitleFilter,
    setAuthorFilter,
    setOnlyFavorite ,
    resetFilters
    } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.onlyFavorite
export default filterSlice.reducer

