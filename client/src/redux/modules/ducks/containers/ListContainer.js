import { connect } from 'react-redux';
import ListComponent from '../components/ListComponent';
import ducks from '../';

const mapStateToProps = state => {
  return {
    ducks: state.ducks.duckList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDucks: () => dispatch(ducks.thunks.getDucks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
