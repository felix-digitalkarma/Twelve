import { connect } from 'react-redux';
import StoryList from '../components/StoryList';
import stories from '..';
import modal from '../../modal';

const mapStateToProps = state => {
  return {
    auth: state.auth,
    modal: state.modal,
    stories: state.stories.storyList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch(modal.actions.show()),
    hideModal: () => dispatch(modal.actions.hide()),
    addStory: story => dispatch(stories.thunks.addStory(story)),
    getStories: () => dispatch(stories.thunks.getStories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);
