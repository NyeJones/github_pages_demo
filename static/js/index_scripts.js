const buttons = document.querySelectorAll('.alphabet button');
const groups = document.querySelectorAll('.letter-group');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.dataset.letter;

    // Hide all letter sections
    groups.forEach(group => {
      group.classList.remove('active');
    });

    // Show the selected one
    const target = document.getElementById('letter-' + letter);
    if (target) {
      target.classList.add('active');
    }
  });
});

document.addEventListener('click', function (e) {
  const header = e.target.closest('.item-header');
  if (!header) return;

  const item = header.parentElement;
  item.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
    const alphabetButtons = document.querySelectorAll('#alphabet-nav button[data-letter]');
    const showAllButton = document.getElementById('show-all');
    const sections = document.querySelectorAll('.letter-group');

    function showLetter(letter) {
        sections.forEach(sec => {
            sec.style.display = (sec.id === `letter-${letter}`) ? 'block' : 'none';
        });
    }

    alphabetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showLetter(btn.dataset.letter);
        });
    });

    showAllButton.addEventListener('click', () => {
        sections.forEach(sec => sec.style.display = 'block');
    });

    // Show all by default when page loads
    sections.forEach(sec => sec.style.display = 'block');
});
