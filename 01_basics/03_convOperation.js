// let score= 33; //number
// console.log(score)
// console.log(typeof score);

// score = Number("33");//Number is a number wrapper like in java
// console.log(score)
// console.log(typeof score); 


// score = Number("33abc");
// console.log(score)
// console.log(typeof score);// value is = not a number NaN

// score = Number(null);
// console.log(score)
// console.log(typeof score);// value is = 0

// score = Number(undefined);
// console.log(score)
// console.log(typeof score);// value is = not a number NaN

// score = Number(true);
// console.log(score)
// console.log(typeof score);// value is = 0/1

// score = Number("String");
// console.log(score)
// console.log(typeof score);// value is = not a number NaN

// // #############################################################################

// score = Boolean("String");
// console.log(score)
// console.log(typeof score);// value is = true for everything except  (undefined, null,empty string,0);

// score = Boolean("");
// console.log(score)
// console.log(typeof score);//

// score = Boolean(0);
// console.log(score)
// console.log(typeof score);//

// score = Boolean(null);
// console.log(score)
// console.log(typeof score);// 

// score = Boolean(undefined);
// console.log(score)
// console.log(typeof score);// 

// // ###############################################

// score = String(undefined);
// console.log(score)
// console.log(typeof score);// 

// ############################# Operations ################################

console.table([2+2,2-2,2*2,2**3,2/2,3%5]);

//  ########################### Tricky conversion ################################

console.table(["2"+2,1+"2",1+2+"2","2"+8+3,true,typeof true,+true,typeof +true, +"", typeof +""]);// operation continues from left to right

// prefix ++8, postfix 8++ conversion mdn