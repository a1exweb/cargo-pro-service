
$('#request').validate({
  rules: {
    userName: {
      required: true,
      minlength: 5,
      maxlength: 35
    },
    userPhone: {
      required: true,
      minlength: 10,
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    userName: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени {0} символов"),
      maxlength: jQuery.validator.format("Максимальная длинна имени {0} символов"),
    },
    userPhone: {
      required: "Введите Ваш телефон",
      minlength: jQuery.validator.format("Минимальная длинна телефона {0} символов"),
    }
  },
  submitHandler: function() {
    $.ajax({
      type: 'POST',
      url: 'request.php',
      data: $('#request').serialize(),
      success: function (responce) {
        $('#request')[0].reset();
        console.log('Форма успешно отправлена');
        $('#request').append("<p style='margin-top: 10px; color: green;'>Форма успешно отправлена</>");
      },
      error: function(responce) {
        console.error('error');
        $('#request').append("<p style='margin-top: 10px; color: red;'>Произошла обишка</p>");
      }
    })
  }
});


$('#question').validate({
  rules: {
    userName: {
      required: true,
      minlength: 5,
      maxlength: 35
    },
    userPhone: {
      required: true,
      minlength: 10,
    },
  },
  errorClass: "invalid",
  errorElement: "div",
  messages: {
    userName: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Минимальная длинна имени {0} символов"),
      maxlength: jQuery.validator.format("Максимальная длинна имени {0} символов"),
    },
    userPhone: {
      required: "Введите Ваш телефон",
      minlength: jQuery.validator.format("Минимальная длинна телефона {0} символов"),
    }
  },
  submitHandler: function() {
    $.ajax({
      type: 'POST',
      url: 'question.php',
      data: $('#question').serialize(),
      success: function (responce) {
        $('#question')[0].reset();
        console.log('Форма успешно отправлена');
        $('#question').append("<p style='margin-top: 10px; color: green;'>Форма успешно отправлена</>");
      },
      error: function(responce) {
        console.error('error');
        $('#question').append("<p style='margin-top: 10px; color: red;'>Произошла обишка</p>");
      }
    })
  }
});



// mask input

$('input[type="tel"]').mask('+7 (999) 999-99-99');


let allowedRegex = /^[а-яА-Яa-zA-Z-.-@]+$/;
let allowedCharRegex = /[а-яА-Яa-zA-Z-.-@]/;

$('input').on('paste', function (e) {
    let newValue = e.originalEvent.clipboardData.getData('Text');
    if (!allowedRegex.test(newValue)) {
        e.stopPropagation();
        return false;
    }
});

$('input').keypress(function(e) {
    return allowedCharRegex.test(e.key);
});

let allowedRegexTextArea = /^[а-яА-Яa-zA-Z-"!;:,.?\s]+$/g;
let allowedCharRegexTextArea = /^[а-яА-Яa-zA-Z-"!;:,.?()\s]/;
$('textarea').on('paste', function (e) {
  let newValueTextArea = e.originalEvent.clipboardData.getData('Text');
  if (!allowedRegexTextArea.test(newValueTextArea)) {
      e.stopPropagation();
      return false;
  }
});

$('textarea').keypress(function(e) {
  return allowedCharRegexTextArea.test(e.key);
});

