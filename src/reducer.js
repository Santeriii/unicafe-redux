const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action, state)
  switch (action.type) {
    case 'GOOD':
      const changedGoodState = { 
        ...state, 
        good: state.good + 1
      }
      state = changedGoodState
      return state
    case 'OK':
      const changedOkState = {
        ...state,
        ok: state.ok + 1
      }
      state = changedOkState
      return state
    case 'BAD':
      const changedBadState = {
        ...state,
        bad: state.bad + 1
      }
      state = changedBadState
      return state
    case 'ZERO':
      const resetState = {
        good: 0,
        ok: 0,
        bad: 0
      }
      state = resetState
      return state
    default: return state
  }
  
}

export default counterReducer