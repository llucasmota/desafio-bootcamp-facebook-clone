import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <section className="grid" id="posts-facebook">
        <Post />
      </section>
    </>
  );
}

export default App;
