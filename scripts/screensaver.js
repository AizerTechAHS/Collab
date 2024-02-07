  let timer;
  const screensaver = document.getElementById('screensaver');

  function resetScreensaver() {
    screensaver.style.display = 'none';
    clearTimeout(timer);
    timer = setTimeout(() => {
      screensaver.style.display = 'flex';
    }, 5000);
  }

  document.addEventListener('mousemove', resetScreensaver);
  document.addEventListener('keypress', resetScreensaver);

resetScreensaver();
