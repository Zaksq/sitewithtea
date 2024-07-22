document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById('welcome-message');
    setTimeout(() => {
      welcomeMessage.style.display = 'none';
    }, 5000);
  });
  