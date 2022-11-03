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

const versionControl = ['Git', 'GitHub'];

const design = ['Balsamiq', 'Figma'];

// set variables
let imgType = '.svg';
let imgs_languages = './assets/img/languages/';
let imgs_frameworks = './assets/img/frameworks/';
let imgs_version_control = './assets/img/version-control/';
let imgs_design = './assets/img/design/';
let ul_languages = "<div class='languages-container'><ul>";
let ul_frameworks = "<div class='frameworks-container'><ul>";
let ul_version_control = "<div class='version-control-container'><ul>";
let ul_design = "<div class='design-container'><ul>";

let languagesList = ul_languages;

let frameworksList = ul_frameworks;

let versionControlList = ul_version_control;

let designList = ul_design;

languages.map((language) => {
  languagesList += `<li class="skills-item"><img src="${imgs_languages}${language}${imgType}" alt="${language}"><h3>${language}</h3></li>`;
});
ul_languages += '</ul></div>';

frameworks.map((framework) => {
  frameworksList += `<li class="skills-item"><img src="${imgs_frameworks}${framework.toLowerCase()}${imgType}" alt="${framework}"><h3>${framework}</h3></li>`;
});
ul_frameworks += '</ul></div>';

versionControl.map((version) => {
  versionControlList += `<li class="skills-item"><img src="${imgs_version_control}${version.toLowerCase()}${imgType}" alt="${version}"><h3>${version}</h3></li>`;
});
ul_version_control += '</ul></div>';

design.map((design) => {
  designList += `<li class="skills-item"><img src="${imgs_design}${design.toLowerCase()}${imgType}" alt="${design}"><h3>${design}</h3></li>`;
});
ul_design += '</ul></div>';

// append all languages to #languages
let languagesDiv = document.getElementById('languages');
languagesDiv.innerHTML += languagesList;

// append all frameworks to #frameworks
let frameworksDiv = document.getElementById('frameworks');
frameworksDiv.innerHTML += frameworksList;

// append all version control to #version-control
let versionControlDiv = document.getElementById('version-control');
versionControlDiv.innerHTML += versionControlList;

// append all version control to #version-control
let designDiv = document.getElementById('design');
designDiv.innerHTML += designList;
