import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import CardHead from './Header';
import CardBody from './body/CardBody';
import * as serviceWorker from '../serviceWorker';

const InstaCard = () => {
    return (
        <article className="insta-card">
            <CardHead />
            <CardBody />
        </article>
    )
}

const RootReactElement = React.createElement(InstaCard, null, null)
ReactDOM.render(RootReactElement, document.getElementById('root'));

export default InstaCard;
serviceWorker.unregister();