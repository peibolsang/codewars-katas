const add = (a, b) => {

    if(a.length<b.length) a = a.padStart(a.length + (b.length-a.length),"0")
    else b = b.padStart(b.length + (a.length-b.length),"0")
    
    let arrayA = a.split("").reverse()
    let arrayB = b.split("").reverse()
    
    let acc = 0
    
    let sum = arrayA.reduce((res,val,index)=>{
      let result = Number(val) + Number(arrayB[index]) + acc
      if (index < arrayA.length-1 && result >= 10){
        acc = Number(result.toString().charAt(0))
        res.push(Number(result.toString().charAt(1)))
      }
      else {
         acc = 0
         res.push(result)
      }
      return res
    },[])
    
    if (acc != 0) sum[sum.length-1] = sum[sum.length-1] + acc
  
    return sum.reverse().join("")
  }

  export default add