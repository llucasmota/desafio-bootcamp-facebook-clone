import React from 'react';

function PostItem({ post }) {
  return (
    <>
      <div className="col-2">
        <img className="img-usr" src={post.author.avatar} alt="" />
      </div>
      <div className="col-10">
        <h3>{post.author.name}</h3>
        <span>post.date</span>
        <p>{post.content}</p>
      </div>
    </>
  );
}

export default PostItem;
