const nameInput = document.getElementById('input-name')
const nameError = document.getElementById('invalid-name')
const mailInput = document.getElementById('input-mail')
const mailError = document.getElementById('invalid-mail')
const usernameInput = document.getElementById('input-username')
const usernameError = document.getElementById('invalid-username')
const passwordInput = document.getElementById('input-password')
const passwordError = document.getElementById('invalid-password')
const submitButton = document.getElementById('submit-button')

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return passwordRegex.test(password);
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelectorAll('.invalid-input').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.input-field').forEach(el => el.classList.remove('invalid'));

    const name = nameInput.value.trim();
    const mail = mailInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    let isValid = true;

    if (!name) {
        nameInput.classList.add('invalid');
        nameError.textContent = 'Name cannot be empty';
        nameError.classList.remove('hidden');
        isValid = false;
    }

    if (!mail) {
        mailInput.classList.add('invalid');
        mailError.textContent = "E-mail cannot be empty";
        mailError.classList.remove('hidden');
        isValid = false;
    } else if (!isValidEmail(mail)) {
        mailInput.classList.add('invalid');
        mailError.textContent = "Please enter a valid e-mail";
        mailError.classList.remove('hidden');
        isValid = false;
    }

    if (!username) {
        usernameInput.classList.add('invalid');
        usernameError.textContent = 'Username cannot be empty';
        usernameError.classList.remove('hidden');
        isValid = false;
    }

    if (!password) {
        passwordInput.classList.add('invalid');
        passwordError.textContent = 'Password cannot be empty';
        passwordError.classList.remove('hidden');
        isValid = false;
    } else if (!isValidPassword(password)) {
        passwordInput.classList.add('invalid');
        passwordError.textContent = 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character';
        passwordError.classList.remove('hidden');
        isValid = false;
    }

    if (!isValid) return;

    // submitButton.disabled = false

    alert(`User created successfully!\nName: ${name}\nE-mail: ${mail}\nUsername: ${username}\nPassword: ${password}`)

    // createUser(name, mail, username, password);
    window.location.href = 'index.html';
});
