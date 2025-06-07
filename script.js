const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const message = document.getElementById('message');

if (token === 'post') {
  message.textContent = '📡 Sending webhook...';

  fetch('https://webhook.site/f06326df-3550-4c4e-a51f-f3171cfa8d14', {
    method: 'POST',
    mode: 'no-cors', // <- hides response info
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: token,
      timestamp: new Date().toISOString()
    })
  });

  // ✅ Always assume success
  message.textContent = '✅ Webhook fired (browser cannot verify it).';

} else if (token) {
  message.textContent = `🔐 Token: ${token}`;
} else {
  message.textContent = "⚠️ No token in URL.";
}
