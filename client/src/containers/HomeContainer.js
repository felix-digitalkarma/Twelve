import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import ducks from '../redux/modules/ducks';

const mapStateToProps = state => {
  return {
    ducks: state.ducks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDucks: () => dispatch(ducks.thunks.getDucks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
