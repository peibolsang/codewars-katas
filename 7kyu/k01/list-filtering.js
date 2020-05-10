function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(n => typeof n != 'string')
  }
  export default filter_list