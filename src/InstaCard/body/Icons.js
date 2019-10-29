import React from 'react';
import BookmarkImg from '../../images/bookmark.png';
import BubbleImg from '../../images/bubble.png';
import HeartImg from '../../images/heart.png';

const Icons = () => {
    const imageStyle = {
        width: '30px',
        height: '30px'
    }
    return (
        <div class="card-main-icons">
            <ul className="flex-container card-main-icons-left">
                <li className="icon-heart">
                    <img src={HeartImg} style={imageStyle} />
                </li>
                <li className="icon-comment">
                    <img src={BubbleImg} style={imageStyle} />
                </li>
            </ul>
            <ul className="flex-container card-main-icons-right">
                <li className="icon-bookmark icons-right">
                    <img src={BookmarkImg} style={imageStyle} />
                </li>
            </ul>
        </div>
    )
}

export default Icons;