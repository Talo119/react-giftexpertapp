import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GrifGridItem } from './GrifGridItem';
import PropTypes from 'prop-types';

export const GiftGrid = ({category}) => {
    const {data:images,loading} = useFetchGifs(category);
    

    /*const [images, setImages] = useState([])
    useEffect(() =>{
        getGifs(category)
        .then(setImages);
    },[category]) */

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">            
                {
                    images.map(img =>(
                        <GrifGridItem 
                            key={img.id}
                            {...img} />
                    ))
                }            
            </div>
        </>
        
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}
