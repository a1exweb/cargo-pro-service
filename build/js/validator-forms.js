"use strict";$("#request").validate({rules:{userName:{required:!0,minlength:5,maxlength:35},userPhone:{required:!0,minlength:10}},errorClass:"invalid",errorElement:"div",messages:{userName:{required:"Укажите имя",minlength:jQuery.validator.format("Минимальная длинна имени {0} символов"),maxlength:jQuery.validator.format("Максимальная длинна имени {0} символов")},userPhone:{required:"Введите Ваш телефон",minlength:jQuery.validator.format("Минимальная длинна телефона {0} символов")}},submitHandler:function(){$.ajax({type:"POST",url:"mail.php",data:$("#request").serialize(),success:function(e){$("#request")[0].reset(),console.log("Форма успешно отправлена"),$("#request").append("<p class='modal-success'>Форма успешно отправлена</p>"),$("#question").append("<p class='modal-success'>Форма успешно отправлена</p>"),setTimeout(function(){$(".modal-success").fadeOut(500)},2500)},error:function(e){console.error("error"),$("#request").append("<p class='modal-error'>Произошла обишка</p>"),$("#question").append("<p class='modal-success'>Форма успешно отправлена</p>"),setTimeout(function(){$(".modal-error").fadeOut(500)},2500)}})}}),$("#question").validate({rules:{userName:{required:!0,minlength:5,maxlength:35},userPhone:{required:!0,minlength:10}},errorClass:"invalid",errorElement:"div",messages:{userName:{required:"Укажите имя",minlength:jQuery.validator.format("Минимальная длинна имени {0} символов"),maxlength:jQuery.validator.format("Максимальная длинна имени {0} символов")},userPhone:{required:"Введите Ваш телефон",minlength:jQuery.validator.format("Минимальная длинна телефона {0} символов")}},submitHandler:function(){$.ajax({type:"POST",url:"mail.php",data:$("#question").serialize(),success:function(e){$("#question")[0].reset(),console.log("Форма успешно отправлена"),$("#question").append("<p class='modal-success'>Форма успешно отправлена</p>"),setTimeout(function(){$(".modal-success").fadeOut(500)},2500)},error:function(e){console.error("error"),$("#question").append("<p class='modal-error'>Произошла обишка</p>"),setTimeout(function(){$(".modal-error").fadeOut(500)},2500)}})}}),$('input[type="tel"]').mask("+7 (999) 999-99-99");var allowedRegex=/^[а-яА-Яa-zA-Z-.-@]+$/,allowedCharRegex=/[а-яА-Яa-zA-Z-.-@]/;$("input").on("paste",function(e){var r=e.originalEvent.clipboardData.getData("Text");if(!allowedRegex.test(r))return e.stopPropagation(),!1}),$("input").keypress(function(e){return allowedCharRegex.test(e.key)});var allowedRegexTextArea=/^[а-яА-Яa-zA-Z-"!;:,.?\s]+$/g,allowedCharRegexTextArea=/^[а-яА-Яa-zA-Z-"!;:,.?()\s]/;$("textarea").on("paste",function(e){var r=e.originalEvent.clipboardData.getData("Text");if(!allowedRegexTextArea.test(r))return e.stopPropagation(),!1}),$("textarea").keypress(function(e){return allowedCharRegexTextArea.test(e.key)});
//# sourceMappingURL=validator-forms.js.map
