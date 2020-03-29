import React from 'react';


import {createStore, applyMiddleware} from "redux";
import shortcutReducer from "./reducers/shortcutReducer";
import Provider from "react-redux/es/components/Provider";
import Home from "./components/Home";
import thunk from 'redux-thunk'

function App() {
    const store = createStore(shortcutReducer,applyMiddleware(thunk));
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}

export default App;
