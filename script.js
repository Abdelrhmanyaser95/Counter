let count = 0;

const value= document.querySelector("#value");
const butto= document.querySelectorAll(".buttons");

const dec= document.querySelector(".decrease");
const inc= document.querySelector(".increase");
const reset= document.querySelector(".Reset");

dec.addEventListener("click",function(){
    count -- ; 
    value.textContent = count;
    value.style.color= "green";
     
})
inc.addEventListener("click",function(){
    count++;
    value.textContent = count;
    value.style.color= "red";

})
reset.addEventListener("click",function(){
    count = 0  ;
    value.textContent = count;
    value.style.color= "black";
})

