//maximum element from an array

function getMaxEle(arr){
 if(arr.length ===0 ){
   return "Array is empty";
 }
  let max = arr[0]
  for(i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}
console.log("Maximum ele",getMaxEle([11111,22,33,44,555,4444,999]))

// --------------------------------------------------------------
//Count the number of even and odd number in a list

function getNoOfEvenOdd(arr){
  let even = 0, odd = 0;
  for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      even++;
    }else{
      odd++
    }
  }
  return {even: even, odd: odd}
}
console.log("Number of even and odd",getNoOfEvenOdd([12,23,34,22,33,44,44,55,32,2,1,4,1,4]))
// ----------------------------------------------------------------
//Reverse a String

function reverseString(str){
 let rev = '';
  for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
  }
  return rev
}
console.log("Reverse String",reverseString("chandan"))