import {ADD_TODO,TOGGLE_TODO} from '../actions/actions'

// estado inicial: una lista vacia
let initialState = [];

// recibe el estado (el inicial) y una accion. Y devuelve un estado diferente. Cuando despacho una acción esta fucnión la escuchara
export const todosReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,  // esto devuelve el estado que habia. Además añadiremos uno nuevo con el id y text que hemos recibido
                {
                    id:action.payload.id,
                    text:action.payload.text,
                    completed:false
                }
            ]
            case TOGGLE_TODO:
                return state.map((todo)=>   //esto busca por id
                (todo.id === action.action.payload.id)  //si lo encuentra 
                ?
                {
                    ...todo,
                    completed:!todo.completed     //cambiamos el estado
                }
                :
                todo
                 )
                 default:   // importante devolver el estado pq si este reduce no lo coge lo debe coger otro para escuchar las acciones
                     return state;

    }

}