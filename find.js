

export function find(elements, cb){

    for (let i = 0; i < elements.length; i++) {
        let temp = cb(elements[i]);
        if(temp==true){
           return true;}
        else{
           continue;}
    }
    return undefined;  
}

