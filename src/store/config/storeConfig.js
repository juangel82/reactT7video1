//contenido del store de la app. Ademas le asignamos el reducer (en este caso el rootreducer)

import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "../reducers/rootReducer";

//creamos el store y lo devolvemos
export const createAppStore=()=>{
    let store = createStore(rootReducer,composeWithDevTools());
    return store;
}