export const isPangram = (string) =>{
    const alphabet="abcdefghijklmnopqrstuvwxyz".split("")
    return alphabet
      .reduce((a,b) => a && string.toLowerCase().split("").find(element=>element===b)!=null, true)
  }