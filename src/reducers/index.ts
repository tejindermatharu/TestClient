import {combineReducers} from "redux";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
    common: commonReducer
});

//Type is inferred from rootReducer
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
