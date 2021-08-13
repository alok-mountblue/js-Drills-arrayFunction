

export function filter(elements, cb){
let temp=[];
    for (let i = 0; i < elements.length; i++) {
        if(cb(elements[i]) != undefined){
            temp.push(elements[i]);
        }
    }
    return temp;  
}