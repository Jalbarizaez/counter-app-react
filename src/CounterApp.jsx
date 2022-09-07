import React from 'react'
import PropTypes  from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ () => setCounter((count) => count + 1) }>
          +1
        </button>

        <button onClick={ () => setCounter((count) => count + 1) }>
          -1
        </button>

        <button onClick={ () => setCounter( value) }>
          Reset
        </button>
    </>
  )
}
CounterApp.propTypes = {
    value: PropTypes.number
}

