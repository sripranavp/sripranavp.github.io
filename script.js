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
      setTimeout(typeText, 500); // Pause before typing the next text
    }
  }

  typeText(); // Start typing effect
});
