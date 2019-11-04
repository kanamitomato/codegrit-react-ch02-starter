import React from 'react';
import CardIcons from './CardIcons';
import Comments from './Comments';
import CommentBox from './CommentBox';

function CardMain() {
  return (
    <section className="card-main">
      <CardIcons />
      <div className="like-counts">100 likes</div>
      <Comments />
      <div className="post-date">1日前</div>
      <CommentBox />
    </section>
  )
}

export default CardMain;