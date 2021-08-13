
import {filter} from "../filter.js";

const elements= [1,2,3,4,5,5];

function cb(element) {
    if(element>3)           //write any condition 
      return element;
}
console.log(filter(elements,cb));