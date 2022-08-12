import React from "react";
import { shallow } from 'enzyme';
import { GiftExpertApp } from "../GiftExpertApp";

describe('Pruebas en <GiftExpertApp/>', ()=>{
    
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<GiftExpertApp/>);
        expect( wrapper ).toMatchSnapshot();  

    });

    test('debe de mostar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>);
        expect( wrapper.find('GiftGrid').length).toBe(categories.length);
    })
    
    
})