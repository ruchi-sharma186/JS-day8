console.log("Hello World");
//loop questions
const countCharacters = () => {
    let S = "AbaDd";
    let countA = 0;
    let countD = 0;

    for (let i = 0; i < S.length; i++) {
        if ( S[i] === " A" || S[i] === "a"){
      countA++;
        } else if (S[i] === "D" || S[i] === "d"){
            countD++;
        }
    }
    return [countA, countD];
};
console.log(countCharacters());

//Question2
//1
//1 2 
//1 2 3
//1 2 3 4
 const rows = 10;
 for (let i = 1; i <= rows; i++) {
     let pattern = "";
    for (let j = 1; j <=i; j++){
        pattern += j + "";
    }
    console.log(pattern);
    
 }

 // Question3
//2D arrays

let arr = [
    [1,2],
    [3,4],
    [5,6],
];
 for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
        
    }
 }


// concat question 

let str = "Live";
let str1 = "Session";

let res = str.concat(str1);
console.log(res);


//most interview question
let array = [45, 4, 2, 45, 78, 550, 1, 11, 5];
let largest = array[0];
for(let i = 1; i <array.length; i++){
    if( array[i] > largest){
    largest = array[i];
}
}
 console.log("this is the largest number:", largest);
 

 //finding duplicate value returning

let array1 = [4, 2, 45, 44, 7, 78, 4, 2, 1, 9, 1];
let duplicates = [];

for (let i = 0; i < array1.length; i++){
    for (let j = i + 1; j< array1.length; j++){   
       // for (let j = 0; j< array1.length; j++){    //this is return the without duplicate value
        if (array1[i] === array1[j] && !duplicates.includes(array1[i])){
            duplicates.push(array1[i]);
        }
    }
}
console.log(duplicates);
console.log(array1);


//count the same value

let str2 = "amanamana";
 const count1 = {};

 for( let char of str2) {
    count1[char] = (count1[char] || 0) + 1;
  }

let res1 = "";
const keys = Object.keys(count1).sort();
for (let char of keys){
    if (count1[char] > 1) {
        res1 += char + count1[char];
    }
}
 console.log(res1);
 