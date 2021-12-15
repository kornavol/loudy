import './style.scss'

import React, {
  FC,
  createContext,
  useReducer,
  useRef,
  useEffect,
  useState
} from 'react'

import Content from './Content/Content'
import Playbar from './Playbar/Playbar'

import { loadSongs } from '../../api'

import { initialState, reducer } from '../../state'

export const StoreContext = createContext(null)

const MusicPayer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [list, setList] = useState<any>([])

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await loadSongs()
      if (result && result.status === 200) {
        // console.log(result.data)

        setList(result.data)
      }
    }
    fetchSongs()
  }, [])

  const audioRef = useRef<HTMLAudioElement>()

  useEffect(() => {
    if (state.playing) {
      audioRef.current.load()
      audioRef.current.play()
    } else audioRef.current.pause()
  }, [state.playing, state.music_file_path])

  useEffect(() => {
    audioRef.current.volume = state.volume
  }, [state.volume])

  const song = state.music_file_path

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div id="musicPlayer">
        <Content list={list} />
        <Playbar list={list} />
      </div>

      <audio
        ref={audioRef}
        src={song && song}
        onLoadedMetadata={() =>
          dispatch({
            type: 'SET_DURATION',
            duration: audioRef.current.duration
          })
        }
        onTimeUpdate={(e: any) =>
          dispatch({ type: 'SET_CURRENT_TIME', time: e.target.currentTime })
        }
      />
    </StoreContext.Provider>
  )
}

export default MusicPayer
