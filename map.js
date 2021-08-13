

export function map(elements, cb){

    let newArray=[];
    for (let i = 0; i < elements.length; i++) 
        newArray.push(cb(elements[i]));
    return newArray;  
    
}