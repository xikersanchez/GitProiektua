// index-eko botoia ta kontainerra hartu
const button = document.getElementById('showMessageBtn');
const messageContainer = document.getElementById('messageContainer');

// event listenerra
button.addEventListener('click', () => {
  // mezua click iterakon
  messageContainer.textContent = '¡Has hecho clic en el boton!';
});
