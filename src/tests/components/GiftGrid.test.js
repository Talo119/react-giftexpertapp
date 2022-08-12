import React from "react";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GiftGrid } from "../../components/GiftGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GiftGrid/>', () =>{

    const category = 'One Punch';

    test('debe de mostrarse correctamente', () => {

        
        const wrapper = shallow(<GiftGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostar items cuando se cargan imagenes useFetchGifs ', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jps',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GiftGrid category = {category} /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GiftGridItem').length).toBe(gifs.length);

    })
    
    
})