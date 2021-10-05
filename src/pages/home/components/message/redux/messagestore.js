import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from '../../../../../shared/redux/middleware';
import messageReducer from '../reducer/messageReducer';



const messagestore = createStore(messageReducer, applyMiddleware(apiMiddleware));

export default messagestore;