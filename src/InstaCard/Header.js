import React from 'react'
import AvatarImg from '../images/avatar.png';

const CardHead = () => {
    return (
        <section className="card-header">
            <div className="poster-avatar">
                <img src={AvatarImg} />
            </div>
            <div className="poster-name">
                testuser
            </div>
        </section>
    )
}

export default CardHead;