import { combineReducers, } from 'redux'

import Const from './Const'

const profileReducer = (state={name:'Your Name 2'}, action) => {
  switch (action.type) {
    case Const.profileAction:
      console.warn('+++ profileReducer:', action, action.user)
      return action.user
    default:
      return state
  }
}

export default combineReducers({
  profile: profileReducer,
})
