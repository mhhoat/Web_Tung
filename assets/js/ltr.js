!function(s){"use strict";s(document).ready((function(){s("#shapeChange").on("change",(function(){"#"==s("link#sharpMode").attr("href")?(s(this).siblings("label").text("Switch to Classic mode"),s("link#sharpMode").attr("href","assets/css/style-sharp.css")):(s(this).siblings("label").text("Switch to Sharp mode"),s("link#sharpMode").attr("href","#"))})),s("#themeChange").on("change",(function(){"#"==s("link#darkMode").attr("href")?(s(this).siblings("label").text("Switch to Light mode"),s("link#darkMode").attr("href","assets/css/style-dark.css"),s("#logo").attr("src","assets/images/logo-2.png")):(s(this).siblings("label").text("Switch to Dark mode"),s("link#darkMode").attr("href","#"),s("#logo").attr("src","assets/images/logo.png"))})),s(".client-slider").slick({slidesToShow:5,autoplaySpeed:2e3,arrows:!1,autoplay:!0,pauseOnHover:!1,pauseOnFocus:!1,speed:1e3,responsive:[{breakpoint:600,settings:{slidesToShow:5}},{breakpoint:480,settings:{slidesToShow:4}},{breakpoint:400,settings:{slidesToShow:3}}]})}))}(jQuery);