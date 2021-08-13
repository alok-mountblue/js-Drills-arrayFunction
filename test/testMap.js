
import {map} from "../map.js";

const elements= [1,2,3,4,5,5];

function cb(element){
        return element*2;
}
let newarr=map(elements,cb);
console.log(newarr);