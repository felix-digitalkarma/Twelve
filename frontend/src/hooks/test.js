import React, { useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../contexts/GlobalContextProvider';


const Wrapper = styled.div`
padding: 20px;
`;

const Test = () => {
  const { stateProp1, dispatchContextTrue, dispatchContextFalse } = useContext(GlobalContext);
  return (
    <Wrapper>
      <h1>Test Page</h1>
      <p>Since the routes are wrapped in the global context provider, when we useContext, we have access to its state.</p>
      <h3>Toggle State using Dispatch events.</h3>
      <p>StateProp1: {`${stateProp1}`}</p>
      <button onClick={() => dispatchContextTrue()}>True</button>{' '}
      <button onClick={() => dispatchContextFalse()}>False</button>
    </Wrapper>
  );
}

export default Test;