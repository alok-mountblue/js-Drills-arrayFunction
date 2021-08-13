
import {each} from "../each.js";

let index=0;

const elements= [1,2,3,4,5,5];

function cb(elements, index) {

    console.log(elements+" : "+index); //insert logic
}

each(elements,cb);