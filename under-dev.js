let a = document.querySelector(".crsr");

document.querySelector(".box").addEventListener("mousemove", (xoy) => {
    a.style.left = xoy.x + "px";
    a.style.top = xoy.y + "px";
});
document.querySelector(".box").addEventListener("mouseenter", ()=>{
    a.style.opacity = 1
});
document.querySelector(".box").addEventListener("mouseleave", ()=>{
    a.style.opacity = 0
}); 