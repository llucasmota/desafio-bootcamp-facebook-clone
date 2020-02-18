import React from 'react';
import Header from './components/Header';
import PostHeader from './components/PostHeader';
import './App.css';
import Post from './components/PostHeader';

function App() {
  return (
    <>
      <section className="grid">
        <Header />
      </section>
      <section id="posts-facebook">
        <PostHeader />
      </section>
    </>
  );
}

export default App;
