const nameInput = document.getElementById('input-name');
const nameError = document.getElementById('invalid-name');
const mailInput = document.getElementById('input-mail');
const mailError = document.getElementById('invalid-mail');
const usernameInput = document.getElementById('input-username');
const usernameError = document.getElementById('invalid-username');
const passwordInput = document.getElementById('input-password');
const passwordError = document.getElementById('invalid-password');
const submitButton = document.getElementById('submit-button');

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

    document.querySelectorAll('p').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('input').forEach(el => el.classList.remove('invalid'));

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
        mailError.textContent = 'E-mail cannot be empty';
        mailError.classList.remove('hidden');
        isValid = false;
    } else if (!isValidEmail(mail)) {
        mailInput.classList.add('invalid');
        mailError.textContent = 'Please enter a valid e-mail';
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

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const duplicate = users.find(user => user.username === username || user.email === mail);
    if (duplicate) {
        alert(duplicate.username === username ? 'Username already exists' : 'Email already exists');
        return;
    }

    users.push({ name, email: mail, username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    nameInput.value = '';
    mailInput.value = '';
    usernameInput.value = '';
    passwordInput.value = '';
});
