const sections = document.querySelectorAll(".hidden")

function revealOnScroll(){
const windowHeight = window.innerHeight;

sections.forEach(section =>{
    const secTop = section.getBoundingClientRect().top;
    const secBottom = section.getBoundingClientRect().bottom;
    if(secTop < windowHeight - 100 && secBottom > 100){
        section.classList.add("show")
    }
    else{
        section.classList.remove("show")
    }
})

}
window.addEventListener("scroll",revealOnScroll)

revealOnScroll()