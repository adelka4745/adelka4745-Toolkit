document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-click');
  const message = document.getElementById('message');
  let clickCount = 0;

  btn.addEventListener('click', function() {
    clickCount++;
    message.textContent = `Кнопка наж��та ${clickCount} раз(а)!`;
    message.classList.add('show');

    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 100);
  });

  console.log('adelka4745 Toolkit loaded successfully');
  console.log('Version: 1.0.0');
});
