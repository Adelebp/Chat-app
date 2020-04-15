import React from 'react';
import './App.css';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact
        name="Zachary Hawkins"
        avatar="https://randomuser.me/api/portraits/men/33.jpg"
        online={true}
        />

      <Contact
        name="Randy Wade"
        avatar="https://randomuser.me/api/portraits/men/71.jpg"
        online={false}
        />

      <Contact
        name="Catherine Hill"
        avatar="https://randomuser.me/api/portraits/women/87.jpg"
        online={true}
        />

    </div>
  );
}

export default App;