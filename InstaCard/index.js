import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import AvaterImg from '../src/images/avater.png';
import BookmarkImg from '../src/images/bookmark.png';
import BubbleImg from '../src/images/bubble.png';
import HeartImg from '../src/images/heart.png';
import MainImg from '../src/images/instacard-main-image.jpg';
import App from '../src/App';
import * as serviceWorker from '../src/serviceWorker';

class InstaCard extends Component {
    render() {
        return (
            <article className="insta-card">
                <CardHead />
                <CardBody />
                <CardMain />
                <LikeCounts />
                <Comments />
                <PostDate />
                <CommentBox />
            </article>
        )
    }
}

class CardHead extends Component {
    render() {
        return (
            <section className="card-header">
                <div className="poster-avatar">
                    <img src={AvaterImg} />
                </div>
                <div className="poster-name">
                    testuser
                </div>
            </section>
        )
    }
}

class CardBody extends Component {
    render() {
        return (
            <section className="card-body">
                <CardImage />
            </section>
        )
    }
}

class CardImage extends Component {
    render() {
        return (
            <div className="card-image">
                <img src={MainImg} />
            </div> 
        )
    }
}

class CardMain extends Component {
    render() {
        const imageStyle = {
            width: '30px',
            height: '30px'
        }
        return (
            <section className="card-main">
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
            </section>
        )
    }
}

class LikeCounts extends Component {
    render() {
        return <div className="like-counts">100 likes</div>
    }
}

class Comments extends Component {
    render() {
        return (
            <div className="comments">
                <li className="poster-comment">
                <a className="commenter-name">
                    testuser
                </a>
                <span className="commenter-comment">
                    This is the insta-card!
                </span>
                </li>
                <li>
                <a className="commenter-name">
                    testuser2
                </a>
                <span className="commenter-comment">
                    So cool!
                </span>
                </li>
            </div>
        )
    }
}

class PostDate extends Component {
    render() {
        <div className="post-date">1日前</div>
    }
}

class CommentBox extends Component {
    render() {
        <section className="comment-box">
            <div className="comment-area">コメントする</div>
        </section>
    }
}



const RootReactElement = React.createElement(InstaCard, null, null)
ReactDOM.render(RootReactElement, document.getElementById('root'));

serviceWorker.unregister();