import React from 'react';
import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory'
import '@testing-library/jest-dom';

describe('Pruebas en componente AddCategory.', () => {
    
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    test('Debe mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto.', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{
            target:{
                value:value
            }
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la información con submit ', () => {
        
        wrapper.find('form').simulate('onSubmit',{preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('submit').simulate('target', {preventDefault(){} });
        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
    
})
