const uniq_c = a =>
  
 a.reduce((res,x,index) => {
    if (x!=a[index-1]){
      let arrayAhead = a.slice(index,a.length)
      let firstDiff = firstDifferent(arrayAhead,x)
      index === a.length - 1 ? res.push([x,1]) : !firstDiff ? res.push([x,arrayAhead.length]) : res.push([x,arrayAhead.join("").indexOf(firstDiff)])
    }
    return res
  },[])
  


const firstDifferent = (array,element) => array.find(x => x!=element)

export default uniq_c