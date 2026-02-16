const column1 = document.getElementById('column1')
const column2 = document.getElementById('column2')
const column3 = document.getElementById('column3')
const column4 = document.getElementById('column4')
const toTop = document.querySelector('.to-top');

function full(){
    column1.style.width = '100%'
    column2.style.width = '100%'
    column3.style.width = '100%'
    column4.style.width = '100%'
}

function twoColumns(){
    column1.style.width = '50%'
    column2.style.width = '50%'
    column3.style.width = '50%'
    column4.style.width = '50%'
}

function fourColumns(){
    column1.style.width = '25%'
    column2.style.width = '25%'
    column3.style.width = '25%'
    column4.style.width = '25%'
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100){
        toTop.classList.add('active')
    }
    else{
        toTop.classList.remove('active')
    }
})

//Task 5

var links = document.querySelectorAll('.links ul li')
var view_wrap = document.querySelectorAll('.view-wrap')

links.forEach(function (link){
    link.addEventListener('click', function (){
        links.forEach(function (item){
            item.classList.remove('active')
        })

        link.classList.add('active')

        var link_view = link.getAttribute('data-view')

        view_wrap.forEach(function (view){
            view.style.display = 'none'
        })
        if(link_view == 'list-view'){
            document.querySelector('.'+link_view).style.display = 'block'
        }
        else{
            document.querySelector('.'+link_view).style.display = 'block'
        }
    })
})

var share_btn = document.querySelector('.share-btn')
var toggle_btn = document.querySelector('.toggle-button')

share_btn.addEventListener('click', ()=>{
    toggle_btn.classList.toggle('active')
})