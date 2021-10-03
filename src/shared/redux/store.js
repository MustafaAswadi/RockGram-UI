import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './middleware';
import chatReducer from '../../pages/home/components/chat/reducer/chatReducer';

const store = createStore(chatReducer, applyMiddleware(apiMiddleware));

export default store;