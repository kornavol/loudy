import React, { FC, useContext } from 'react'
import './style.scss'
import { StoreContext } from '../MusicPayer'

interface Iprops {
  list: any
}

const Playbar: FC<Iprops> = ({ list }) => {
  const { state, dispatch } = useContext(StoreContext)
  const {index, id} = state

  if (!id) {
    return <div className="playbar" />
  }

  
  console.log('3 index', index)

  const song = list[index]
  
  console.log(3, song);
  

  const playOrPause = () =>
    state.playing ? dispatch({ type: 'PAUSE' }) : dispatch({ type: 'PLAY' })

  return (
    <div id="playbar">
      <div className="left">
        {id && (
          <>
            <div>{song.name}</div>

            <div className="artist">{song.artist_name}</div>
          </>
         )} 
      </div>

      <div className="middle">
        <div className="play-pause-circle" onClick={playOrPause}>
          <i
            className={`fa fa-${state.playing ? 'pause' : 'play'}`}
            style={{ transform: state.playing ? '' : 'translateX(1.5px)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Playbar
