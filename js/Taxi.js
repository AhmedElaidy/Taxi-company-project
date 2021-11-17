/**
 * Define Global Variables
 */
const links = document.querySelectorAll(".links");
var btn = document.querySelector(".top-btn");

// (function) : scroll to the section when clicking the link in the navbar 
links.forEach((item)=>{
    item.addEventListener("click" ,()=>{
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth" , block:"center"})
    })
})

// (function) : scroll to top button
btn.addEventListener('click' , ()=>{
    const le = document.getElementById(btn.getAttribute("data-link"));
    le.scrollIntoView({behavior:"smooth" , block:"center"});
});