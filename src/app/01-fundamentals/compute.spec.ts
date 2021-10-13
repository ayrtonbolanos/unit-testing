import { compute } from './compute';

describe('compute',()=>{
	it('Retorna 0 si la entrada es un negativo.',()=>{
		const result = compute(-1);
		expect(result).toBe(0); 
	})
	it('Incrementaría si es un positivo',()=>{
		const result = compute(1);
		expect(result).toBe(2); 
	})
})


