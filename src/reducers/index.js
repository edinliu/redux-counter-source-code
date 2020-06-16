const initialState = 0

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