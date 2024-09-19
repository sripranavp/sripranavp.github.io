document.addEventListener('DOMContentLoaded', () => {
  const animatedTextElement = document.querySelector('.animated-text');

  const texts = ['Developer', 'Engineer'];
  let index = 0;
  let textIndex = 0;

  function typeText() {
    if (textIndex < texts[index].length) {
      animatedTextElement.textContent += texts[index].charAt(textIndex);
      textIndex++;
      setTimeout(typeText, 100); // Speed of typing
    } else {
      setTimeout(() => {
        deleteText();
      }, 2000); // Pause before deleting
    }
  }

  function deleteText() {
    if (textIndex > 0) {
      animatedTextElement.textContent = texts[index].substring(0, textIndex - 1);
      textIndex--;
      setTimeout(deleteText, 50); // Speed of deleting
    } else {
      index = (index + 1) % texts.length;
      textIndex = 0; // Reset textIndex for the next word
      animatedTextElement.textContent = ""; // Clear text before typing
      setTimeout(typeText, 500); // Pause before typing the next text
    }
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  // Check for saved user preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.toggle('light-mode', currentTheme === 'light');
    sunIcon.style.display = currentTheme === 'light' ? 'none' : 'inline';
    moonIcon.style.display = currentTheme === 'light' ? 'inline' : 'none';
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    sunIcon.style.display = isLightMode ? 'none' : 'inline';
    moonIcon.style.display = isLightMode ? 'inline' : 'none';

    // Save user preference
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  });

  typeText(); // Start typing effect
});
