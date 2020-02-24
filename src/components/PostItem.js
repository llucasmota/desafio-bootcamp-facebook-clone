import React from 'react';

function PostItem({ post }) {
  return (
    <>
      <div id={post.id} className="row-post">
        <div className="col-1">
          <figure className="figure-usr">
            <img className="img-usr" src={post.author.avatar} alt="" />
          </figure>
        </div>
        <div className="col-11">
          <h3>{post.author.name}</h3>
          <span>{post.date}</span>
        </div>
        <div className="col-12">
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
}

export default PostItem;
