import React, { FC, useEffect, useState, useContext  } from 'react'
import { StoreContext } from '../MusicPayer'

import './style.css'
import { loadSongs } from '../../../api'

const Content: FC = () => {
  const { state, dispatch } = useContext(StoreContext)
  
  const [list, setList] = useState<any>([])
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await loadSongs()
      if (result && result.status === 200) {
        console.log(result.data);
        
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
            list.map((song: any) => {
              const { id, name, music_file_path, artist_name } = song
              
              return (
                <tr key={id}>
                  <td>
                    <Favorite isFavorite={isFavorite} />
                  </td>
                  <td
                  className='songName'
                   onClick={()=>dispatch({type:'PLAY', path:music_file_path})}>{name}</td>
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

const Favorite = ({ isFavorite }) => {
  return isFavorite ? (
    <i className="fa fa-heart" />
  ) : (
    <i className="fa fa-heart-o" />
  )
}
