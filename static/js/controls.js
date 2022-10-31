const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const pageTransitions = () => {
  // Active button on click
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      this.classList += ' active-btn';
    });
  }

  // Toggle section active class
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove active class from other buttons
      sectBtn.forEach((btn) => {
        btn.classList.remove('active');
      });

      // Add active class to button on click event
      e.target.classList.add('active');

      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      // Add active class
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
};

// function pageTransitions() {
//   // Active button on click
//   for (let i = 0; i < sectBtn.length; i++) {
//     sectBtn[i].addEventListener('click', function () {
//       let currentBtn = document.querySelectorAll('.active-btn');
//       currentBtn[0].className = currentBtn[0].className.replace(
//         'active-btn',
//         ''
//       );
//       this.className += ' active-btn';
//     });
//   }
// }

pageTransitions();
