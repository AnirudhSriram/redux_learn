import React, { Component } from 'react';
import {connect} from 'react-redux' ;
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as  actions from '../../store/actions';
class Counter extends Component {

    render () {
        console.log(this.props)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={()=>this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={()=>this.props.onSubCounter(5)}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                {this.props.results.map(result =>
                <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>)}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        results : state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type:actions.INCREMENT}),
        onDecrementCounter : () => dispatch({type:actions.DECREMENT}),
        onAddCounter : (val) => dispatch({type:actions.ADD,value:val}),
        onSubCounter : (val) => dispatch({type:actions.SUB,value:val}),
        onStoreResult : (res) => dispatch({type:actions.STORE_RESULT,result:res}),
        onDeleteResult : (id) => dispatch({type:actions.DELETE_RESULT,id : id})

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);