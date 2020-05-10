export const towerBuilder = (nFloors) =>
    Array(nFloors).fill("")
      .map((element,index) => element
            .padEnd(nFloors-1-index," ")
            .padEnd(nFloors+index,"*")
            .padEnd(2*nFloors-1," ")
      )
   
  