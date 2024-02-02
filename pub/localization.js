let locale = "en";

const translations = {
  "en": {
    "title": "STRONG TOGETHER",
    "heritage-feedback": "Feedback to us",
    "donor-feedback": "Feedback directly to our donors",
  },
  "uk": {
    "title": "РАЗОМ МИ СИЛА",
    "heritage-feedback": "Зворотній зв'язок з нами",
    "donor-feedback": "Залишити відгук безпосередньо нашим донорам",
  },
  "ru": {
    "title": "РАЗОМ МИ СИЛА",
    "heritage-feedback": "Форма обратной связи",
    "donor-feedback": "Отправить отзыв напрямую нашим донорам",
  },
};

const src_translations={
  "en":{
    "kobo-src": "https://enketo.unhcr.org/i/Ar8UYf26?lang=en",
  },
  "ru":{
    "kobo-src": "https://enketo.unhcr.org/i/Ar8UYf26?lang=ru",
  },
  "uk":{
    "kobo-src": "https://enketo.unhcr.org/i/Ar8UYf26?lang=uk",
  },
}

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

  document
    .querySelectorAll("[data-src-i18n-key]")
    .forEach(src_translateElement);
});

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  if(undefined!=translation){
    element.innerText = translation;
  }
}

function src_translateElement(element) {
  const key = element.getAttribute("data-src-i18n-key");
  const translation = src_translations[locale][key];
  if(undefined!=translation){
    element.src = translation;
  }
}