const accordion_element = document.querySelectorAll('.accordion');
const project_info = document.querySelector('.project-info');
const project_title = document.querySelector('.project_title');
const project_details = document.querySelector('.project-details');

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
