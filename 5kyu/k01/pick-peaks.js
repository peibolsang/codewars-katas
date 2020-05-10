const pickPeaks = arr => 
    arr.reduce((res,x,index) => { 
      if(index>0 && index<arr.length)
        if (x > arr[index-1] && x>=arr[index+1] && goesDown(arr.slice(index,arr.length),x))  {
          res.pos.push(index);
          res.peaks.push(x);
        } 
      return res
    },{pos:[],peaks:[]})
    

  const goesDown = (array,value) => removeInitialPlateau(array).length===0 ? false : removeInitialPlateau(array)[0]<value
  
  const removeInitialPlateau = array => array.reduce((res,x,index) => {
    if (index>0)
      if (x!=array[index-1])
        res.push(x)
    return res
  },[])

  export default pickPeaks