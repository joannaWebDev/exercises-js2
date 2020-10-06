// Paleta de colores
const paletaDeColores = {
    blue: {
        jumbotron: '#588fbd',
        donate: '#ffa500',
        volunteer: {
            background: 'black',
            textColor: 'white'
        }
    },
    orange: {
        jumbotron: '#f0ad4e',
        donate: '#5751fd',
        volunteer: {
            background: '#31b0d5',
            textColor: 'white'
        }
    },
    green: {
        jumbotron: '#87ca8a',
        donate: 'black',
        volunteer: {
            background: '#8c9c08',
            textColor: 'white'
        }
    }
}

// funcion principal
function changeColor(color) {
    document.querySelector('.jumbotron').style.backgroundColor = paletaDeColores[color].jumbotron
    const buttons = document.querySelectorAll('.buttons a')
    const donateButton = buttons[0]
    const volunteerButton = buttons[1]
    donateButton.style.backgroundColor = paletaDeColores[color].donate
    volunteerButton.style.backgroundColor = paletaDeColores[color].volunteer.background
    volunteerButton.style.color = paletaDeColores[color].volunteer.textColor
}

document.getElementById('blueBtn').addEventListener('click', () => changeColor('blue'))
document.getElementById('orangeBtn').addEventListener('click', () => changeColor('orange'))
document.getElementById('greenBtn').addEventListener('click', () => changeColor('green'))

//2
function validateEmailAdress(event) {
    event.preventDefault();
    const emailField = document.getElementById('exampleInputEmail1').value.includes('@');
    emailField.style.backgroundColor = 'white';
    if (!emailField.value.include('@')) {
        emailField.style.backgroundColor = 'red';
    }
}

function validateFieldsLength(event) {
    event.preventDefault();
    const fields = document.querySelectorAll('form input, form textarea');
    fields.forEach(
        field => {
            field.style.backgroundColor = 'white';
            if (field.value.length === 0) {
                field.style.backgroundColor = 'red';
            }
        }
    )
}

const submitBtn = document.querySelector('button[type=submit]');
submitBtn.addEventListener('click', (event) => validateEmailAdress(event));
submitBtn.addEventListener('click', (event) => validateFieldsLength(event));