// Define a variable to keep track of the menu toggle state
let showMenu = true;

// Get references to the relevant HTML elements
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');
const orderButtons = document.querySelectorAll('.pedir');

// Attach an event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'on' class on the menu content element
  menuContent.classList.toggle('on', showMenu);
  // Toggle the body overflow property to prevent scrolling
  document.body.style.overflow = showMenu ? 'hidden' : 'initial';
  // Invert the menu toggle state
  showMenu = !showMenu;
});

// Attach an event listener to each 'pedir' button
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Redirect to the specified URL when the button is clicked
    window.location.href = 'https://mpago.la/2cVCXwR';
  });
});





    