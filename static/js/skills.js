const languages = ['HTML', 'CSS', 'JavaScript', 'Python'];

// set variables
let imgType = '.svg';
let imgs_languages = '/assets/img/languages/';
// let imgs_frameworks = "static/img/skills/frameworks_libraries/";
let ul_languages = "<div class='languages-container'><ul>";
// let ul_frameworks = "<div class='frameworks-container'><ul>";

let languagesList = ul_languages;

languages.map((language) => {
  languagesList += `<li class="skills-item"><img src="${imgs_languages}${language.toLowerCase()}${imgType}" alt="${language}" lazyload="on"><h3>${language}</h3></li>`;
});
ul_languages += '</ul></div>';

// append all rows to #languages
let languagesDiv = document.getElementById('languages');
languagesDiv.innerHTML += languagesList;
