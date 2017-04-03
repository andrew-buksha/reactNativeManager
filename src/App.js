/**
 * Created by alexandr on 30.03.17.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDQY9IWfQMXYGAKkZorrlGFjn4AzD1xkR8',
            authDomain: 'manager-c48b8.firebaseapp.com',
            databaseURL: 'https://manager-c48b8.firebaseio.com',
            storageBucket: 'manager-c48b8.appspot.com',
            messagingSenderId: '40457463770'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}