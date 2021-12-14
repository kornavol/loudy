import './style.css'

import React, {
  FC,
  createContext,
  useReducer,
  useRef,
  useEffect
} from 'react'

import Content from './Content/Content'
import Playbar from './Playbar/Playbar'

import { initialState, reducer } from '../../state'

export const StoreContext = createContext(null)

interface IInitialState {
  music_file_path: string
  playing: boolean
}

const MusicPayer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(1, state);
  

  const audioRef = useRef<HTMLAudioElement>()

  useEffect(() => {
    if (state.playing) {
      audioRef.current.load()
      audioRef.current.play()
    } else audioRef.current.pause()
  }, [state.playing, state.music_file_path])

  const song = state.music_file_path


  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div id="musicPlayer">
        <Content />
        <Playbar />
      </div>

      <audio
          ref={audioRef}
          src={song && song}
        />

    </StoreContext.Provider>
  )
}

export default MusicPayer