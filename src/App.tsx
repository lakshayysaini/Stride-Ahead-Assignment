import React from 'react';
import Profiles from './components/Profiles/Profiles';
import NewProfile from './components/NewProfile/NewProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Profiles</h1>
      <Profiles />
      <h1>Add a new profile</h1>
      <NewProfile />
    </div>
  );
}

export default App;
