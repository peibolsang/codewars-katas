export const toWeirdCase = (string)
    string
      .split(" ")
      .map(e => e
        .split("")
        .map((value,index)=> index%2==0 ? value.toUpperCase():value.toLowerCase()).join(""))
      .join(" ")
  