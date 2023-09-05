const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
  navbarToggler.setAttribute('aria-expanded', navbarCollapse.classList.contains('show'));
});
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const offset = window.pageYOffset;

  if (offset > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// JS for section 1

const heroText = document.querySelector('.hero-text');
const heroImages = document.querySelectorAll('.hero-slideshow img');
let activeImageIndex = 0;

// Function to change the active image in the slideshow
function changeActiveImage() {
  heroImages.forEach(image => {
    image.classList.remove('active');
  });

  heroImages[activeImageIndex].classList.add('active');
}

// Function to handle automatic slideshow
function startSlideshow() {
  setInterval(() => {
    activeImageIndex++;
    if (activeImageIndex >= heroImages.length) {
      activeImageIndex = 0;
    }
    changeActiveImage();
  }, 3000);
}

// Event listener to start the slideshow when the page loads
window.addEventListener('load', startSlideshow);

  // JavaScript logic for background animation
    // Add your logic here if needed
    
    // Example: Scroll-triggered animation
    window.addEventListener('scroll', animateOnScroll);
    
    function animateOnScroll() {
      var animationElements = document.querySelectorAll('.service-item');
      
      for (var i = 0; i < animationElements.length; i++) {
        var element = animationElements[i];
        var positionFromTop = element.getBoundingClientRect().top;
        
        if (positionFromTop - window.innerHeight <= 0) {
          element.classList.add('animate');
        }
      }}
      



      // Add the following script at the end of the body tag or in a separate JavaScript file

// JavaScript code

// Add the 'background-animation' class to the project section
// JavaScript code

// Add the 'background-animation' class to the project section
const projectSection = document.getElementById('project-section');
projectSection.classList.add('background-animation');

// Add event listeners for project card transitions
const projectCards = document.querySelectorAll('.project');
projectCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});



// Animate the CTA button on hover
$('.cta-btn').hover(function() {
  $(this).addClass('animated tada');
}, function() {
  $(this).removeClass('animated tada');
});

// Add 3D rotation effect to the company image on click
$('.abt-i').click(function() {
  $(this).addClass('animated rotate-3d');
});





document.addEventListener("DOMContentLoaded", function(event) {
  var footerElements = document.querySelectorAll(".footer-left, .footer-center, .footer-right, .footer-social-icons");
  footerElements.forEach(function(element) {
    element.classList.add("animate-footer");
  });
});


// JavaScript logic for styling and animation
const expertItems = document.querySelectorAll('.expertise-item');

expertItems.forEach((item) => {
  const icon = item.querySelector('.expertise-icon');
  const overlay = item.querySelector('.expertise-overlay');

  // Add event listeners for mouse enter and leave
  item.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.1)';
    overlay.style.opacity = '1';
    overlay.style.transform = 'translateY(0)';
  });

  item.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
    overlay.style.opacity = '0';
    overlay.style.transform = 'translateY(100%)';
  });
});





window.addEventListener('resize', function () {
  toggleClientDescriptions();
});

function toggleClientDescriptions() {
  var screenWidth = window.innerWidth;
  var clientDescriptions = document.getElementsByClassName('client-description');

  if (screenWidth <= 767) {
    for (var i = 0; i < clientDescriptions.length; i++) {
      clientDescriptions[i].style.display = 'none';
    }
  } else {
    for (var i = 0; i < clientDescriptions.length; i++) {
      clientDescriptions[i].style.display = 'block';
    }
  }
}

toggleClientDescriptions();




document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform login logic here
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  // Reset form
  document.getElementById("loginForm").reset();
});


// Animation for service sections
document.addEventListener("DOMContentLoaded", function() {
  const serviceSections = document.querySelectorAll(".service-section");
  
  serviceSections.forEach(function(section, index) {
    // Add animation class
    section.classList.add("animate-service");

    // Add alternating direction class
    if (index % 2 !== 0) {
      section.classList.add("alternate-direction");
    }
  });
});


// Smooth scroll to section on value card click
document.querySelectorAll('.value-card').forEach(card => {
  card.addEventListener('click', () => {
    const section = document.querySelector('.values-section');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  });
});


// Add JS logic here for any additional styling or interactivity

// Add a class on window resize to handle responsiveness
window.addEventListener('resize', handleResponsiveLayout);

// Function to handle responsive layout
function handleResponsiveLayout() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    // Apply mobile-specific styling
    document.querySelector('.col-md-6').style.width = '100%';
  } else {
    // Revert to default styling
    document.querySelector('.col-md-6').style.width = '50%';
  }
}

// Add animation using JavaScript (example)
const devopsSection = document.querySelector('.devops-section');
devopsSection.classList.add('animated', 'fadeIn');
