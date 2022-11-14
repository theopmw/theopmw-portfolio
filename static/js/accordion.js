const accordion_element = document.querySelectorAll('.accordion');
const project_info = document.querySelector('.project-info');
const project_title = document.querySelector('.project_title');
const project_details = document.querySelector('.project-details');

// if (project_info.open) {
//   accordion_element.classList.add(open);
//   accordion_element.appendChild(project_details);
// }

// accordion_element.addEventListener('click', function (e) {
//   project_info.open = true;
//   accordion_element.classList.toggle('open');
// });

if (project_info.open) {
  accordion_element.classList.add(open);
  accordion_element.appendChild(project_details);
}

accordion_element.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    project_info.open = true;
    accordion.classList.toggle('open');
  });
});
// accordion_element.addEventListener('click', function (e) {
//   project_info.open = true;
//   accordion_element.classList.toggle('open');
// });

// const accordions = document.querySelectorAll('.accordion');

// const openAccordion = (accordion) => {
//   const content = accordion.querySelector('.accordion__content');
//   accordion.classList.add('accordion__active');
//   content.style.maxHeight = content.scrollHeight + 'px';
// };

// const closeAccordion = (accordion) => {
//   const content = accordion.querySelector('.accordion__content');
//   accordion.classList.remove('accordion__active');
//   content.style.maxHeight = 'null';
// };

// accordions.forEach((accordion) => {
//   const intro = accordion.querySelector('.accordion__intro');
//   const content = accordion.querySelector('.accordion__content');

//   intro.onclick = () => {
//     if (content.style.maxHeight) {
//       closeAccordion(accordion);
//     } else {
//       accordions.forEach((accordion) => closeAccordion(accordion));
//       openAccordion(accordion);
//     }
//   };
// });
