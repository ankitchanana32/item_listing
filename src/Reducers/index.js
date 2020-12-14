import {
    combineReducers
} from "redux";
import productReducer from "../Reducers/ProductReducer";
const rootReducer = combineReducers({
    productReducer: productReducer,

})
export default rootReducer;