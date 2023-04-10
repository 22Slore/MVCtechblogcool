//post route for delete blog
const deleteBlogHandler = async (event) => {
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
//event listners etc down here
document
    .querySelector('.signup-form')
    .addEventListener('submit', deleteBlogHandler);
//similar to login

//incomplete needs to be reformatted