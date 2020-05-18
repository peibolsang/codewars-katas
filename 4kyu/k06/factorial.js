import add from "../k03/add-strings.js"
import multiply from "../k05/multiply-strings.js"

function factorial(n){

    let i = "1"
    let r = "1"
  
    while( i != n.toString()){
      r = multiply(i,r)
      i = add(i,"1")
    }
    
    return multiply(r,n.toString())
  }

  export default factorial