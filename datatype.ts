let a:any[]=[ 'D',4,true];

/***** Type Script support deconstructing */
let students = ['budi', 'sinta', 'lusi','dunia','test'];
let [first, second, third] = students;

console.log(first); // 'budi'
console.log(second); // 'sinta'
console.log(third); // 'lusi'
console.log(students); // 'budi'

//enums allow us to declare a set of named constants
enum color{ red=0,black=1,pink=2};
let col =color.black;
console.log(col);//1


/*In TypeScript, type assertion is a way to tell the compiler what is the type of a variable.
Type assertion is used when the type of the target variable might not be known or the programmer knows better what is the actual type of it.
Type assertion is like type casting in other languages, but in TypeScript it is only a compile time feature.*/
{
let m;
m='abc';
let m2= (<string>m).endsWith('c');/* 
endsWith is an ES6 function so you need to target ES6 in your TypeScript compiler*/ 

let m3= (m as string).endsWith('c');
console.log(typeof(m)+m2+m3);
}


