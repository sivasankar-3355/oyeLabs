


 function getMissingNo(a, n) {
  
  let total = Math.floor((n + 1) * (n + 2) / 2);
  for (let i = 0; i < n; i++)
      total -= a[i];
  return total;
}



function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
 }
var result = range(1, 100); 
var x =  [...shuffle(result)]

let N = x.length;
let miss = getMissingNo(x, N);
console.log(miss)
  

  