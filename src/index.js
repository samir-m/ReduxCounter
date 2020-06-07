import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";

import { Provider } from "react-redux";
import counterReducer from "./Store/Reducers/Counter";
import resultReducer from "./Store/Reducers/Result";

const rootReduces = combineReducers({
    ctr: counterReducer,
    result: resultReducer
});
const store = createStore(rootReduces);

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>,
document.getElementById("app")
);
