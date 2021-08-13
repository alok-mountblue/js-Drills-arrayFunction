
import {find} from "../find.js";

const elements= [1,2,3,4,5,5];

function cb(element) {
    if(element>4)
      return true;
}
console.log(find(elements,cb));