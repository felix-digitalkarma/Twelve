import React, { Component, createContext } from 'react';
import api from '../utils/api';

export const StoryContext = createContext();

class StoryContextProvider extends Component {
  state = {
    stories: []
  }

  addStory = () => {
    // post data to server
    console.log('add story');
  }

  fetchStories = async () => {
    const res = await api.get('/stories');
    this.setState({ ...this.state.stories, stories: res.data })
  }

  render() {
    return (
      <StoryContext.Provider value={{
        ...this.state,
        fetchStories: this.fetchStories,
        addStory: this.addStory
      }}>
        {this.props.children}
      </StoryContext.Provider>
    );
  }
}

export default StoryContextProvider;