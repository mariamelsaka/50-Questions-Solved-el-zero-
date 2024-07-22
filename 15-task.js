// task 1 =================================
console.log("task1 ================================");
let fileName = "Elzero.php";
console.log(fileName.split(".")[0])
console.log(fileName.split(".")[1])
// Elzero
// php
// task 2 =================================
console.log("task2 ================================");
function addEl(str) {
    // Your Code Here

    if(str==""){
        return str;
    }else if(str.slice(0,2)=="El"){
        return str;
    }else{
        return "El"+str;
    }
}
console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
// task 3 =================================
console.log("task3 ================================");
let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// for(let i=0;i<myString.length;i++){
//     console.log(myString[i])
//     if(myString[i]=="@"){
//         break;
//     }
// }
console.log(myString.search("@"))
first=myString.indexOf("@")
console.log(first+1)
sec=myString.indexOf("@",first+1)

console.log(myString.split("").slice(0,45).join(""))
console.log(myString.slice(0,sec))
// Output Needed
"Hello Elzero Web School @ We Love Programming"

// task 4 =================================
console.log("task4 ================================");
/**
learned lesson in notion
other solution
function checkRange(n1, n2, n3, n4, n5) {
return (n1 >= n4 && n1 <= n5) && (n2 >= n4 && n2 <= n5) && (n3 >= n4 && n3 <= n5) ? "Yes All Numbers In Range" : "Not All Numbers Is In Range";
}
 */

function checkRange(n1, n2, n3, n4, n5) {
    // Your Code Here
if(n4<n5){
if(n4<=n1 &&n1<=n5){
    if(n4<=n2 &&n2<=n5){
        if(n4<=n3 &&n3<=n5){
    return("yes");
        }else{return "no"};
    }else{return "no"};
} 
} 
else if(n5<n4){
    if(n5<=n1 &&n1<=n4){
        if(n5<=n2 &&n2<=n4){
            if(n5<=n3 &&n3<=n4){
        return("yes");
            }else{return "no"};
        }else{return "no"};
    }
    else{
        return("no");
    }
}
else{
    return("no");
}
}
console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

// reverse
console.log(checkRange(5, 10, 15, 50, 5)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 50, 2)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 18, 5)); // Not All Numbers Is In Range


// task 5 =================================
console.log("task5 ================================");

function replaceFirstWithLast(word) {
    // Your Code Here
    //  last=word.slice(-1);
     return word.replace(word.slice(-1),word.slice(0,1)).replace(word.slice(0,1),word.slice(-1));
    //  word.replace(word.slice(0,1),last);
    //  return word;
  }
  
  console.log(replaceFirstWithLast("olzerE")); // Elzero
  console.log(replaceFirstWithLast("Hello")); // oelloH

// task 6 =================================
console.log("task6 ================================");
// other solution in notion
function checkBiggestNum(word) {
    // Your Line Of Code Here
    return word.split("").sort().slice(-1).join("");
  }
  
  console.log(checkBiggestNum("1500654")); // 6
  console.log(checkBiggestNum("8509507")); // 9

// task 7 =================================
console.log("task7 ================================");
let nums = [20, 100, 50, 10, 15, -20, 30];
let arr=[];
console.log(nums.sort())
m=Math.max(...nums)
console.log(m)
x=nums.sort().slice(-1)
console.log(x)
arr.push(m)  
arr.push(parseInt(x.join("")))  
console.log(arr)
// Needed Output [100, 50]

// task 8 =================================
console.log("task8 ================================");
let nums2 = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

// Your Code Here
console.log(nums2.sort().slice(-1));
//--------------------other solution


// Initialize closestNumber with the first element of the array
let closestNumber = nums2[0];

// Iterate through the array starting from the second element
for (let i = 1; i < nums2.length; i++) {
    // If the absolute difference between the current number and the goal is less than
    // the absolute difference between the closestNumber and the goal,
    // update closestNumber with the current number
    if (Math.abs(nums2[i] - goal) < Math.abs(closestNumber - goal)) {
        closestNumber = nums2[i];
    }
}

console.log("Closest Number Is", closestNumber);

// Closest Number Is 88

// task 9 =================================
console.log("task9 ================================");

//A 65 Z 90 a 97 z 122 
function swapEveryTwoChars(word) {
    let arr=[];
    // Your Code Here
    // for(let i=0;i<word.length;i++){
    //     if(word[i].charCodeAt(0)>=65 &&word[i].charCodeAt(0)<=90){      
    //         arr.push(word[i].toLocaleLowerCase()) ;
            
    // }else if(word[i].charCodeAt(0)>=97 &&word[i].charCodeAt(0)<=122){
    //         arr.push(word[i].toLocaleUpperCase());
           
    // } 
    for(let i=0;i<word.length;i++){
        if(i%2==0){
            if(word[i].charCodeAt(0)>=65 &&word[i].charCodeAt(0)<=90){      
                        arr.push(word[i].toLocaleLowerCase()) ;                   
                }else if(word[i].charCodeAt(0)>=97 &&word[i].charCodeAt(0)<=122){
                        arr.push(word[i].toLocaleUpperCase());                 
                } 
        }else{
            arr.push(word[i]);
        }
}
return arr.join("");
}
  
console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello

// task 10 =================================
console.log("task10 ================================");
// Write Your Function Implementation Here
String.prototype.elzeroRepeat=function (num){
count=0;
res=""
    while(count<num){
       
         res+=this;
        count++;
       
    }
    return res;

};
console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

// task 11 =================================
console.log("task11 ================================");
let myMoney=5301503206;
let z=0;
console.log(myMoney.toString().length);
console.log(myMoney.toLocaleString('en-US'));
while (z<myMoney.toString().length){
    
    
    
        if(z%3==0){
            console.log(myMoney.toString().slice(0,z)+",");
            
        }
        z++;
   
}

// Needed Output 5,301,503,206


// task 12 =================================
console.log("task12 ================================");
let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

// Your Code Here
for (let i=0;i<names.length;i++){
    // console.log(names[i].slice(0,1)==names[i].slice(-1).toLocaleUpperCase())
    // console.log(names[i].slice(0,1))
    // console.log(names[i].slice(-1))
    if(names[i].slice(0,1)==names[i].slice(-1).toLocaleUpperCase()){
        result.push(names[i]);
    }
}
console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']
// task 13 =================================
console.log("task13 ================================");
let theName = "Elzero";
console.log(theName.slice(0,1)+theName.slice(-1));
console.log(theName.slice(1,5));
console.log(theName.slice(2,4));
// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze
// task 14 =================================
console.log("task14 ================================");

function repeatWithRules(word) {
    // Your Code Here
    result=[]
    for(let i=0;i<word.length;i++){   
        result.push(word[i].repeat(i+1));
        
    } 
    // console.log()
    return result.join("");
  }

  console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
  console.log(repeatWithRules("Hello")); // Heelllllllooooo
// task 15 =================================
console.log("task15 ================================");

function concatenateWithoutLast(words) {
    // Your Code Here
    result=[]
    for(let i=0;i<words.length;i++){  
        result.push(words[i].slice(0,words[i].length-1));
    }
    return result.join(" ");
  }
  
  console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School