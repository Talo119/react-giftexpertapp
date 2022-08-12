import React from 'react';
import { shallow } from "enzyme";
import { GrifGridItem } from '../../components/GrifGridItem';


describe('Pruebas en GiftGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GrifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener la imagen igual al url y alt de los props.', () => {
        const img = wrapper.find('img');
        //console.log(img.props('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener un animate__fadeIn', () => {
        const div = wrapper.find('div');
        //const className 
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })
    
    
    
    
})
