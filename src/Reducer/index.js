import {updatecart,updatelist,updateUser} from "./UpdateCart";
import { combineReducers } from "redux";

const rootReducer= combineReducers({
    updatecart,
    updatelist,
    updateUser
})
export default rootReducer;