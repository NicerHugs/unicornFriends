import { createStore } from 'redux';

import unicornApp from './reducers/reducers';

let store = createStore(unicornApp);

export default store;
