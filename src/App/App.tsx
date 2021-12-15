import React, { FC } from 'react'

import './style.scss'
import MusicPayer from '../components/MusicPlayer/MusicPayer'

const App: FC = () => {
  return (
    <div id="app">
      <MusicPayer />
    </div>
  )
}

export default App
