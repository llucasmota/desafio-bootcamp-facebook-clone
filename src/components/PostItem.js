import React from 'react';

function PostItem({ post }) {
  const { comments } = post;
  console.log(comments);
  return (
    <div className="row-post">
      <PostHeader key={post.id} post={post} />
      {post.comments.map(comment => (
        <Comment key={comment.id} id={comment.id} comment={comment} />
      ))}
    </div>
  );
}
function PostHeader({ post }) {
  return (
    <>
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
    </>
  );
}

function Comment({ comment }) {
  return (
    <>
      <div className="col-1 img-post">
        <figure className="figure-usr">
          <img className="img-usr" src={comment.author.avatar} alt="" />
        </figure>
      </div>
      <div className="col-11 border-comment">
        <p>{comment.content}</p>
      </div>
    </>
  );
}

export default PostItem;
