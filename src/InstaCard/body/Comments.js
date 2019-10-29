import React from 'react';

const Comment = ({ user, comment }) => {
    return (
        <li className="poster-comment">
        <a className="commenter-name">{ user }</a>
        <span className="commenter-comment">{ comment }</span>
    </li>
    )
};

const Comments = () => {
    const props = {
        user: 'testuser',
        comment: 'This is the insta-card!',
    }
    const props2 = {
        user: 'testuser2',
        comment: 'So cool!',
    }
    return (
        <ul className="comments">
            <Comment {...props}/>
            <Comment {...props2}/>
        </ul>
    );
}

export default Comments;