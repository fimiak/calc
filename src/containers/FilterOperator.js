import { connect } from 'react-redux';
import { setOperatorFilter } from '../redux/actions';
import Operator from '../components/buttons/Operator';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setOperatorFilter,
  stored: state.value,
  value: state.value
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setOperatorFilter(ownProps.filter))
});

const FilterOperator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Operator);

export default FilterOperator;
