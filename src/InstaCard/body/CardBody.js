import React from 'react'
import CardImage from '../body/CardImage';
import CardMain from '../body/CardMain';


const CardBody = () => {
    return (
        <section className="card-body">
            <CardImage />
            <CardMain />
        </section>
    )
}


export default CardBody;