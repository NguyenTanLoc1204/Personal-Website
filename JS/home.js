document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  const intro = document.querySelector('.intro');
  const showCardBtn = document.getElementById('showCardBtn');
  const showIntroBtn = document.getElementById('showIntroBtn');

  showCardBtn.addEventListener('click', () => {
    intro.classList.remove('show');
    card.classList.remove('show'); // Reset animation
    void card.offsetWidth; // Re-trigger animation
    card.classList.add('show');
  });

  showIntroBtn.addEventListener('click', () => {
    card.classList.remove('show');
    intro.classList.remove('show'); // Reset animation
    void intro.offsetWidth;
    intro.classList.add('show');
  });
});