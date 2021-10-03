import axios from "axios";
const basedURL = 'http://localhost:3001/';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhYi5ldG1hZGlAeWFob28uY29tIiwiaWF0IjoxNjMzMjgwMTU2fQ.OtDvnJaW9hgf4iEVZrDJlQLFhd2HSNgCRxZo5SZJpzI'


const handleSuccess = ({response, type, next})=> {
    next({
        data: response.data,
        type
    });
}
const handleFailed = ({error, type, next})=> {
    next({
        type,
        error
    });
}


const apiMiddleware = store => next => action => {
    const {isEndpointCall, type} = action;

    if (isEndpointCall) {
        next({type});
        const { method, successType, failedType } = action
        axios(`${basedURL}${action.endpoint}`,{
            method,
            headers: { Authorization: `Bearer ${token}` }

        })
        .then(response=> handleSuccess({response, type: successType, next}))
        .catch(error => handleFailed({error, type: failedType, next}));
    } else {
        next(action);
    }
};
export default apiMiddleware;