"use strict";$(document).ready(function(){$(".show-menu").on("click",function(o){$(".menu").toggleClass("menu_active"),$(".show-menu").toggleClass("show-menu_active")}),$(window).scroll(function(){150<$(this).scrollTop()?$("#top").fadeIn():$("#top").fadeOut()}),$("#top").click(function(){$("body, html").animate({scrollTop:0},1e3)});$("html, body");var o=$("section"),i=$("nav"),e=i.outerHeight();$(window).on("scroll",function(){var n=$(this).scrollTop();o.each(function(){var o=$(this).offset().top-e,t=o+$(this).outerHeight();o<=n&&n<=t&&(i.find("a").removeClass("menu__link_active"),i.find('a[href="#'+$(this).attr("id")+'"]').addClass("menu__link_active")),$(window).scrollTop()==$(document).height()-$(window).height()&&($(".menu").find("li:last-child a").removeClass("menu__link_active"),$(".menu").find("li a").removeClass("menu__link_active"),$(".menu").find("li:last-child a").addClass("menu__link_active"))})}),i.find("a").on("click",function(){var o=$(this).attr("href");return $("html, body").animate({scrollTop:$(o).offset().top-e+1},500),!1}),$(document).ready(function(){$(".slider").slick({arrows:!1,dots:!0,dotsClass:"slider-dots"})});var t=$(".footer"),n=0;$(window).scroll(function(){var o=$(window).scrollTop()+$(window).height();t.offset().top<o&&0==n&&($("#map").fadeIn(500),n=1)})});
//# sourceMappingURL=main.js.map
