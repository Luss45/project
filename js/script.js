let circ =document.querySelector(".circ");
document.addEventListener("click",(e)=>{
	circ.style.left = `${e.clientX-circ.clientWidth/2}px`;
	circ.style.top = `${e.clientY-circ.clientHeight/2}px`;
});

