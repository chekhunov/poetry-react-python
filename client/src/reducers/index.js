
import { combineReducers } from "redux";
//нужно получить редюсер 
import poetry from './poetry'
import toplist from "./toplist";
import whomeMenu from "./whomeMenu";


export default combineReducers({
    //можно передать просто переменной
    poetry,
    whomeMenu,
    toplist
})