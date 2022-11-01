const languages = ['HTML', 'CSS', 'JavaScript', 'Python'];

const frameworks = [
  'Bootstrap',
  'Materialize',
  'JQuery',
  'Sass',
  'Flask',
  'Jinja2',
  'Django',
];

// set variables
let imgType = '.svg';
let imgs_languages = '/assets/img/languages/';
let imgs_frameworks = '/assets/img/frameworks/';
let ul_languages = "<div class='languages-container'><ul>";
let ul_frameworks = "<div class='frameworks-container'><ul>";

let languagesList = ul_languages;

let frameworksList = ul_frameworks;

languages.map((language) => {
  languagesList += `<li class="skills-item"><img src="${imgs_languages}${language.toLowerCase()}${imgType}" alt="${language}" lazyload="on"><h3>${language}</h3></li>`;
});
ul_languages += '</ul></div>';

frameworks.map((framework) => {
  frameworksList += `<li class="skills-item"><img src="${imgs_frameworks}${framework.toLowerCase()}${imgType}" alt="${framework}" lazyload="on"><h3>${framework}</h3></li>`;
});
ul_frameworks += '</ul></div>';

// append all rows to #languages
let languagesDiv = document.getElementById('languages');
languagesDiv.innerHTML += languagesList;

// append all rows to #frameworks
let frameworksDiv = document.getElementById('frameworks');
frameworksDiv.innerHTML += frameworksList;
