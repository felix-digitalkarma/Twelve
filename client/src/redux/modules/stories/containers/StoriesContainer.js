import { connect } from 'react-redux';
import StoriesComponent from '../components/StoriesComponent';
import stories from '../';

const mapStateToProps = state => {
  return {
    stories: state.stories.storyList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStories: () => dispatch(stories.thunks.getStories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoriesComponent);
