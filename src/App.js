import React from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Index from './container/index'

const App = () => {
	const dispatch = useDispatch()

  const props = {
    dispatch
  }

	return (
		<Routes>
      <Route path='/*' element={<Index {...props} />}/>
		</Routes>
	)
}

export default App
