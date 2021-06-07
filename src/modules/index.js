import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import listBookReducer from "../store/reducers/books";

const createRootReducer = (history) => 
    combineReducers({
        router: connectRouter(history),
        listBookReducer: listBookReducer
    });

export default createRootReducer;