// este ROOTreducer asocia cada estado a cada reducer y crea un solo reducer gracias a la funcion combineReducers
import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers(
    {
        //recibe el estado y el reducer que lo controla
        todosState:todosReducer,
        filterState: filterReducer
        //podriamos añadir mas estados y reducers
    }
)
