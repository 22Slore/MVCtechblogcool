//post route for creating blog
const createBlogHandler = async (event) => {
    //stop browser from submit form
    event.preventDefault();

    const title = document.querySelector('#card-title').value;
    const text = document.querySelector('#card-text').value;


    //send both to server
    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { "Content-Type": "application/json" },

    });

    if (response.ok) {
        //redirect to dashboard
        document.location.replace('/dashboard');
    }
};

//event listner and query selector
document
    .querySelector('.blog-form')
    .addEventListener('submit', blogFormHandler);


//complete