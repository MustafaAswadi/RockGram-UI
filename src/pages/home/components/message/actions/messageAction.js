import { Type } from "./actionType";

export const fetchMessages = (chatId) => {
    return {
        type: Type.FETCH_MESSAGE,
        successType: Type.FETCH_MESSAGE_SUCCESS,
        failedType: Type.FETCH_MESSAGE_FAILED,
        isEndpointCall: true,
        endpoint : `message/${chatId}`,
        method: 'GET',
    }
}