import React, { Component } from "react";
import Counter from "./Counter/Counter";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
            <Counter />
            </div>
    );
    }
}

export default App;
