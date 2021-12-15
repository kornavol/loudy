import React, { FC, useEffect, useState, useContext } from 'react'
import { StoreContext } from '../MusicPayer'

import './style.css'
import { loadSongs, likeSong } from '../../../api'

const Content: FC = () => {
  const { state, dispatch } = useContext(StoreContext)

  const [list, setList] = useState<any>([])
  const [isFavorite, setIsFavorite] = useState([])
  const [playVisibleId, setPlayVisibleId] = useState('')

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await loadSongs()
      if (result && result.status === 200) {
        console.log(result.data)

        setList(result.data)
      }
    }
    fetchSongs()
  }, [])

  console.log(list)

  return (
    <div id="content">
      <table>
        <thead>
          <tr>
            <td />
            <td>Title</td>
            <td>Artist</td>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((song: any, i) => {
              const { id, name, music_file_path, artist_name, isFavorite } = song

              console.log(2, isFavorite);
              

              return (
                <tr key={id}>
                  <td style={{ width: 75, paddingLeft: 5 }}>
                    <Favorite isFavorite={isFavorite} id={id} addToList={setList} i={i} />

                    <span style={{ marginRight: 20 }} />

                    <PlayPause
                      playing={state.playing}
                      isCurrentSong={state.id === id}
                      visible={playVisibleId === id}
                    />

                    <span style={{ marginRight: 20 }} />
                  </td>
                  <td
                    className="songName"
                    onClick={() => {
                      dispatch({ type: 'PLAY', path: music_file_path, id })
                      setPlayVisibleId(id)
                    }}
                  >
                    {name}
                  </td>
                  <td>{artist_name}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Content

const Favorite = ({ isFavorite, id, addToList, i }) => {
  // !!!
  
  const favoriteHandler = (id) => {
    likeSong(id)

    addToList((prev) => {
      // const curr = Object.assign({}, prev)
      prev[i].isFavorite = true
      return prev
    })
  }

  console.log(1, isFavorite);
  

  return isFavorite ? (
    <i className="fa fa-heart" />
  ) : (
    <i onClick={() => favoriteHandler(id)} className="fa fa-heart-o" />
  )
}

const PlayPause = ({ playing, isCurrentSong, visible }) => {
  const { dispatch } = useContext(StoreContext)
  const style: any = { visibility: visible ? 'visible' : 'hidden' }

  if (isCurrentSong && playing) {
    return (
      <i
        className="fa fa-pause"
        onClick={() => dispatch({ type: 'PAUSE' })}
        style={style}
      />
    )
  } else {
    return (
      <i
        className="fa fa-play"
        onClick={() => dispatch({ type: 'PLAY' })}
        style={style}
      />
    )
  }
}
