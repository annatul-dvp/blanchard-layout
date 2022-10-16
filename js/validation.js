let telSelector = document.querySelector("input[type='tel']");
let mask = new Inputmask("+7 (999) 999-99-99");

mask.mask(telSelector );

let nameSelector = document.querySelector(".feedback-form-name__input");

new JustValidate('.feedback__form', {
  errorFieldCssClass: 'is-invalid',
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      function: () => {
        const txt = nameSelector.value;
        return /^[a-zA-Z]+$/.test(txt);
      }
    },
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length ===10;
      }
    }
  },
  messages:{
    name: {
      required: "Вы не ввели имя",
      minLength:"Введите 2 и более символов",
      maxLength:"Имя не должно превышать 30 символов",
      function: 'Неправильный формат'
    },
    tel: {
      required: "Вы не ввели телефон",
      function: "Некорректный номер телефона"
    }    
  }  
})
