import {flatten} from "../flatten.js";

const nestedArray = [1, [2], [[3]], [[[4]]]];

let arr=flatten(nestedArray);
console.log(arr);