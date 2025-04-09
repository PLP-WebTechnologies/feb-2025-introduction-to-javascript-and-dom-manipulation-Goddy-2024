// DOM Manipulation and JavaScript Basics

// 1. Change text content dynamically
const welcomeHeading = document.querySelector('header h1');
welcomeHeading.textContent = 'JavaScript & DOM Manipulation Workshop';

// 2. Modify CSS styles via JavaScript
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    // Add different background colors to cards
    const colors = ['#f0f8ff', '#fff0f5', '#f0fff0'];
    card.style.backgroundColor = colors[index % colors.length];
    card.style.padding = '20px';
    card.style.borderRadius = '10px';
    card.style.transition = 'all 0.3s ease';
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// 3. Add or remove elements when a button is clicked
// First, let's create a button and add it to the page
const buttonContainer = document.createElement('div');
buttonContainer.style.textAlign = 'center';
buttonContainer.style.margin = '20px 0';

const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Special Message';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = 'dodgerblue';
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';

buttonContainer.appendChild(toggleButton);
document.querySelector('main').prepend(buttonContainer);

// Create a special message element
const specialMessage = document.createElement('div');
specialMessage.textContent = 'This is a special message created with JavaScript!';
specialMessage.style.padding = '20px';
specialMessage.style.margin = '20px 0';
specialMessage.style.backgroundColor = '#ffeb3b';
specialMessage.style.borderRadius = '5px';
specialMessage.style.textAlign = 'center';
specialMessage.style.display = 'none'; // Start hidden

document.querySelector('main').prepend(specialMessage);

// Toggle the special message when button is clicked
toggleButton.addEventListener('click', () => {
    if (specialMessage.style.display === 'none') {
        specialMessage.style.display = 'block';
        toggleButton.textContent = 'Hide Special Message';
    } else {
        specialMessage.style.display = 'none';
        toggleButton.textContent = 'Show Special Message';
    }
});

// Additional DOM manipulation examples
// Change profile name text color on click
const profileName = document.querySelector('.profile span');
profileName.style.cursor = 'pointer';
profileName.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    profileName.style.color = randomColor;
});

// Add click counter to cards
cards.forEach(card => {
    let clickCount = 0;
    card.addEventListener('click', () => {
        clickCount++;
        const originalText = card.querySelector('p').textContent;
        card.querySelector('p').textContent = `${originalText} (Clicked ${clickCount}x)`;
    });
});
