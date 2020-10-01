import React, { createContext } from 'react';

import api from '../utils/api';
import useLocalStorage from '../utils/useLocalStorage';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

  const [stories, setStories] = useLocalStorage('stories', []);

  const fetchStories = async () => {
    const res = await api.get('/stories');
    setStories({ stories: res.data });
  }

  return (
    <GlobalContext.Provider value={{
      stories, fetchStories
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;