export const duplicateEncode = (word) =>
    word.split("")
      .map(e=>
        word.split("").filter(element=>element.toLowerCase()===e.toLowerCase()).length > 1 ? ")":"(")
      .join("")

