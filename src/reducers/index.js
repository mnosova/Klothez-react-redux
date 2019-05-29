import {combineReducers} from 'redux';
import questionReducer from "./questionReducer";
import headerMenuReducer from "./headerMenuReducer";
const AllReducers = combineReducers({

    questionsList: questionReducer,
    headerMenu: headerMenuReducer


});

export default AllReducers;