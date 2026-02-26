document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.team-card');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const targetId = card.getAttribute('data-target');
      const target = document.querySelector(targetId);

      // Close all other extra-details
      document.querySelectorAll('.extra-details.show').forEach(openEl => {
        if (openEl !== target) {
          openEl.classList.remove('show');
        }
      });

      // Toggle this card's extra details
      target.classList.toggle('show');
    });
  });
});