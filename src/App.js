import React from 'react';
import Header from './components/Header';
import PostBody from './components/PostBody';
import './App.css';
import Post from './components/PostBody';

function App() {
  return (
    <>
      <section className="grid">
        <Header />
      </section>
      <PostBody />
    </>
  );
}

export default App;
