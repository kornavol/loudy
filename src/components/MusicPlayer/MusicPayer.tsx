import './style.css'

import React, {
  FC,
  createContext,
  useReducer
} from 'react'

import Content from './Content/Content'
import Playbar from './Playbar/Playbar'

import { initialState, reducer } from '../../state'

export const StoreContext = createContext(null)

const MusicPayer: FC = () => {
  const [state, dispatch] = useReducer<any>(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div id="musicPlayer">
        <Content />
        <Playbar />
      </div>
    </StoreContext.Provider>
  )
}

export default MusicPayer
 