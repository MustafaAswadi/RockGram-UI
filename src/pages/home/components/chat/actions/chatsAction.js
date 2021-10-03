import { Type } from "./actionType";

export const fetchPersonalChats = () => {
    return {
        type: Type.FETCH_CHATS,
        successType: Type.FETCH_CHATS_SUCCESS,
        failedType: Type.FETCH_CHATS_FAILED,
        isEndpointCall: true,
        endpoint : 'chat/personal',
        method: 'GET',
    }
}

export const fetchGroupChats = () => {
    return {
        type: Type.FETCH_CHATS,
        successType: Type.FETCH_CHATS_SUCCESS,
        failedType: Type.FETCH_CHATS_FAILED,
        isEndpointCall: true,
        endpoint : 'chat/group',
        method: 'GET',
    }
}

export const fetchOneChats = (id) => {
    return {
        type: Type.FETCH_CHATS,
        successType: Type.FETCH_CHATS_SUCCESS,
        failedType: Type.FETCH_CHATS_FAILED,
        isEndpointCall: true,
        endpoint : `chat/c/${id}`,
        method: 'GET',

    }
}