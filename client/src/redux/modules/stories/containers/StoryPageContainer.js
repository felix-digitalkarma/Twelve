import { connect } from 'react-redux';
import StoryPage from '../components/StoryPage';
import stories from '..';

const mapStateToProps = state => {
  return {
    story: state.stories.story,
    stories: state.stories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: id => dispatch(stories.thunks.getStoryById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
