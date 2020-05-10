export const rgb = (r, g, b) => Array(r,g,b)
    .map(element => 
      (element<0 ? 
      "00" : element.toString(16).length===1 ? 
      "0"  + element.toString(16) : element>255 ?  
      "FF" : element.toString(16)
      ).toUpperCase()
    ).join("")
