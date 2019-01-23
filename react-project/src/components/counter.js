import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends Component {

    static propTypes = {
        number: PropTypes.number,
        increment: PropTypes.func
    }

    render(){
        console.log('this.props-al', this.props);
        const { number, increment } = this.props
        return (
            <div>
                <h2>{number}</h2>
                <button onClick={this.handleIncrement}>increment</button>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }
}

const mapStateToProps = (storeState) => ({
    number: storeState.counter
})

export default connect(mapStateToProps)(Counter)