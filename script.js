document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        addPost(username, message);

        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    }
});

function addPost(username, message) {
    const postContainer = document.getElementById('posts');
    
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const usernameElement = document.createElement('div');
    usernameElement.classList.add('username');
    usernameElement.textContent = username;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    postElement.appendChild(usernameElement);
    postElement.appendChild(messageElement);

    postContainer.appendChild(postElement);
}
