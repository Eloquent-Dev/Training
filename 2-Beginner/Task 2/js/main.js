let bar = document.getElementById("bar")
let input = document.getElementById("searchbar")

const expand = (event) => {
    event.stopPropagation();
    if(bar.classList.contains("shrinked"))
    {
        
        bar.classList.remove("shrinked")
        bar.classList.add("expanded")

        input.focus()
    }
}

const shrink = () => {
    if(bar.classList.contains("expanded"))
    {
        bar.classList.remove("expanded")
        bar.classList.add("shrinked")
    }
}

bar.addEventListener("click",expand)
window.addEventListener("click",shrink)