const permutations = string => removeDuplicates(flatAndSort(perm(string.split(""))))

const perm = a => a.length ? a.reduce((r, v, i) => [ ...r, ...perm([ ...a.slice(0, i), ...a.slice(i + 1) ]).map(x => [ v, ...x ])], []) : [[]]

const flatAndSort = array => array.reduce((r,x)=>{
    r.push(x.join(""))
    return r
  },[]).sort()
  
const removeDuplicates = array => array.reduce((r,x,i)=>{
    if(x!=array[i-1])
      r.push(x)
    return r
  },[])

  export default permutations