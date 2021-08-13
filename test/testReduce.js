
import {reduce} from "../reduce.js";


const elements= [1,2,3,4,5,5];

function cb(initialValue, current) 
{ return initialValue + current};

let result=reduce(elements,cb,elements[0]);
console.log(result);