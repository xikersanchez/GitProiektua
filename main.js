// index-eko botoia eta kontainerra hartu
const button = document.getElementById('showMessageBtn');
const messageContainer = document.getElementById('messageContainer');

// event listenerra
button.addEventListener('click', () => {
  // mezua click iterakoan
  messageContainer.textContent = '¡klik in duzu!';
});
