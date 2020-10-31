
// global variables 
const number = document.getElementById("number");

let total = 0;

//event listener
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
 btn.addEventListener("click", function(e){
        if(e.currentTarget.classList.contains("decrease")){
            total--
            number.innerHTML= `${total}`;  
        } else if (e.currentTarget.classList.contains("increase")){
        total++
        number.innerHTML= `${total}`;  
        } else {
        total = 0;
        number.innerHTML= `${total}`;
            }
        if(total<0){
            number.style.backgroundColor="red";
        }
        if(total>0){
            number.style.backgroundColor="green";
        }
        if(total==0){
            number.style.backgroundColor="black";
        }
 }
 )
}
)






// a diffrent and simple way 
     //btns //
    //  const decreaseBtn= document.getElementById("btn-derease");
    //  const resetBtn= document.getElementById("btn-reset");
    //  const increaseBtn= document.getElementById("btn-increase");
    
// increaseBtn.addEventListener("click", increase);
// decreaseBtn.addEventListener("click", decrease);
// resetBtn.addEventListener("click", reset);



// function increase(){
//     total += 1;
//     number.innerHTML=`${total}`;
// };

// function decrease(){
//     total -= 1;
//     number.innerHTML=`${total}`;    
// };

// function reset(){
//     total = 0;
//     number.innerHTML=`${total}`;
// };



