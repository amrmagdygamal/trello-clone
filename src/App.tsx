import React from 'react';
import { Column } from './Column';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';


const App = () => {
  return (
    <AppContainer>
      <Column text='Todo:' />
      <AddNewItem toggleButtonText='+ Add another list' onAdd={(e) => console.log(e)} />
    </AppContainer>
      
  );
}

export default App;
