import { createStore } from 'redux';
import { pizzaReducer } from './reducers/globalReducer';

const store = createStore(pizzaReducer);

export default store;
