import React from 'react';

function Comment({ comment }) {
  return (
    <div className="row-post">
      <div className="col-1 img-post">
        <figure className="figure-usr">
          <img className="img-usr" src={comment.author.avatar} alt="" />
        </figure>
      </div>
      <div className="col-11">
        <p>comments</p>
      </div>
    </div>
  );
}

export default Comment;
