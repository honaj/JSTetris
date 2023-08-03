/*
* This is an example component for demonstrating state actions in Redux
* Remove this if you like :)
*/

import { setExampleAction } from 'reduxActions'
import { connect } from 'react-redux'

const ExampleState = (props) => {
  const { exampleAction, setExampleAction } = props

  const handleClick = () => {
    if (exampleAction === 0) {
      setExampleAction(1)
    } else {
      setExampleAction(0)
    }
  }

  return (
    <div className='flex w-screen h-screen justify-center items-center bg-[#087C7F]'>
      <div className='flex flex-col w-[500px] h-[300px] bg-[#1837A6] border-4 border-white rounded-lg justify-around text-center text-white shadow-xl'>
        <div>
          <h1 className='font-bold text-xl'>This shows the current state of "<span className='italic font-normal'>exampleAction</span>"</h1>
          <h3 className='text-lg'>Click the button to change state.</h3>
        </div>
        <h1 className='text-5xl font-bold'>{exampleAction}</h1>
        <div className='flex w-full h-auto justify-center'>
          <button className='w-1/3 p-2 bg-white border-4 border-black rounded-lg text-black text-lg font-bold shadow-xl'
            onClick={() => handleClick()}>Click Me!</button>
        </div>
        <h3 className='text-lg'>Check your redux inspector to se the change.</h3>
      </div>
    </div>
  )
}

export default connect(state => ({
  exampleAction: state.ExampleReducer.exampleAction
}), { setExampleAction })(ExampleState)