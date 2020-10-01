import React, { useReducer, createContext } from 'react';

/* ACTIONS/REDUCERS */
import * as ACTIONS from '../store/actions/actions';
import * as StoryReducer from '../store/reducers/story_reducer';
import * as PlainReducer from '../store/reducers/plain_reducer';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

  const [stories, dispatchStory] = useReducer(StoryReducer.StoryReducer, StoryReducer.initialState);

  const [statePlain, dispatchPlain] = useReducer(PlainReducer.PlainReducer, PlainReducer.initialState);


  const dispatchContextTrue = () => {
    dispatchPlain(ACTIONS.SUCCESS);
  }

  const dispatchContextFalse = () => {
    dispatchPlain(ACTIONS.FAILURE);
  }

  const addStory = () => {
    dispatchStory(ACTIONS.ADD_STORY)
  }

  return (
    <GlobalContext.Provider value={{
      addStory,
      stories,
      stateProp1: statePlain.stateprop1,
      stateProp2: statePlain.stateprop2,
      dispatchContextFalse,
      dispatchContextTrue
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;