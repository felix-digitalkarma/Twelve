import { connect } from 'react-redux';
import EditComponent from '../components/EditComponent';
import ducks from '../';

const mapStateToProps = state => {
  return {
    ducks: state.ducks,
    duck: state.ducks.duck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDuckById: id => dispatch(ducks.thunks.getDuckById(id)),
    updateDuck: duck => dispatch(ducks.thunks.updateDuck(duck)),
    deleteDuck: id => dispatch(ducks.thunks.deleteDuck(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
