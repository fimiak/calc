import { connect } from 'react-redux';
import { evaluator } from '../redux/actions';
import Evaluator from '../components/buttons/Evaluator';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.addNum
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(evaluator())
});

const equals = connect(
  mapStateToProps,
  mapDispatchToProps
)(Evaluator);

export default equals;
