import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';
describe('Pruebas en el hook useFetchGifs',() =>{

    test('debe retornar el estado inicial', async () => {

        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One Punch') );
        const {data, loading} = result.current;
        await waitForNextUpdate();
        console.log(data, loading);
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    

    test('debe de retornar un arreglo de imagenes y e loading en false', async () => {

        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    })
    

})