import React, { createContext, useReducer, useEffect } from 'react';
import StoryReducer from '../store/reducers/story_reducer';
import api from '../utils/api';

// actions
import * as ACTION_TYPES from '../store/actions/actions';

export const StoryContext = createContext();

const StoryContextProvider = (props) => {

  const [stories, dispatch] = useReducer(StoryReducer, [], () => {
    const storyData = localStorage.getItem("stories");
    return storyData ? JSON.parse(storyData) : [];
  })

  const fetchStories = async () => {
    const res = await api.get('/stories');
    dispatch({ type: ACTION_TYPES.SUCCESS, stories: res.data });
  }

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories])

  return (
    <StoryContext.Provider value={{ stories, dispatch, fetchStories }}>
      {props.children}
    </StoryContext.Provider>
  );

}

export default StoryContextProvider;