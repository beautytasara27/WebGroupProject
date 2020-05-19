import authReducer from '../reducers/authReducer';
import projectReducer from '../reducers/projectReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer, } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, //syncing db to redux , data stored on firestore state obj
    firebase : firebaseReducer
}
);
export default rootReducer;