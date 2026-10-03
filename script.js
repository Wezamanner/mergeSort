 export function mergsort(array){
    console.log("This was printed recursively");
    let result =[];
  if (array.length <= 1) {
    return array;
}
    
 let middle =Math.floor(array.length/2)
 let left=array.slice(0,middle)
 let right = array.slice(middle) 
let sortedLeft = mergsort(left);
let sortedRight = mergsort(right);

let i=0,j=0;
while(sortedLeft.length>i&&sortedRight.length>j){

if(sortedLeft[i]<sortedRight[j]){
    result.push(sortedLeft[i])
i++;

}else{
    result.push(sortedRight[j]);
    j++;
}  
}

while(i<sortedLeft.length){
    result.push(sortedLeft[i])
    i++;
}
while(j<sortedRight.length){
result.push(sortedRight[j])
j++;
}
return result;
}
console.log(mergsort([3, 2, 1, 13, 8, 5, 0, 1]));