document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signup-form');
  const successCard = document.getElementById('success-card');
  const emailInput = document.getElementById('email-input');
  const subscribeBtn = document.getElementById('subscribe-btn');
  const dismissBtn = document.getElementById('dismiss-btn');
  const userEmailSpan = document.getElementById('user-email');
  const emailError = document.getElementById('email-error');

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Show error message
  function showError(message) {
    emailError.textContent = message;
    emailInput.classList.add('error');
  }

  // Hide error message
  function hideError() {
    emailError.textContent = '';
    emailInput.classList.remove('error');
  }

  // Show success card
  function showSuccessCard(email) {
    signupForm.style.display = 'none';
    successCard.style.display = 'flex';
    userEmailSpan.textContent = email;
  }

  // Hide success card and show signup form
  function hideSuccessCard() {
    successCard.style.display = 'none';
    signupForm.style.display = 'flex';
    emailInput.value = '';
    hideError();
  }

  // Subscribe button click handler
  subscribeBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();
    
    if (!email) {
      showError('Valid email required');
      return;
    }
    
    if (!isValidEmail(email)) {
      showError('Valid email required');
      return;
    }
    
    hideError();
    showSuccessCard(email);
  });

  // Dismiss button click handler
  dismissBtn.addEventListener('click', function() {
    hideSuccessCard();
  });

  // Enter key handler for email input
  emailInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      subscribeBtn.click();
    }
  });

  // Clear error when user starts typing
  emailInput.addEventListener('input', function() {
    if (emailInput.value.trim()) {
      hideError();
    }
  });
}); 