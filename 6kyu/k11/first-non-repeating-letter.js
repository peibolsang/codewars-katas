const firstNonRepeatingLetter = (s) => {
    const result = s.split("").find((element,index,array) => !repeatsAhead(element,index,array) && !repeatsBehind(element,index,array))
    return result ? result : ''
}
   
const repeatsAhead = (element,index,array) => array.slice(index+1,array.length).find(x=>x.toLowerCase()===element.toLowerCase())
const repeatsBehind = (element,index,array) => array.slice(0,index).find(x=>x.toLowerCase()===element.toLowerCase())