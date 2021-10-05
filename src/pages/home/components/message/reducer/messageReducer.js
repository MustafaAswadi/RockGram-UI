import { Type } from "../actions/actionType";

const initState ={
    error: null,
    chats: [],
    fetching: false
}

export default function messageReducer(state = initState, action) {
    switch (action.type) {
        case Type.FETCH_MESSAGE:
            return{
                ...state,
                fetching: true
            };
        
        case Type.FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                fetching: true,
                messages: action.data
            };

        case Type.FETCH_MESSAGE_FAILED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };
            
    
        default:
            return state;
    }
}