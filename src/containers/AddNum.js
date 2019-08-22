import { connect } from 'react-redux';
import { addNum } from '../redux/actions';
import Numeral from '../components/buttons/Numeral';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.addNum
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addNum(ownProps.value))
});

const AddNum = connect(
  mapStateToProps,
  mapDispatchToProps
)(Numeral);

export default AddNum;
