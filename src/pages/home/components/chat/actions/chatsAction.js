import { Type } from "./actionType";

export const fetchChats = () => {
    return {
        type: Type.FETCH_CHATS,
        successType: Type.FETCH_CHATS_SUCCESS,
        failedType: Type.FETCH_CHATS_FAILED,
        isEndpointCall: true,
        endpoint : 'chat/personal/',
        method: 'GET',
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    }
}