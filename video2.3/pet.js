function calculateFoodOrder(){
 var ani=document.getElementById('txtanim');
 var fd=document.getElementById('txtfood');
 var animal=Number(ani.value);
 var food=Number(fd.value);
 var resul=document.getElementById('res');
 var final= animal * food;
 
 if((animal>=0) &&(food>=0)){
  resul.innerHTML=''
   resul.innerHTML+=`The result is ${final}.`
   
  }else{
      resul.innerHTML=`You should input positive numbers only.Try again.`
      
  }
 
}
