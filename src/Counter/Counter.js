import React from "react";
import CounterOutput from "./CounterOutput";
import CounterControl from "./CounterControl";
import { connect } from "react-redux";

import * as actionType from "../Store/Actions";

class Counter extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <React.Fragment>
                <h3>Counter Example with Redux</h3>
                <CounterOutput value={this.props.ctr} />
                <CounterControl clicked={this.props.onIncrement}>
                    Increment ++
                </CounterControl>
                <CounterControl clicked={this.props.onDecrement}>
                    Decrement --
                </CounterControl>
                <CounterControl clicked={this.props.onAddition}>Add 10</CounterControl>
                <CounterControl clicked={this.props.onSubtraction}>
                    Subtract 5
                </CounterControl>
                <br />
                <button
                    className="btn btn-success"
                    onClick={() => this.props.onStoreResult(this.props.ctr)}
                >
                    Store Result
                </button>

                <div className="row m-0 justify-content-center">
                    <div className="col-md-5">
                        <ul className="ctrlist">
                            {this.props.storeresult.map((ctr, ind) => {
                                return (
                                    <button
                                        type="button"
                                        key={ind}
                                        className="btn btn-warning badge badge-pill"
                                    >
                                        {ctr}{" "}
                                        <span
                                            className="badge badge-pill badge-dark"
                                            onClick={() => {
                                                this.props.onDeleteResult(ind);
                                            }}
                                        >
                      x
                    </span>
                                    </button>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStatetoProps = state => {
    return {
        ctr: state.ctr.counter,
        storeresult: state.result.results
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: actionType.INCREMENT }),
        onDecrement: () => dispatch({ type: actionType.DECREMENT }),
        onAddition: () => dispatch({ type: actionType.ADD, value: 10 }),
        onSubtraction: () => dispatch({ type: actionType.SUBTRACT, value: 5 }),
        onStoreResult: currentCtr =>
            dispatch({ type: actionType.STORE_RESULT, resultCtr: currentCtr }),
        onDeleteResult: currItem =>
            dispatch({ type: actionType.DELETE_RESULT, currKey: currItem })
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(Counter);
