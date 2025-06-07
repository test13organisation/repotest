const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const message = document.getElementById('message');

// ✅ Your Webhook.site URL
const webhookURL = 'https://webhook.site/f06326df-3550-4c4e-a51f-f3171cfa8d14';

if (token === 'post') {
  message.textContent = '📡 Sending webhook...';

  // Fire & forget — no error checking possible in 'no-cors'
  fetch(webhookURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: token,
      timestamp: new Date().toISOString(),
      source: 'github-pages'
    })
  });

  // ✅ We *assume* success — no way to know in browser
  message.textContent = '✅ Webhook fired (browser cannot verify response).';

} else if (token) {
  message.textContent = `🔐 Token: ${token}`;
} else {
  message.textContent = "⚠️ No token provided in the URL.";
}
