import React from 'react';

function PostItem({ post }) {
  return (
    <>
      <div className="col-2">
        <img
          className="img-usr"
          src="https://dummyimage.com/100x100/000/fff"
          alt=""
        />
      </div>
      <div className="col-10">
        <h3></h3>
        <span></span>
        <p></p>
      </div>
    </>
  );
}

export default PostItem;
