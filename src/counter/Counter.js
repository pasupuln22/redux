import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const value = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
console.log(count)
  return (
    <div>
      <div>
      
        <button
          aria-label="IncrementByAmount value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment 5
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {count >= 0 ?<span style={{color:"green"}}>{count}</span>:<span style={{color:"red"}}>{count}</span>}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="DecrementByAmount value"
          onClick={() => dispatch(decrementByAmount(5))}
        >
          Decrement 5
        </button>
        <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}