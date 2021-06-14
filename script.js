var button = document.getElementsByClassName("button");
var screen = document.getElementById("sol");
var op1 = 0;
var op2 = 0;
var operator = null;

for(var i = 0 ; i < button.length ; i++){

    button[i].addEventListener('click' , function fun(){
            
               var input = this.getAttribute('data-value');

               if(input == '+'){
                  operator = '+';
                  op1 = parseFloat(screen.textContent); 
                  console.log("op1 : " , op1);
                  screen.innerHTML = "";
                  
               }else if(input == '-'){
                 
                  operator = '-';
                  op1 = parseFloat(screen.textContent); 
                  screen.innerHTML = "";
              }else if(input == '*'){
                  operator = '*';
                  op1 = parseFloat(screen.textContent); 
                  screen.innerHTML = "";

               }else if(input == '/'){
                operator = '/';
                op1 = parseFloat(screen.textContent); 
                screen.innerHTML = "";

               }else if(input == '%'){
                operator = '%';
                op1 = parseFloat(screen.textContent); 
                op1 = op1/100;
                screen.innerHTML = op1;
                  
               }
               else if(input == '='){
                   
                   op2 = parseFloat(screen.textContent);
                   var result = eval(op1 + " " + operator + " " + op2);
                   if(Number.isInteger(result)){
                       screen.innerHTML = result;
                       console.log(screen.innerHTML);
                   }else{
                   screen.innerHTML = result.toPrecision(4);
                   console.log(screen.innerHTML);
                   }
                  
               }else if(input == '10'){
                   screen.innerHTML = "";
                   
               }else if(input == '_'){
                     op1 = parseFloat(screen.textContent);
                     op1 = -1 * op1;
                     screen.innerHTML = op1;
               }
               else{
                screen.innerHTML += input;
               }
    });
}
