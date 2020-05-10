export const countBits = (n) =>
    (n >>> 0)
      .toString(2)
      .split("")
      .filter(element=>element==='1').length
