export const songDecoder = (song) =>  song.split(/WUB/).filter(e => e!='').join(" ")
  