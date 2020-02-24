import React from 'react';
import Header from './components/Header';
import PostHeader from './components/PostHeader';
import './App.css';

function App() {
  return (
    <>
      <section className="grid">
        <Header />
      </section>
      <section className="grid" id="posts-facebook">
        <PostHeader />
      </section>
    </>
  );
}

export default App;
