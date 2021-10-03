import axios from "axios";
import  {React, useEffect} from 'react';
const basedURL = 'http://localhost:3002/';

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




const apiMiddleware =  store => next => action => {
    const {isEndpointCall, type} = action;
    if (isEndpointCall) {
        next({type});
        const { method, successType, failedType, headers } = action
        
        axios(`${basedURL}${action.endpoint}`,{
            method,
            headers
        })
        .then(response=> handleSuccess({response, type: successType, next}))
        .catch(error => handleFailed({error, type: failedType, next}));
    } else {
        next(action);
    }
};
export default apiMiddleware;