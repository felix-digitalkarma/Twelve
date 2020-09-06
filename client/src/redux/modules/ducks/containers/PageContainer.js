import { connect } from 'react-redux';
import EditComponent from '../components/EditComponent';
import ducks from '../';

const mapStateToProps = state => {
  return {
    ducks: state.ducks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDucks: () => dispatch(ducks.thunks.getDucks()),
    getDuckById: id => dispatch(ducks.thunks.getDuckById(id)),
    updateDuck: duck => dispatch(ducks.thunks.updateDuck(duck)),
    deleteDuck: id => dispatch(ducks.thunks.deleteDuck(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
