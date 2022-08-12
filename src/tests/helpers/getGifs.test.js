import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con GetGifs Fetch', () => {
    test('Debe de traer 10 elementos', async () => {
        const elementos = await getGifs('One Piece');

        expect(elementos.length).toBe(10);
    })

    test('Debe de traer un array vacio.', async () => {
        const elementos = await getGifs('');

        expect(elementos.length).toBe(0);
    })
    
})
