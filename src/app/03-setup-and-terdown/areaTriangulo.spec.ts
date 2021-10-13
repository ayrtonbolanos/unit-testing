import { areaTriangulo } from './areaTriangulo';

describe ('areaTriangulo',()=>{

    let triangulo : areaTriangulo;

    beforeEach(() => {
        triangulo = new areaTriangulo();
    });

    it('si recibe A:2, B:2 debuelve 2',()=>{
        triangulo.area(2,2);
        expect(triangulo.areatri).toBe(2);
    });

    it('si recibe A:0, B:0 debuelve 0',()=>{
        triangulo.area(0,0);
        expect(triangulo.areatri).toBe(0);
    });

    it('si recibe A:-1, B:2 debuelve 0',()=>{
        triangulo.area(-1,2);
        expect(triangulo.areatri).toBe(0);
    });

    it('si recibe A:4, B:2 debuelve 4',()=>{
        triangulo.area(4,2);
        expect(triangulo.areatri).toBe(4);
    });

    it('si recibe A:1, B:1 debuelve 0',()=>{
        triangulo.area(1,1);
        expect(triangulo.areatri).toBe(0);
    });

});