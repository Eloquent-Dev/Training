const columns = document.querySelectorAll('.column')
const activeBtn = document.getElementById('active-btn')
const oneBtn = document.getElementById('one-btn')
const twoBtn = document.getElementById('two-btn')
const fourBtn = document.getElementById('four-btn')

const buttons = [oneBtn,twoBtn,fourBtn]

const hamMenu = document.querySelector('.ham-menu')

const offScreenMenu = document.querySelector('.offscreen-menu')

hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})

function clearColumnClasses(){
    columns.forEach(col=>{
        col.classList.remove('one-column','two-columns','four-columns')
    })
}

function clearActiveBtn() {
    buttons.forEach(btn=>{
        btn.classList.remove('active-btn')
    })
}

function one(){
    clearColumnClasses()
    clearActiveBtn()
    columns.forEach(col => {
    col.classList.add('one-column')
    oneBtn.classList.add('active-btn')
})
}

function two(){
    clearColumnClasses()
    clearActiveBtn()
    columns.forEach(col=>{
        col.classList.add('two-columns')
        twoBtn.classList.add('active-btn')
    })
}

function four(){
    clearColumnClasses()
    clearActiveBtn()
    fourBtn.classList.add('active-btn')
}

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

