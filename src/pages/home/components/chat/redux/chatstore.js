import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from '../../../../../shared/redux/middleware';
import chatReducer from '../reducer/chatReducer';



const chatstore = createStore(chatReducer, applyMiddleware(apiMiddleware));

export default chatstore;