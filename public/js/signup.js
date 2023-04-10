const signupFormHandler = async (event) => {
    //stop browser from submit form
    event.preventDefault();

    const email = document.querySelector('#signupUsername').ariaValueMax.trim();
    const password = document.querySelector('#signupPassword').ariaValueMax.trim();

    if (email && password) {
        //send both to server
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to signup');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

//complete