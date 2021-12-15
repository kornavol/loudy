import React, { FC, useContext } from 'react'
import './style.scss'
import { StoreContext } from '../MusicPayer'

import { formatTime, handleProgress } from '../../../utils'

interface Iprops {
  list: any[]
}

const Playbar: FC<Iprops> = ({ list }) => {
  const { state, dispatch } = useContext(StoreContext)
  const { index, id } = state

  if (!id) {
    return <div className="playbar" />
  }

  const song = list[index]
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

        <div style={{ marginTop: 2.5 }}>
          <span>{formatTime(Math.floor(state.currentTime))}</span>

          <div className="progress-container">
            <div
              className="bar"
              style={{
                width: handleProgress(state.currentTime, state.duration)
              }}
            />
          </div>

          <span>{formatTime(state.duration)}</span>
        </div>
      </div>

      <div className="right">
        <i className="fa fa-volume-up" />

        <input
          type="range"
          min="0"
          max="1"
          value={state.volume}
          step="0.01"
          style={{ marginLeft: 10 }}
          onChange={(e) =>
            dispatch({ type: 'SET_VOLUME', volume: e.target.value })
          }
        />
      </div>
    </div>
  )
}

export default Playbar
