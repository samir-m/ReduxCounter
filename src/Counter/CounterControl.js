import React from "react";
const CounterControl = props => {
    return (
        <React.Fragment>
            <button className="btn btn-dark" onClick={props.clicked}>
                {props.children}
            </button>
        </React.Fragment>
    );
};
export default CounterControl;
