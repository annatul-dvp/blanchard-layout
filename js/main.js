//Choices.js
const element = document.querySelector('.gallery__select-list');
const choices = new Choices(element, {
  searchEnabled: false,
});

//Swipers
//Hero block background slider
const swiper = new Swiper('.main-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 0,
  speed: 1000,  

  autoplay: {
		delay: 5000,
	},
});

//Galary block background slider
const galarySwiper = new Swiper('.gallery__slider', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerGroup: 3,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  speed: 500,  

  navigation: {
    nextEl: '.gallery-slider__button-next',
    prevEl: '.gallery-slider__button-prev',
  },

  pagination: {
    el: '.gallery-slider__pagination',
    type: 'fraction',
  },

  zoom: {
    maxRatio: 1.5,
  },

  a11y: {
    containerMessage: 'Слайдер с изображениями',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    lastSlideMessage: 'Это последний слайд. Дальше слайды будут показываться заново.',
  },
});


const eventsSwiper = new Swiper('.events__slider', {
  // Optional parameters
  slidesPerView: 3,//'auto',
  direction: 'horizontal',
  spaceBetween: 50,
  speed: 500,  

  lazy: {
    loadPrevNext: true,
  },

  pagination: {
    el: '.events-slider__pagination',
    type: 'bullets',
  },

  navigation: {
    nextEl: '.events-slider__button-next',
    prevEl: '.events-slider__button-prev',
  },

  a11y: {
    containerMessage: 'Слайдер с мероприятиями',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    lastSlideMessage: 'Это последний слайд. Дальше слайды будут показываться заново.',
  },
});

const projectsSwiper = new Swiper('.projects__slider', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'horizontal',
  spaceBetween: 50,
  speed: 500,  

  navigation: {
    nextEl: '.projects-slider__button-next',
    prevEl: '.projects-slider__button-prev',
  },

  a11y: {
    containerMessage: 'Слайдер с партнёрами проектов',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    lastSlideMessage: 'Это последний слайд. Дальше слайды будут показываться заново.',
  },
});

/*Map*/
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.760216, 37.614770],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
  });

  var myPlacemark = new ymaps.Placemark([55.760216, 37.614770],{},{
    iconLayout: 'default#image',
    iconImageHref: '/imgs/icons/pin-to-map.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-20, -20]
  });
  myMap.geoObjects.add(myPlacemark);
}