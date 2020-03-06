import React from 'react';

function PostItem({ post }) {
  return (
    <>
      <PostHeader key={post.id} post={post} />
    </>
  );
}
function PostHeader({ post }) {
  return (
    <div className="row-post">
      <div className="col-1 img-post">
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
      <hr />
    </div>
  );
}
function PostComment({ comments }) {
  return <form action=""></form>;
}

export default PostItem;
