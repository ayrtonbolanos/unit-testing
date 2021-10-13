import { getCurrencies } from './getCurrencies';

describe ('getCurrencies',()=>{
    it ('Retorna monedas suministradas:',()=>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
});