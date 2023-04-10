//post route for creating new comment
const createCommentHandler = async (event) => {
    //stop browser from submit form
    event.preventDefault();

    const title = document.querySelector('#comment-title').ariaValueMax.trim();
    const text = document.querySelector('#comment-text').ariaValueMax.trim();


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
    .querySelector('.comment -form')
    .addEventListener('submit', createCommentHandler);


//complete

//instead of username and password use textId and textContent
// which will be the body content for post