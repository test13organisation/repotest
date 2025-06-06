const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

const message = document.getElementById('message');

if (token) {
  message.textContent = `Your token is: ${token}`;
} else {
  message.textContent = "No token was provided in the URL.";
}
