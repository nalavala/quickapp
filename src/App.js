import React from 'react';


import {createStore} from "redux";
import shortcutReducer from "./reducers/shortcutReducer";
import Provider from "react-redux/es/components/Provider";
import Home from "./components/Home";


function App() {
    const store = createStore(shortcutReducer)
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}

export default App;
