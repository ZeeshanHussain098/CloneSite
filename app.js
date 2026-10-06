let darkmode = document.querySelector(".nav-right i");
let body = document.querySelector("body");
let links = document.querySelectorAll("a");

darkmode.addEventListener("click",()=>{
 body.classList.toggle("body")
})

 function darkTheme(){
  body.style.backgroundColor = "black";
  body.style.color = "white";
  for(let i = 0; i<links.length; i++){
    links[i].style.color=("white")
    
 }};
 //javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}
