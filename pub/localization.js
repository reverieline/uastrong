let locale = "en";

const translations = {
  "en": {
    "title": "STRONG TOGETHER",
    "feedback": "FEEDBACK",
    "donor-feedback": "Please take part in the survey",
  },
  "uk": {
    "title": "РАЗОМ МИ СИЛА",
    "feedback": "ЗАЛИШИТИ ВІДГУК",
    "donor-feedback": "Пройдіть опитування, будь ласка",
  },
  "ru": {
    "title": "РАЗОМ МИ СИЛА",
    "feedback": "ЗАЛИШИТИ ВІДГУК",
    "donor-feedback": "Пройдите опрос, пожалуйста",
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