// Function to enable smooth scrolling for anchor links
function smoothScroll() {
    // Select all anchor links with href starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      // Add click event listener to each anchor
      anchor.addEventListener('click', function (e) {
        // Prevent default link behavior
        e.preventDefault();
        // Scroll to the element with the href value smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
  
  // Call the smoothScroll function
  smoothScroll();

// Function to add a "Back to Top" button
function addBackToTopButton() {
  // Create a new button element
  const button = document.createElement('button');
  
  // Set the button text
  button.textContent = 'Back to Top';
  
  // Style the button
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.display = 'none';
  
  // Add the button to the document body
  document.body.appendChild(button);

  // Add scroll event listener
  window.addEventListener('scroll', () => {
    // Show button when user scrolls down 300px from the top
    if (window.pageYOffset > 300) {
      button.style.display = 'block';
    } else {
      // Hide button when user is near the top
      button.style.display = 'none';
    }
  });

  // Add click event listener to the button
  button.addEventListener('click', () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Call the addBackToTopButton function
addBackToTopButton();