const formatDuration = (seconds) => {

    if (seconds === 0) return "now"

    const years   = Math.floor(seconds / (3600*24*365))
    const days    = Math.floor(seconds / (3600*24)) - (years*365)
    const hours   = Math.floor(seconds / 3600) - (days*24) - (years*365*24)
    const minutes = Math.floor(seconds / 60) - (hours * 60) - (days*24*60) - (years*365*24*60);
    const secs    = seconds - (minutes * 60) - (hours * 3600) - (days*24*3600) - (years*365*24*3600);
    
    const times = [" year", " day", " hour", " minute", " second"]
    
    return (years+' '+days+' '+hours+' '+minutes+' '+secs).split(" ")
      .map((element,index,array) => element != '0' ? element + plural(parseInt(element),times[index]) + separator(array,index) : "")
      .join("")
}

const plural = (number,string) => number > 1 ? string+"s":string

const separator = (array,index) => {
  const number = array.slice(index,array.length).filter(x=>x!='0').length
  return number === 1 ? "": number >2 ? ", " : " and "
}
