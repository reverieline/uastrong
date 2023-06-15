let locale = "en";

const translations = {
  "en": {
    "title": "STRONG TOGETHER",
    "feedback": "FEEDBACK",
  },
  "uk": {
    "title": "РАЗОМ МИ СИЛА",
    "feedback": "ЗАЛИШИТИ ВІДГУК",
  },
  "ru": {
    "title": "РАЗОМ МИ СИЛА",
    "feedback": "ЗАЛИШИТИ ВІДГУК",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  for(const l of navigator.languages){
    if(Object.keys(translations).indexOf(l)>=0){
        locale=l;
        break;
    }
  }

  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  if(undefined!=translation){
    element.innerText = translation;
  }
}