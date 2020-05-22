
$('#request').validate({
  rules: {
    Имя: {
      required: true,
      minlength: 5,
      maxlength: 35
    },
    Телефон: {
      required: true,
      minlength: 10,
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    Имя: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени {0} символов"),
      maxlength: jQuery.validator.format("Максимальная длинна имени {0} символов"),
    },
    Телефон: {
      required: "Введите Ваш телефон",
      minlength: jQuery.validator.format("Минимальная длинна телефона {0} символов"),
    }
  },
  submitHandler: function() {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $('#request').serialize(),
      success: function (responce) {
        $('#request')[0].reset();
        console.log('Форма успешно отправлена');
        $('#request').append("<p class='modal-success'>Форма успешно отправлена</p>");
        setTimeout(() => {
          $('.modal-success').fadeOut(500);
        }, 2500);
      },
      error: function(responce) {
        console.error('error');
        $('#request').append("<p class='modal-error'>Произошла обишка</p>");
        setTimeout(() => {
          $('.modal-error').fadeOut(500);
        }, 2500);
      }
    })
  }
});


$('#question').validate({
  rules: {
    Имя: {
      required: true,
      minlength: 5,
      maxlength: 35
    },
    Телефон: {
      required: true,
      minlength: 10,
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    Имя: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени {0} символов"),
      maxlength: jQuery.validator.format("Максимальная длинна имени {0} символов"),
    },
    Телефон: {
      required: "Введите Ваш телефон",
      minlength: jQuery.validator.format("Минимальная длинна телефона {0} символов"),
    }
  },
  submitHandler: function() {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $('#question').serialize(),
      success: function (responce) {
        $('#question')[0].reset();
        console.log('Форма успешно отправлена');
        $('#question').append("<p class='modal-success'>Форма успешно отправлена</p>");
        setTimeout(() => {
          $('.modal-success').fadeOut(500);
        }, 2500);
      },
      error: function(responce) {
        console.error('error');
        $('#question').append("<p class='modal-error'>Произошла обишка</p>");
        setTimeout(() => {
          $('.modal-error').fadeOut(500);
        }, 2500);
      }
    })
  }
});



// mask input

$('input[type="tel"]').mask('+7 (999) 999-99-99');