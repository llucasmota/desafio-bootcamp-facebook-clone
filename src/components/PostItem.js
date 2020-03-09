import React from 'react';
import Comment from './Comment';
function PostItem({ post }) {
  console.log(post);
  return (
    <>
      <PostHeader key={post.id} post={post} />
      {post.comments.map(comment => {
        <Comment key={comment.id} comment={comment} />;
      })}
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
        <p>dsadas</p>
      </div>
      <hr />
    </div>
  );
}

export default PostItem;
