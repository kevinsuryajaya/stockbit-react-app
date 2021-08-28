const globalState = {
    watchlist: []
  }
  
  const rootReducer = (state = globalState, action) => {
    
    if (action.type === 'ADD_WATCHLIST') {
      return {
        ...state,
        watchlist: [...state.watchlist, action.movie]
      }
    }
    return state
  }

  export default rootReducer;