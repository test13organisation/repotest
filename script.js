const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const message = document.getElementById('message');

const webhookURL = 'https://webhook.site/f06326df-3550-4c4e-a51f-f3171cfa8d14';

if (token === 'post') {
  message.textContent = 'Sending webhook...';

  try {
    fetch(webhookURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
        source: 'GitHub Pages - Token Viewer',
        timestamp: new Date().toISOString()
      })
    });

    // ✅ You will always assume it sent (because no-cors gives you no info)
    message.textContent = '✅ Webhook sent (cannot confirm due to no-cors mode)';
    console.log('✅ Webhook sent (no-cors, browser gives no response info)');

  } catch (err) {
    // This would only trigger if fetch() itself is broken
    message.textContent = '❌ Failed to send webhook.';
    console.error('❌ Error during fetch():', err);
  }

} else if (token) {
  message.textContent = `🔐 Token received: ${token}`;
} else {
  message.textContent = "❌ No token was provided in the URL.";
}
