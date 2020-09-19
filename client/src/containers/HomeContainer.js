import { connect } from 'react-redux';
import HomePage from '../components/pages/Home/HomePage';

const mapStateToProps = state => {
  return {
    ducks: state.ducks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSurvey: () => dispatch(ducks.thunks.getDucks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
