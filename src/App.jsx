import React from 'react'
import Sidebar from './comonents/Sidebar'
import Player from './comonents/Player'
import Display from './comonents/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display />
      </div>
      <Player/>
    </div>
  )
}

export default App
