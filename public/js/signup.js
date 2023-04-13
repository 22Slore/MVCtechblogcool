const signupFormHandler = async (event) => {
    //stop browser from submit form
    event.preventDefault();
    console.log('hit');
    const email = document.querySelector('#signupUsername').value;
    const password = document.querySelector('#signupPassword').value;
    console.log(email, password);
    if (email && password) {
        //send both to server
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('couldnt signup');
        }
    }
};
//listners
document
    .querySelector('#signUp')
    .addEventListener('submit', signupFormHandler);
//complete