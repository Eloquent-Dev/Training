const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const email = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs();
})

function checkInputs() {
    checkInput(username)
    checkInput(email)
    checkInput(password)
    checkInput(password2)
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function checkInput(input){
    const result =  ExtractCondition(input)
    const capitalizedInput = input.id.charAt(0).toUpperCase() + input.id.slice(1)
    if(input.value.trim() === ''){
        setErrorFor(input, capitalizedInput + ' cannot be blank')
    }else if(result.condition){
        setErrorFor(input, result.customMessage)
    }
    else{
        setSuccessFor(input)
    }
} 

function ExtractCondition(input){
    let condition = false, customMessage = ''
    if(input.id === 'username'){
        condition = input.value.length < 5
        customMessage = 'Username must be at least 5 characters'
    }
    else if(input.id === 'email'){
        condition = !isEmail(input.value.trim())
        customMessage = 'Not a valid email'
    }
    else if(input.id === 'password' || input.id === 'password2'){
        condition = password.value !== password2.value
        customMessage = 'Passwords does not match'
    }
    return {condition, customMessage}
}

function isEmail (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}