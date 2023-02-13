import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../modules/counter"

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        Redux Counter
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
    )
  }