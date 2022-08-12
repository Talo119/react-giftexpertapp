import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = ({defaultCategories = []}) => {
    
    //const [categories, setCategories] = useState(['Dragon Ball']);
    const [categories, setCategories] = useState(defaultCategories);
    /*const handleAdd = () =>{
        const newCategorie = 'One Piece';
        //setCategories([...categories,newCategorie]);
        setCategories(cats => [...cats,newCategorie]);
    }*/



    return (
        <>
          <h2>GifExpertApp</h2>  
          <hr/>
          <AddCategory setCategories={setCategories} />
          <ol>
              { categories.map( category =>(
                  <GiftGrid
                    key={category}
                    category={category}
                  />
              )) 
              }
          </ol>
        </>
    )
}
