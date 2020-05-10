const incrementString = (string) => {
    let theText = string.match(/[a-zA-Z]*/)
    let theNumber = string.match(/\d+/)
    return theText + (theNumber? (parseInt(theNumber)+1).toString().padStart(theNumber[0].length,"0") : "1")
  }

  export default incrementString