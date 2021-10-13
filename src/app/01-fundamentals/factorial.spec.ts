import { factorial } from './factorial';

describe('factorial',()=>{
	it('Retorna 1 si la entrada es 0...',()=>{
		const result = factorial(0);
		expect(result).toBe(1); 
	})
	it('Retorna 2 si es 2...',()=>{
		const result = factorial(2);
		expect(result).toBe(2); 
	})
	it('Retorna -1 si es mayor o igual a 10...',()=>{
		const result = factorial(10);
		expect(result).toBe(-1); 
	})
	it('Retorna 24 si es igual a 4...',()=>{
		const result = factorial(4);
		expect(result).toBe(24); 
	})
})


