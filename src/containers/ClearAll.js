import { connect } from 'react-redux';
import { clear } from '../redux/actions';
import Clear from '../components/buttons/Clear';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.addNum
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(clear())
});

const clearAll = connect(
  mapStateToProps,
  mapDispatchToProps
)(Clear);

export default clearAll;
