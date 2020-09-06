import { connect } from 'react-redux';
import AddComponent from '../components/AddComponent';
import ducks from '../';

const mapStateToProps = state => {
  return {
    ducks: state.ducks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDuck: duck => dispatch(ducks.thunks.addDuck(duck)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
