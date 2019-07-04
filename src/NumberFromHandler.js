import { connect } from 'react-redux';
import NumberForm from './NumberForm';
import {getIncrementAction, getDecrementAction} from './actions';

function mapStateToProps(state) {
  return {
    currentNumber: state.currentNumber
  };
}

function mapDispatchToProps(dispatch) {
  return {
    plusClicked: () => dispatch(getIncrementAction()),
    minusClicked: () => dispatch(getDecrementAction())
  };
}

const NumberFromHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberForm);

export default NumberFromHandler;
