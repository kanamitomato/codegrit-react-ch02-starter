import React from 'react'
import Icons from '../body/Icons';
import LikeCounts from '../body/LikeCounts';
import Comments from '../body/Comments';
import PostDate from '../body/PostDate';
import CommentBox from '../body/CommentBox';

const CardMain = () => {
    return (
        <section className="card-main">
            <Icons />
            <LikeCounts />
            <Comments />
            <PostDate />
            <CommentBox />
        </section>
    )
}

export default CardMain;