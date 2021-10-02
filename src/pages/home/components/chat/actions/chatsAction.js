import { Type } from "./actionType";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhYi5ldG1hZGlAeWFob28uY29tIiwiaWF0IjoxNjMzMTczMzIyfQ.4d1L18_kapQY000pcuqMAwKXWhJJBfx_4Dymjg7YYo0'
export const fetchChats = () => {
    return {
        type: Type.FETCH_CHATS,
        successType: Type.FETCH_CHATS_SUCCESS,
        failedType: Type.FETCH_CHATS_FAILED,
        isEndpointCall: true,
        endpoint : 'chat/personal/',
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    }
}