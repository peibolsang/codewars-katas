class Sudoku{

    constructor(data){
      this.data = data
    }
    
    sumOfRows() { 
      return this.data.map(x => 
        x.reduce((res,e)=>{
          if (typeof e!= "number" || e===0) return false
          else return res+e
        },0)
      )
    }
    
    sumOfColumns() {
      return this.data.reduce((res,x,index)=>{
        let result = this.data.reduce((acc,e) => acc+e[index] ,0)
        res.push(result)
        return res
      },[])
    }
    
    isValidLittleSquares(){
      
      let result = this.data.reduce((res,x,i)=>{
        
        x.map((y,j)=>{
          if (i<=2 && j<=2) res[0].push(y)
          if (i<=2 && (j>2 && j<=5)) res[1].push(y)
          if (i<=2 && (j>5 && j<=8)) res[2].push(y)
          
          if ((i>2 && i<=5) && j<=2) res[3].push(y)
          if ((i>2 && i<=5) && (j>2 && j<=5)) res[4].push(y)
          if ((i>2 && i<=5) && (j>5 && j<=8)) res[5].push(y)
          
          if ((i>5 && i<=8) && j<=2) res[6].push(y)
          if ((i>5 && i<=8) && (j>2 && j<=5)) res[7].push(y)
          if ((i>5 && i<=8) && (j>5 && j<=8)) res[8].push(y)
        })
        
        return res
        
      },[[],[],[],[],[],[],[],[],[]])
      
      return result.every(x=>
        x.reduce((res,y)=>res+y,0)===45
      )
  
    }
    
    isValid() {
      let sumOfRows = this.sumOfRows()
      let sumOfColumns = this.sumOfColumns() 
      
      if (sumOfRows.length===1 && sumOfColumns.length===1) return parseInt(sumOfRows[0])===0 || parseInt(sumOfRows[0])===1
      if (sumOfRows.length===9 && sumOfColumns.length===9) return sumOfRows.join("")===sumOfColumns.join("") && this.isValidLittleSquares()
      else return sumOfRows.join("")===sumOfColumns.join("")
        
    }
  }

  export default Sudoku