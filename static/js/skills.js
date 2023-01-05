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

const databases = ['MongoDB', 'Postgres', 'MySQL'];

const versionControl = ['Git', 'GitHub'];

const design = ['Balsamiq', 'Figma'];

const other = ['Heroku', 'AWS', 'Stripe', 'Google-Maps'];

const currentlyLearning = ['React'];

// set variables
const imgType = '.svg';
const imgs_languages = './assets/img/languages/';
const imgs_frameworks = './assets/img/frameworks/';
const imgs_databases = './assets/img/databases/';
const imgs_version_control = './assets/img/version-control/';
const imgs_design = './assets/img/design/';
const imgs_other = './assets/img/other-tools/';
const imgs_current = './assets/img/currently-learning/';

let ul_languages = "<div class='languages-container'><ul>";
let ul_frameworks = "<div class='frameworks-container'><ul>";
let ul_databases = "<div class='databases-container'><ul>";
let ul_version_control = "<div class='version-control-container'><ul>";
let ul_design = "<div class='design-container'><ul>";
let ul_other = "<div class='other-tools-container'><ul>";
let ul_current = "<div class='currently-learning-container'><ul>";

let languagesList = ul_languages;

let frameworksList = ul_frameworks;

let databasesList = ul_databases;

let versionControlList = ul_version_control;

let designList = ul_design;

let otherList = ul_other;

let currentList = ul_current;

languages.map((language) => {
  languagesList += `<li class="skills-item"><img src="${imgs_languages}${language}${imgType}" alt="${language}"><h3>${language}</h3></li>`;
});
ul_languages += '</ul></div>';

frameworks.map((framework) => {
  frameworksList += `<li class="skills-item"><img src="${imgs_frameworks}${framework}${imgType}" alt="${framework}"><h3>${framework}</h3></li>`;
});
ul_frameworks += '</ul></div>';

databases.map((database) => {
  databasesList += `<li class="skills-item"><img src="${imgs_databases}${database}${imgType}" alt="${database}"><h3>${database}</h3></li>`;
});
ul_databases += '</ul></div>';

versionControl.map((version) => {
  versionControlList += `<li class="skills-item"><img src="${imgs_version_control}${version}${imgType}" alt="${version}"><h3>${version}</h3></li>`;
});
ul_version_control += '</ul></div>';

design.map((design) => {
  designList += `<li class="skills-item"><img src="${imgs_design}${design}${imgType}" alt="${design}"><h3>${design}</h3></li>`;
});
ul_design += '</ul></div>';

other.map((other) => {
  otherList += `<li class="skills-item"><img src="${imgs_other}${other}${imgType}" alt="${other}"><h3>${other}</h3></li>`;
});
ul_other += '</ul></div>';

currentlyLearning.map((current) => {
  currentList += `<li class="skills-item"><img src="${imgs_current}${current}${imgType}" alt="${current}"><h3>${current}</h3></li>`;
});
ul_current += '</ul></div>';

// append all languages to #languages
let languagesDiv = document.getElementById('languages');
languagesDiv.innerHTML += languagesList;

// append all frameworks to #frameworks
let frameworksDiv = document.getElementById('frameworks');
frameworksDiv.innerHTML += frameworksList;

// append all databases to #databases
let databasesDiv = document.getElementById('databases');
databasesDiv.innerHTML += databasesList;

// append all version control to #version-control
let versionControlDiv = document.getElementById('version-control');
versionControlDiv.innerHTML += versionControlList;

// append all design to #design
let designDiv = document.getElementById('design');
designDiv.innerHTML += designList;

// append all other tools to #other-tools
let otherDiv = document.getElementById('other-tools');
otherDiv.innerHTML += otherList;

// Update Google Maps API text
$('.skills-item h3:contains(Google-Maps)').text('Google Maps API');

// append all currently learning to #current
let currentDiv = document.getElementById('current');
currentDiv.innerHTML += currentList;
