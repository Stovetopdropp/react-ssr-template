import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({increment, incrementAsync, decrement, counter}) => (
    <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementAsync}>Increment async</button>
    </p>
)

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}

export default Counter
