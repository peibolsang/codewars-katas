import add from "../k03/add-strings"

const multiply = (a, b) => {
  
    let arrayA = a.split("").reverse()
    let arrayB = b.split("").reverse()
    
      
    let product = arrayB.reduce((r,x,i)=>{  
      let acc = 0
    
      let sum = arrayA.reduce((s,y,j)=>{
        let result = (Number(y) * Number(x)) + acc
        
        if (j < arrayA.length-1 && result >= 10){
          acc = Number(result.toString().charAt(0))
          s.unshift(Number(result.toString().charAt(1)))
        }
        else {
           acc = 0
           s.unshift(result)
        }
        return s
      },[])
    
      if (acc != 0) sum[sum.length-1] = sum[sum.length-1] + acc
      
      sum = sum.join("").padEnd(sum.join("").length+i,"0")
      
      r.push(sum)
      return r
    
    },[])
    
    let maxLength = product[product.length-1].length    
    let result = product.map(x=>x.padStart(maxLength,"0"))
    let initialValue = "".padStart(maxLength,"0")
    
    let final = result.reduce((res,x)=>{
      res = add(res,x)
      return res
    },initialValue)
    
    if (final==="00") return "0"
    
    let val = final.indexOf(final.split("").find(x=>x!='0'))
    return final.substring(val,final.length)
    
  }

  export default multiply
