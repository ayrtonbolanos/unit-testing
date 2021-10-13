import { greet } from './greet';

describe('greet', () => {
    it('Debería incluir el nombre en el mensaje.', () => {
        expect(greet('ayrto')).toContain('Welcome ayrto');
    })
})