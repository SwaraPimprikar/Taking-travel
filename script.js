const btn = document.getElementById('hamburgerBtn');
const nav = document.getElementById('mobileNav');
btn.addEventListener('click', () => nav.classList.toggle('open'));

// "Share your story" hero button scrolls down to the form
const shareBtn = document.getElementById('shareStoryBtn');
const shareForm = document.getElementById('shareForm');
if (shareBtn && shareForm) {
  shareBtn.addEventListener('click', () => {
    shareForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// Form submission: validate + show a confirmation instead of doing nothing
const travelForm = document.getElementById('travelForm');
if (travelForm) {
  travelForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!travelForm.checkValidity()) {
      travelForm.reportValidity();
      return;
    }
    const submitBtn = travelForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Thanks for sharing! ✓';
    submitBtn.disabled = true;
    travelForm.reset();
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2500);
  });
}

// Placeholder links (href="#") shouldn't jerk the page to the top
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (e) => e.preventDefault());
});
