import { Type } from "../actions/actionType";

const initState ={
    error: null,
    chats: [],
    fetching: false
}

export default function chatReducer(state =initState, action) {
    switch (action.type) {
        case Type.FETCH_CHATS:
            return{
                ...state,
                fetching: true
            };
        
        case Type.FETCH_CHATS_SUCCESS:
            return {
                ...state,
                fetching: true,
                chats: action.data
            };

        case Type.FETCH_CHATS_FAILED:
            return {
                ...state,
                fetching: false,
                error: action.error
            };
            
    
        default:
            return state;
    }
}