var display=document.getElementById('display');

function addToDisplay(value){
          display.innerText+=value;
}
// Function clear
function clearDisplay(){
          display.innerHTML='';

}
//function caculate
function calculate(){
          let exp=display.innerText;
          //withou using try block

          if(exp===''){
                    alert("Please enter");
                    return;
          }

          if(isNaN(eval(exp))){
                    alert("Invalid Input");
                    return;
          }
          try {

                    let result=eval(exp);
                    display.innerText =result;
                    } catch(error){
                              alert("Error!");

                    }
                    
          

          
}
