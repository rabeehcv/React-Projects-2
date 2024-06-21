import React from 'react';

const components = ({image, name, title, review}) => {
    return (
        <article className='article'>
            <img src={image} alt={title} className='person-img'/>
            <h4 className='name'>{name}</h4>
            <p >{review}</p>
        </article>
    );
};

export default components;