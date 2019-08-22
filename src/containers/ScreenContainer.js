import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapStateToProps = state => ({
  value: state.value[0] !== 0 ? state.value[0] : state.value[1]
});

const ScreenContainer = connect(mapStateToProps)(Screen);

export default ScreenContainer;
