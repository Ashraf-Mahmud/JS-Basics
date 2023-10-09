console.table([2<3,2>3,2==3,2!=3,2>=3,2<=3])
console.table([null>0,null<0,null>=0,null==0]); // comparison converts null to 0 but == not 
console.table([undefined>0,undefined<0,undefined>=0,undefined==0]); // undefined always converts to undefined and become false 
console.table(["2">=3,"2"==2,"2"===2])// == is equality check(converting data type and / without data type , only value check), 
// === strictly equality check(with data type checking without converting data type) other than comparison