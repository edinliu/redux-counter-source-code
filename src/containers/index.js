import { connect } from 'react-redux'
import Counter from '../components/Counter'

export default connect(
  (state) => ({ value: state }),
  (dispatch) => ({
    increseMethod: () => dispatch({ type: "INCRESE" }),
    decreseMethod: () => dispatch({ type: "DECRESE" })
  }),
)(Counter)