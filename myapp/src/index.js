import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../src/reducers/rootReducer'
import thunk from 'redux-thunk';
import {ReduxFirestoreProvider, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer, 
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  //passing config in store enhancers so that getFirebase and getFirestore in projectActions will know where to connect to
   ReduxFirestoreProvider(fbConfig),
   reactReduxFirebase(fbConfig)
)
);
//applymiddleware helps enhance the store for additional functionality
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

//Provider helps bind redux with react app
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
