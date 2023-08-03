import { EXAMPLE_CONSTANT } from './constants'

export function setExampleAction(exampleAction) {
  return {
    type: EXAMPLE_CONSTANT,
    exampleAction
  }
}