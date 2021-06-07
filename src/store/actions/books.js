import axios from "axios";
import { getAllBookApi } from "../../api";
import { GET_BOOKS, GET_BOOKS_FAILED, GET_BOOKS_SUCCESS } from './actionTypes'

export const getAllBook = () => {
    return (dispatch) => {
        dispatch({
            type: GET_BOOKS
        });
        axios
            .get(getAllBookApi)
            .then((response) => {
                dispatch({
                    type: GET_BOOKS_SUCCESS,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_BOOKS_FAILED,
                    error: error
                });
            })
    }
}