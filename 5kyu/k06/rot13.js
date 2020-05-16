const rot13 = (message) => {
    //your code here
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    return message.split("")
    .map(x => {
      if (x.match(/[a-zA-Z]/)){
        let index = alphabet.indexOf(x.toLowerCase())
        let val = alphabet.charAt( index <13 ? index +13 : index -13)
        return x===x.toUpperCase() ? val.toUpperCase():val
      }  
      else return x
    }).join("")
  }

  export default rot13