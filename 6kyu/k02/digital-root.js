function digital_root(n) {
    const value = extract_and_add(n)
    return (value<10) ? value : digital_root(extract_and_add(value))

  }
  
  function extract_and_add(n){
    return n.toString().split("").map(e=>parseInt(e)).reduce((total,num) => total+num, 0)
  }

  export default digital_root