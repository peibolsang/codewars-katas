export const countSmileys = (arr) => arr.filter(element=> element.match(/[:;][-~]?[D)]/)).length
