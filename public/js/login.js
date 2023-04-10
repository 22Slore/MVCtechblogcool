const loginFormHandler = async (event) => {
    //stop browser from submit form
    event.preventDefault();

    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;
    if (email && password) {
        //send both to server
        console.log(email, password, "thisdfakl;jdsakf")
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to login');
        }
    }
    console.log()
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

//complete