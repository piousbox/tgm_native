import { combineReducers } from 'redux'

const profileReducer = (state={name:'Your Name'}}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  profile: profileReducer,
})
