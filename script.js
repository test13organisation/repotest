const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const message = document.getElementById('message');

const webhookURL = 'https://webhook.site/f06326df-3550-4c4e-a51f-f3171cfa8d14';

if (token === 'post') {
  message.textContent = 'Sending webhook...';

  // ✅ Here's the fetch() call you asked for
  fetch(webhookURL, {
    method: 'POST',
    mode: 'no-cors', // <- Important to stop CORS error
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: token,
      source: 'GitHub Pages - Token Viewer',
      timestamp: new Date().toISOString()
    })
  })
  .then(() => {
    // ⚠ In no-cors mode, you can't read the response — so assume success
    message.textContent = '✅ Webhook sent (silent mode).';
    console.log('✅ Webhook successfully fired (no-cors)');
  })
  .catch(err => {
    // This should rarely be hit with no-cors mode
    message.textContent = '❌ Failed to send webhook.';
    console.error('❌ Error sending webhook:', err);
  });

} else if (token) {
  message.textContent = `🔐 Token received: ${token}`;
} else {
  message.textContent = "❌ No token was provided in the URL.";
}
