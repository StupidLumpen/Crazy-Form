const formButton = document.getElementById('formButton')
const loginInput = document.getElementById('loginInput')
const passwordInput = document.getElementById('passwordInput')
const eyeButton = document.getElementById('eyeButton')

const correctLogin = () => {
    if (loginInput.value === '' || loginInput.value === null) {
        return false
    }

    return true
}

const correctPassword = () => {
    if (passwordInput.value === '' || passwordInput.value === null) {
        return false
    }

    return true
}

const runAway = () => {
    if (formButton.classList.contains('left') !== true) {
        formButton.classList.add('left')
        formButton.classList.remove('right')
        return 
    }

    formButton.classList.remove('left')
    formButton.classList.add('right')
}

const submit = () => {
    if (correctLogin() && correctPassword()) {

        if (passwordInput.value == 'barbieGirl') {
            alert( 'Welcome home sweet girl' )
            location.reload()
            return
        }
        
        alert('Wrong password(')
        return
    } 

    loginInput.style.borderColor = 'red'
    passwordInput.style.borderColor = 'red'
    runAway()
}

const showPassword = () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
        eyeButton.classList.add('shown')
        return
    }

    passwordInput.type = 'password'
    eyeButton.classList.remove('shown')
}


formButton.addEventListener('click', submit)
eyeButton.addEventListener('click', showPassword)



