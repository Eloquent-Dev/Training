const toTop = document.querySelector(".to_top")
const container = document.querySelector(".container")

container.addEventListener("scroll", ()=>{
    if(container.scrollTop > 100){
        toTop.classList.add("active")
    }
    else {
        toTop.classList.remove("active")
    }
})