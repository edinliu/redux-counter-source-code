const initialState = 33118844

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCRESE":
      return state + 1
    case "DECRESE":
      return state - 1
    default:
      return state
  }
}