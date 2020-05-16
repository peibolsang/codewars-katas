const anagrams = (word, words) => 
  words.reduce((res,x) => {
    if(x.split("").sort().join("")===word.split("").sort().join("")) res.push(x)
    return res
  },[])

  export default anagrams