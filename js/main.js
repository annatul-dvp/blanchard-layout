document.addEventListener('DOMContentLoaded', function() {

  //Choices.js
  const element = document.querySelector('.gallery__filter-list');
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
      nextEl: '.gallery-swiper__button-next',
      prevEl: '.gallery-swiper__button-prev',
    },

    pagination: {
      el: '.gallery-swiper__pagination',
      type: 'fraction',
    },

    a11y: {
      containerMessage: 'Слайдер с изображениями',
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      lastSlideMessage: 'Это последний слайд. Дальше слайды будут показываться заново.',
    },
  });


  /*Slider in events' block*/
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

  /*Accordion in catalog block*/
  $(".accordion").accordion({
    heightStyle: "content"
  });

  /*Tooltip Tippy */
  tippy('.projects-txt__tooltip',{
    animation: 'scale',
    theme: "custom",

    content(reference) {
      const contentTooltip = reference.getAttribute("data-tippy-content");
      reference.removeAttribute("data-tippy-content");
      return contentTooltip;
    }
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

  /*Catalog. Active block */

  function activateTabsBlock() {
    let catalogBlocks = document.querySelectorAll('.catalog-item-block__btn');
    catalogBlocks.forEach((e) => {
      e.parentNode.classList.remove('catalog__item_active');
      if(e.classList.contains('ui-accordion-header-active') || e.classList.contains('ui-state-active')){
        e.parentNode.classList.add('catalog__item_active');
      }
    });
  }
  
  activateTabsBlock();

  let catalogsItems = document.querySelectorAll('.catalog__item');
  
  catalogsItems.forEach((e) => {
    e.addEventListener('click', (el) => {
      activateTabsBlock();
    });
  });


  /*Catalog. Display*/
  let catalogTabBtnsList = document.querySelectorAll('.catalog-list-item-inf-list-item__link');
  let catalogTabItemsList = document.querySelectorAll('.catalog__display');


  catalogTabBtnsList.forEach((element) => {
    element.addEventListener('click', (el) => {
      const path = el.currentTarget.dataset.path;
      
      catalogTabBtnsList.forEach((btn) => {btn.classList.remove('catalog-list-item-inf-list-item__link_active')});
      el.currentTarget.classList.add('catalog-list-item-inf-list-item__link_active');

      catalogTabItemsList.forEach((item) => {item.classList.remove('catalog__display_active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__display_active');
    });
  });

  /*Modal window*/
  function createModalWindow(){
    let modalWindow = document.createElement('div');
    let img = document.createElement('img');
    let infBlock = document.createElement('div');
    let name = document.createElement('h3');
    let imgName = document.createElement('p');
    let dates = document.createElement('p');
    let imgInf = document.createElement('p');
    let closeBtn = document.createElement('button');
    // let closeBtnImg = document.createElement('img');

    modalWindow.classList.add('modal-window');
    img.classList.add('modal-window__img');
    infBlock.classList.add('modal-window__inf');
    name.classList.add('h3');
    name.classList.add('modal-window-inf__name');
    imgName.classList.add('modal-window-inf__img-name');
    dates.classList.add('modal-window-inf__img-dates');
    imgInf.classList.add('modal-window-inf__img-inf');
    closeBtn.classList.add('modal-window__close-btn');

    img.src = '/imgs/gallery/gallery-2-zoom.jpg'; 
    // closeBtnImg.src = '/imgs/icons/close-btn.svg';
    name.innerHTML = 'Казимир Малевич';
    imgName.innerHTML = '«Женщина с граблями»';
    dates.innerHTML = '1931–1932';
    imgInf.innerHTML = 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930–1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.';

    closeBtn.addEventListener('click', (btn) => {
      let openedModalWindow = document.querySelector('.modal-window');
      openedModalWindow.remove();
    });

    // closeBtn.append(closeBtnImg);

    infBlock.append(name);
    infBlock.append(imgName);
    infBlock.append(dates);
    infBlock.append(imgInf);
    infBlock.append(closeBtn);    

    modalWindow.append(img);
    modalWindow.append(infBlock);
    

    return{
      modalWindow,
      img,
      name,
      imgName,
      dates,
      imgInf,
    }
  }

  let galaryModalsBtn = document.querySelectorAll('.gallery-swiper__slide');
  let body = document.querySelector('body');

  galaryModalsBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      let openedModalWindows = document.querySelectorAll('.modal-window');
      openedModalWindows.forEach((e) => {
        e.remove();
      });
      let modalWindow = createModalWindow();
      body.append(modalWindow.modalWindow);
    });
  });

});

