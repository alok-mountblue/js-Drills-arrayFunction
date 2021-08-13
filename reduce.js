
    export function reduce(array,cb, initialValue){
    
       if(initialValue==undefined){
           initialValue=array[0];
       }
        
      let value = initialValue;

      for(let i = 0; i < array.length; i++) {
        let element = array[i]
        value = cb(value, element)
      }

      return value;
    }
