import React from 'react'
import PropTypes from 'prop-types';
export const GrifGridItem = ( {id,title,url} ) => {
    console.log(id,title,url)
    return (        
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GrifGridItem.propTypes = {
    title:PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
