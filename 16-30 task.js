// task 16 =================================
console.log("task16 ================================");
function getCharacters(word, nums) {
    // Your Code Here
    return word.slice(0,nums) + word.slice(-nums);
  }
  console.log(getCharacters("Elzero School", 2)); // Elol
  console.log(getCharacters("Elzero School", 3)); // Elzool
// task 17 =================================
console.log("task17 ================================");
function formatName(theName) {
    // Your Code Here
    let r="";
    let i=0;
    let words= theName.split(" ");
    while(i<words.length){
        r+=words[i].slice(0,1)+".";
        i++;
    }
    r=r.slice(0,-1);
    return r;
  }
  
  console.log(formatName("Osama Elzero")); // O.e
  console.log(formatName("Elzero Web School")); // E.w.s


// let r;
// let i=0;
// let words= "Osama Elzero mariam".split(" ");
// console.log(words.length);
// while(i<words.length){
//     r+=words[i].slice(0,1)+".";
//     i++;
// }
// console.log(r);

// task 18 =================================
console.log("task18 ================================");
let st = "elzero";

console.log(st.slice(0,1).toLocaleUpperCase()+st.slice(1));
console.log(st.slice(0,1).toUpperCase()+st.slice(1));
console.log(st);
console.log(st);
console.log(st);
console.log(st);
console.log(st);
// task 19 =================================
console.log("task19 ================================");
let st1 = "Web SchoolElzero ";
console.log(st1.slice(-7,-1)+" "+st1.slice(-17,-14)+" "+st1.slice(-13,-7));
// Needed Output
// "Elzero Web School"
// task 20 =================================
console.log("task20 ================================");
let st2 = "Elzero";
console.log(st2.slice(-1));
console.log(st2.slice(5,6));
console.log(st2.slice(5));
console.log(st2.slice(-1));
console.log(st2.slice(-1));
console.log(st2.slice(-1));
console.log(st2.slice(-1));

// Needed Output
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// task 21 =================================
console.log("task21 ================================");
function getLastDigit(num) {
    // Your Code Here
    let num1=num.toString().slice(-1);
    return Number(num1);
  }
  
  console.log(getLastDigit(1)); // 1
  console.log(getLastDigit(18)); // 8
  console.log(getLastDigit(305)); // 5
  console.log(getLastDigit(1569)); // 9
  console.log(typeof getLastDigit(1569)); // Number
// task 22 =================================
console.log("task22 ================================");
let str1 = "AElzero";
let str2 = "ZAcademy";

console.log(str1.slice(1)+" "+str2.slice(1)); // Elzero Academy
// task 23 =================================
console.log("task23 ================================");
function reversing(str) {
    // Write Your Code Here
    let words= str.split(" ");
    let r="";
    let res=[];
    let char=[];

    for(let i=0;i<words.length;i++){
         r=words[i].slice(2,7).split("");    
         res.push(r.reverse().join(""));
          char.push(words[i].slice(0,2));
          char.push(words[i].slice(-1));
    }
    return char[0]+res[0]+char[1]+" "+char[2]+res[1];
    //  let r=words[0].slice(2,7).split("");
    //  return words[0].slice(0,2)+r.reverse().join("")+words[0].slice(-1);
     
  }
  
  console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl
// task 24 =================================
console.log("task24 ================================");

function dashBetweenOdd(num) {
    // Write Your Code Here
    // let arrNum=num.toString();
    let arrNum=num.toString().split("");
    // let res="";
    let res=arrNum[0];
    for(let i=0;i<arrNum.length-1;i++){
    // if( arrNum[i].match(/[13579](?=[13579])/) ){
    //     res+= arrNum[i].match(/[13579](?=[13579])/) +"-" 
    //     }
    // }
    // return res;
    // if(arrNum[i-1]%2!=0 && arrNum[i]%2!=0){
    if(arrNum[i]%2!=0 && arrNum[i+1]%2!=0){

        res+="-"+arrNum[i+1];
        
    }else{

        res+=arrNum[i+1];
    } 
    }
   return res;
}
  
  console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
  console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
// task 25 =================================
console.log("task25 ================================");
let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArr=[]

console.log(myArr);
// Output Needed
// []
// task 26 =================================
console.log("task26 ================================");

// task 27 =================================
console.log("task27 ================================");
let myArr2 = ["69", "108", "122", "101", "114", "111"];
let result="";
// Your Code Here
for(let j=0;j<myArr2.length;j++){
    result+=String.fromCharCode(myArr2[j])
}
console.log(result); // Elzero
// task 28 =================================
console.log("task28 ================================");

// Write Your Function Here
function customMerge(...param){
    let res=[];

    for(let i=0;i<param.length;i++){
        for(let j=0;j<param[i].length;j++){
            res.push(Number(param[i][j]));
        }
    }
    return res.sort((a, b) => a - b);

}

console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]

// task 29 =================================
console.log("task29 ================================");


// Write Your Function Here
function customCalc(...param){
    let res=[];
    let result=0;
    for(let i=0;i<param.length;i++){      
        if(!isNaN(parseInt(param[i]))){
            res.push(parseInt(param[i]));  
        }   
    }

    for(j=0;j<res.length;j++){
        result+=res[j];
        
    }
    // console.log(res.slice(0,1));
    // console.log(res.slice(-1));
    return result*res.slice(0,1)*res.slice(-1);

}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10

// task 30 =================================
console.log("task30 ================================");
for (let i = 1; i < 100; i += 5) {
    // Your Code Here
    
    if(i%2!==0){
        console.log(i);
    }
  }
  
  // Output Needed
//   1
//   11
//   21
//   31
//   41
//   51
//   61
//   71
//   81
//   91