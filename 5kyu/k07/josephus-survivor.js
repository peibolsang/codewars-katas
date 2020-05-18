const josephusSurvivor = (n,k) => survivor(Array(n).fill().map((x,index)=>index+1),k)[0]

const survivor = (array,number) => {
 
 let index = 0
 let counter = 0
 
 while(array.length != 1){
   if (index>array.length-1) index = 0
   if ( (counter+1) % number === 0) {
     array.splice(index,1)
   }
   else index=index+1
   counter=counter+1
 }
 return array
}

export default josephusSurvivor