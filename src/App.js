import React from 'react';
import Notes from './ReduxNotes/main'
import {Container, Divider} from 'semantic-ui-react'

function App() {
  return (
    <Container >
      <Divider hidden/>
      <Notes/>
    </Container>
  );
}

export default App;
