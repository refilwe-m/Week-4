/* let letter1 = "a";
let letter2 = letter1;
console.group([letter1, letter2]);
//change data
letter1 = "b"; */
//console.log(`What's on letter1:`,...[letter1, letter2]);

//Pointers
const obj1 = {value:'a'}
const obj2 = obj1;
//console.table({obj1,obj2});
obj1.value = 'b'
//console.table({obj1,obj2});
// 9 -> 23

let tail = {
    value:2,
    next:null
}
let head = {
    value:9,
    next: {tail}
}

console.table({head,tail})