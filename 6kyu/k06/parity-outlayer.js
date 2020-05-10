export const findOutlier = (integers)
    integers.filter(element=>element%2!=0).length>1 ? 
      integers.find(element=>element%2===0)
      :
      integers.find(element=>element%2!=0)