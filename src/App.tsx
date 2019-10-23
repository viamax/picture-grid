import React from 'react';

import './App.css';
import {PictureGrid} from "./pictureGrid/PictureGrid";
import {PictureGridStore} from "./pictureGrid/store/PictureGridStore";

const App: React.FC = () => {
  return (
    <div className="App">
      <PictureGrid store={new PictureGridStore()}/>
    </div>
  );
}

export default App;
