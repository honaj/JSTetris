import { EXAMPLE_CONSTANT } from '../constants'
import createReducer from '../createReducer'

const initialState = {
  exampleAction: 0
}

export default function exampleReducer(state = initialState, action) {
  switch(action.type) {
    // This will change the value of the exampleAction state in Redux whenever the setExampleAction is called in the app.
    
    case EXAMPLE_CONSTANT: {
      const { exampleAction } = action
      return createReducer(state, {
        exampleAction
      })
    }

    default: { return state }
  }
}