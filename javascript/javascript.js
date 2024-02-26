const updateSubscribe = document.querySelector('.update-subscribe');
const checkTrue = document.querySelector('.check-true');
const Thanks = document.querySelector('.thanks')
const updatedFlexer = document.querySelector('.updated-flexer')
const thanksButton = document.querySelector('.thanks-button')
const updateInput = document.querySelector('.update-input');
const thanksEmail = document.querySelector('.thanks-email')

const emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function validation(event) {
    if (emailPattern.test(updateInput.value)) {
        return true
    } else {
        checkTrue.style.display = 'block'
        updateInput.style.border = '1.5px solid #FF6155'
        updateInput.style.background = 'pink'
        alert("you must fill the email")
        return false
    }
}

updateSubscribe.addEventListener('click', function (event) {
    if(!validation()) {
        event.preventDefault();
        return
    }
    Thanks.style.display = 'block'
    updatedFlexer.style.display = 'none'
    updateEmail()
})

function updateEmail() {
    var updateInput = document.querySelector('.update-input').value
    document.querySelector('.thanks-email').textContent = updateInput;
    return
}

thanksButton.addEventListener('click', function () {
    Thanks.style.display = 'none'
    updatedFlexer.style.display = 'block'
    updatedFlexer.style.display = 'flex';
})

