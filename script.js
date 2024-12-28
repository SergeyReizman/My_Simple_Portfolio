/**
 * script.js
 * This file contains JavaScript functionality for the portfolio website, including smooth scrolling,
 * active navigation link highlighting, and a "Back to Top" button.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio page scripts initialized.');

  // Select all navigation links and sections
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  /**
   * Smooth Scrolling Functionality
   * Prevents default link behavior and smoothly scrolls to the target section.
   */
  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default jump behavior

          const targetId = link.getAttribute('href'); // Get the target section ID from the link's href
          const targetElement = document.querySelector(targetId); // Find the target element by ID

          if (targetElement) {
              // Smoothly scroll to the target element
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          } else {
              // Log an error if the target element is not found
              console.error(`Target element with ID "${targetId}" not found.`);
          }
      });
  });

  /**
   * Active Navigation Link Highlighting Functionality
   * Highlights the active navigation link based on the user's current scroll position.
   */
  function highlightNavLink() {
      const scrollPosition = window.pageYOffset; // Get the current vertical scroll position (more efficient)

      sections.forEach(section => {
          const sectionTop = section.offsetTop; // Get the top offset of the section
          const sectionHeight = section.clientHeight; // Get the height of the section
          const sectionId = section.getAttribute('id'); // Get the ID of the section

          // Check if the section is currently in the viewport (with a small buffer)
          if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight * (2/3)) {
              navLinks.forEach(link => {
                  // If the link's href matches the section's ID, add the 'active' class
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active');
                  } else {
                      // Otherwise, remove the 'active' class
                      link.classList.remove('active');
                  }
              });
          }
      });
  }

  // Add event listeners for scroll and load events to trigger the highlighting function
  window.addEventListener('scroll', highlightNavLink); // Update highlighting on scroll
  window.addEventListener('load', highlightNavLink); // Update highlighting on initial page load


  /**
   * Back to Top Button Functionality
   * Creates a "Back to Top" button that appears when the user scrolls down and smoothly scrolls back to the top when clicked.
   */
  const backToTopButton = document.createElement('button'); // Create the button element
  backToTopButton.textContent = 'Back to Top'; // Set the button text
  backToTopButton.classList.add('back-to-top'); // Add a class for styling
  document.body.appendChild(backToTopButton); // Add the button to the page

  backToTopButton.addEventListener('click', () => {
      // Smoothly scroll to the top of the page
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  window.addEventListener('scroll', () => {
      // Show/hide the button based on the scroll position
      if (window.pageYOffset > 300) { // Show after scrolling down 300px
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none'; // Hide when at the top
      }
  });
});