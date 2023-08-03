import { setExampleAction } from 'reduxActions'

import React from 'react'
import reducer from '../redux/reducers/reducer'
import { connect } from 'react-redux'

import ExampleState from '../components/exampleState'

const Index = (props) => {

  return (
    <div className='flex w-screen h-screen justify-center items-center bg-[#087C7F]'>
      {/* Example demonstration */}
      <ExampleState {...props}/> 
    </div>
  )
}

export const Reducer = reducer
export default connect(state => ({
  exampleAction: state.ExampleReducer.exampleAction
}), { setExampleAction })(Index)