export function factorial(number : number){
	var i=1;
	if (number >=10){
		return -1;
	} else if (number == 0){
		return 1;
	}
	while(number>0){ 
		i=i*number; // i = 1*4 = 4
		number=number-1; //number=4-1 
	}
	return i;
}