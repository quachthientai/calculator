let display = document.getElementById('display__screen');
let clear = document.getElementById('button__clear'); 
let equal = document.getElementById('button__equal');
let del = document.getElementById('button__del');
let operation = document.querySelectorAll('.button__operation');
let num = document.querySelectorAll('.button__num');
let num0 = document.getElementById('num_0');

window.onload = () =>{
   display.value = '';
}

del.addEventListener('click',function(){
   display.value = display.value.substring(0,display.value.length-1);
})

clear.addEventListener('click', function() {
   display.value = '';
})

num.forEach(button_num => {
   button_num.addEventListener('click', function(){
      if(button_num.value === '0'){
         if(display.value.substring(0)){
            display.value += button_num.value;
         }
      }else{
         display.value += button_num.value;
      }
   })
})

operation.forEach(button_operation => {
   button_operation.addEventListener('click', function(){
      if(display.value === ''){
         display.value = '';
      }else{
         display.value += button_operation.value;
      }
   })
})

equal.addEventListener('click', function(){
   let input = display.value;
   let result = eval(display.value);
   
   if(input === '' || input === NaN){
      alert('Invalid value, please try again');
   }else{
      if(Number.isInteger(result)){
         display.value = result;
      }else{
         display.value = Number.parseFloat(result).toFixed(2);
      }
   }
})

