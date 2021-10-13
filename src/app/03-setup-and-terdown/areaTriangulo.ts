export class areaTriangulo{
    areatri=0.0;
    area(A:number, B:number){
        this.areatri = (A*B)/2;
        if (this.areatri < 1) {
            this.areatri = 0;
            return this.areatri;
        }
        return this.areatri;

    }
} 