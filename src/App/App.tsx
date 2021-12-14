import React, { FC, memo } from 'react'

import './App.css'
import MusicPayer from '../components/MusicPlayer/MusicPayer'

const App: FC = () => {
  return (
    <div id="app">
      <MusicPayer />
    </div>
  )
}

export default memo(App)
