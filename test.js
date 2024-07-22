let area=document.querySelector("textarea");
let btn=document.querySelector("button");
let output=document.querySelector(".output");
console.log(area);
console.log(btn);

// btn.onclick=function importData() {
//     let input = document.createElement('input');
//     input.type = 'file';
//     input.id="fileTxt";
//     input.style="display:none";
//     document.body.appendChild(input);
//     let inputI = document.getElementById('fileTxt');
//     document.getElementById('fileTxt').click();

//     inputI.addEventListener('change', (e)=> {
      
//         let reader = new FileReader();
      
//         reader.readAsText(inputI.files[0]);
        
      
//         reader.addEventListener ( 'load',()=> {
//             output.textContent=reader.result;
//         });
      
//       })
// }

btn.addEventListener('click', function() {
    var content = area.value;
    var blob = new Blob([content], { type: 'text/plain' });

    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'example.txt';
    a.click();
});