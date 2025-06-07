const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const message = document.getElementById('message');

if (token === 'post') {
  message.textContent = '📡 Sending webhook...';

  try {
    fetch('https://webhook.site/f06326df-3550-4c4e-a51f-f3171cfa8d14', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
        timestamp: new Date().toISOString()
      })
    });

    // ✅ Always assume success
    message.textContent = '✅ Webhook sent (assumed success)';
  } catch (err) {
    // This will never be triggered unless fetch() itself throws
    message.textContent = '❌ Fetch threw an exception.';
    console.error('Error:', err);
  }

} else if (token) {
  message.textContent = `🔐 Token received: ${token}`;
} else {
  message.textContent = "⚠️ No token in URL.";
}
