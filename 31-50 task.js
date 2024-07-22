// task 31 =================================
console.log("task31 ================================");
let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];

console.log(clonedArray); // [100, 200, 300, 400]
let newArr=Array.from(myArray);
console.log(newArr)

let clonedArray3=myArray;
console.log(clonedArray3)
let clonedArray4=myArray.slice(0);
console.log(clonedArray4)
// task 32 =================================
console.log("task32 ================================");
let strNumber = "10";

// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution

console.log(+strNumber);
console.log(-strNumber);
console.log(Number(strNumber));
console.log(parseInt(strNumber));

// Output Needed
// 10
// task 33 =================================
console.log("task33 ================================");
x="elzero web school"

console.log('%celzero web school','background-color:blue;color:white;padding:20px')

// task 34 =================================
console.log("task34 ================================");
// done 26 question 
// task 35 =================================
console.log("task35 ================================");
let smallChar=[];
for(let i=97 ;i<=122;i++){
    smallChar.push(String.fromCharCode(i));
}
console.log(smallChar);
let BigChar=[];
for(let i=65 ;i<=90;i++){
    BigChar.push(String.fromCharCode(i));
}
console.log(BigChar);
let Num=[];
for(let i=0 ;i<=9;i++){
    Num.push(i);
}
console.log(Num);
let characters=[...BigChar,...Num,...smallChar].join("");
console.log(characters)

let serial="";
for(i=0;i<20;i++){

 const randomIndex = Math.floor(Math.random() * characters.length);
    serial += characters.charAt(randomIndex);
}
console.log(serial)
// task 36 =================================
console.log("task36 ================================");
// console.log(String.fromCharCode(97))
let res2="";
for(let i=97 ;i<=122;i++){
    res2+=String.fromCharCode(i);
}
console.log(res2);

// task 37 =================================
console.log("task37 ================================");
let numOne = 100;
let numTwo = 200;

(numOne > numTwo)?
 console.log("1st > 2nd"):
(numOne < numTwo)?
  console.log("1st < 2nd"): 
console.log("1st = 2nd") ;


// 1st < 2nd

// Write Your Ternary Operator Code Here
// task 38 =================================
console.log("task38 ================================");
let str = "i lovE elzeRO weB schOOL";
let res="";
for(let j=0;j<str.split(" ").length;j++){
res+=" "+str.split(" ")[j].slice(0,1).toLocaleUpperCase() + str.split(" ")[j].slice(1).toLocaleLowerCase();
}
console.log(res);
// Output Needed
// "I Love Elzero Web School"
// task 39 =================================
console.log("task39 ================================");
let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// Write Your Code Here
Object.freeze(myData);
// myData.push("Name");
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']
// task 40 =================================
console.log("task40 ================================");
const myData2 = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
  };
  
  // Write Your Code Here
  Object.freeze(myData2);
  myData2.skill = "Programming";
  
  console.log(myData2.user); // Elzero
  console.log(myData2.age); // 41
  console.log(myData2.country); // Egypt
  console.log(myData2.skill); // Undefined
// task 41 =================================
console.log("task41 ================================");
const myData3 = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
  };
  
  // Your Code Here
  let cloned =new Object(myData3)
  console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}
// task 42 =================================
console.log("task42 ================================");
document.body.addEventListener("keydown",function myFunction(e) {
    if(e.shiftKey && e.ctrlKey && e.altKey){
    document.getElementById("demo").innerHTML = "You Pressed Ctrl + Alt + Shift";
    }
    
  });
// task 43 =================================
console.log("task43 ================================");
// doneeeeee before 
// task 44 =================================
console.log("task44 ================================");
let last = 30;
let res3=0;
for(let i=last;i>0;i--){
    if(i%2!=0){
        
        console.log(i);
        res3+=i;
        i-=2;
       
    }
}
console.log(res3);
// First Request Output Needed
// 29
// 25
// 21
// 17
// 13
// 9
// 5
// 1

// Second Request Output Needed
// 120
// task 45 =================================
console.log("task45 ================================");
let rangeEnd = 10;
let myRange=[];
for(let i=1;i<=rangeEnd;i++){
    myRange.push(i)

}

// Output Needed
console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// task 46 =================================
console.log("task46 ================================");
let nums = [10, -20, 300, 50, 100, -50];
let maxNumber=Math.max(...nums);
console.log(maxNumber); // 300
// task 47 =================================
console.log("task47 ================================");
// let area=document.querySelector("textarea");
// let form=document.querySelector(".form");
// let btn=document.querySelector("button");

// btn.onclick=function(){
//     console.log(area.value);
//     text=area.value;
// };
// btn.onclick=function importData() {
//     let input = document.createElement('input');
//     input.type = 'file';

//     input.addEventListener('change', ()=> {
      
//         let reader = new FileReader();
      
//         reader.readAsText(input.files[0]);
      
//         reader.addEventListener ( 'load',()=> {
//           console.log(reader.result);
//         });
      
//     //     reader.onerror = function() {
//     //       console.log(reader.error);
//     //     };
      
//       })
// }
//   function showSelectedFile() {
//     selectedfile.value = document.getElementById('inputfile').value;
//   }
//   document.getElementById('inputfile').addEventListener('change', function() {
//     var fr = new FileReader();
//     fr.onload = function() {
//       document.getElementById('output').textContent = fr.result;
//     } ;
//     fr.readAsText(this.files[0]);
//   })


// task 48 =================================
console.log("task48 ================================");
String.prototype.elzeroRepeat=function (num){
    count=0;
    res=""
        while(count<num){
           
             res+=this;
            count++;
           
        }
        return res;
    
    };
    function createStars(num) {
        // Your Code Here
        // let res=[];
        let res=""
        let count=1;
        for(let i=0;i<num;i++){
            // res.push("*".elzeroRepeat(count));
            res+="*".elzeroRepeat(count)+"\n";
            count+=2;
        }
        return res;
      }
      
      console.log(createStars(8));

      
// task 49 =================================
console.log("task49 ================================");
function createStars(num) {
    // Your Code Here
    let res=""
    let res1=""
    let count=1;
    for(let i=0;i<num;i++){
        // res.push("*".elzeroRepeat(count));
        res+="*".repeat(count)+"\n";
        count+=2;
        if(i==(num-1)){
            count-=2;
        }
    }
console.log(count)

     for(j=0;j<count;j++){
         count-=2;
        res1+="*".repeat(count)+"\n";
    }
    return res +res1 ;

  }

console.log(createStars(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// ************* 15
// ***********
// *********
// *******
// *****
// ***
// *
// task 50 =================================
console.log("task50 ================================");

console.log("task50 ================================");

function createStars(num) {
    // Your Code Here
      let res="";
      let res1="";
      let count=(num*2)-1;
      for(let i=0;i<num;i++){
          res+=" ".repeat(i);
          res+="*".repeat(count)+"\n";
          count-=2;
      }
  console.log(count)
  let count2=num-1;
       for(j=0;j<num;j++){
           res1+=" ".repeat(count2);
           count+=2;
          res1+="*".repeat(count)+"\n";
          count2--;

 
          
      }
      return res +res1 ;
  
  }
  
  console.log(createStars(6));
  
// Output Needed//remove star from each side
// ***********
//  *********
//   *******
//   *****
//     ***
//      *
//      *
//     ***
//   *****
//   *******
//  *********
// ***********

