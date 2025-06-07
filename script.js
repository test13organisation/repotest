const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const message = document.getElementById('message');

// Your Webhook.site URL
const webhookURL = 'https://webhook.site/f06326df-3550-4c4e-a51f-f3171cfa8d14';

if (token === 'post') {
  message.textContent = 'Sending webhook...';

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: token,
      source: 'GitHub Pages - Token Viewer',
      timestamp: new Date().toISOString()
    })
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(data => {
      message.textContent = '✅ Webhook sent successfully!';
      console.log('Webhook response:', data);
    })
    .catch(err => {
      message.textContent = '❌ Failed to send webhook.';
      console.error('Error sending webhook:', err);
    });

} else if (token) {
  message.textContent = `Your token is: ${token}`;
} else {
  message.textContent = "No token was provided in the URL.";
}
