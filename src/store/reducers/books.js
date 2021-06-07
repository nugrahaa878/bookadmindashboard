import { GET_BOOKS, GET_BOOKS_FAILED, GET_BOOKS_SUCCESS, GET_COUNTRIES, GET_COUNTRIES_FAILED, GET_COUNTRIES_SUCCESS } from "../actions/actionTypes"
import { updateObject } from '../utility'

const initialState = {
    isLoading: false,
    listBook: {},
    countries: {},
    error: null
}

const listBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return updateObject(state, {isLoading: true})
        case GET_BOOKS_SUCCESS:
            return updateObject(state, {isLoading: false, listBook: action.payload})
        case GET_BOOKS_FAILED:
            return updateObject(state, {isLoading: false, error: action.error})
        case GET_COUNTRIES:
            return updateObject(state, {isLoading: true})
        case GET_COUNTRIES_SUCCESS:
            return updateObject(state, {isLoading: false, countries: action.payload})
        case GET_COUNTRIES_FAILED:
            return updateObject(state, {isLoading: false, error: action.error})
        default:
            return state
    }
}

export default listBookReducer;