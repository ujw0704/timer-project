let hour = 0;
console.log(hour);
 let minutes =0;
 console.log("ujwal")
 let seconds  = 0;
 let para = document.querySelector(".para");
 console.log("ujwal")
 let intervalId;




 
 
 function startTimer(){
     console.log("ujwal");
     intervalId  =  setInterval(function(){
         
         seconds++
         para.innerHTML= "0" + hour +":0"+ minutes +":"+seconds;

         
         if(seconds ===60){
             
             
             
             minutes++
             seconds = 0 
             para.innerHTML= "0" + hour +":0"+ minutes +":"+seconds;


           





           if(minutes ===60){
               hour++
               minutes = 0
               para.innerHTML= "0" + hour +":0"+ minutes +":"+seconds;

            }
        }
        
   
    },1000);
}
    

function stopTimer(){

    console.log("ujwal")
    clearInterval(intervalId);
    para.innerHTML= "0" + hour +":0"+ minutes +":"+seconds;


}

function resetTimer(){
    console.log("ujwal");
     seconds = 0;
    minutes = 0;
     hour =   0; 
     para.innerHTML= "0" + hour +":0"+ minutes +":"+seconds;

  
}


    
    


