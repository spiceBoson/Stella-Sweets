import { initializeNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  // Update the footer year
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Initialize navigation
  initializeNavigation();
});