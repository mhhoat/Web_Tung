!function(t){"use strict";t(window).on("load",(function(){t(".preloader").fadeOut(1e3)})),t(document).ready((function(){t("#sidebar").on("click",(function(){t(".sidebar-overlay").addClass("active")})),t(".sidebar-close").on("click",(function(){t(".sidebar-overlay").removeClass("active")}));var i=t(".section-btn");t(i).on("click",(function(){var i=t(this).attr("data-section");t("#"+i).addClass("active"),t(".header").slideUp(),t("#about .os-viewport").on("scroll",(function(){setTimeout((function(){t(".odometer").each((function(){t(this).html(t(this).attr("data-count"))}))}))}))})),t(".section-btn[data-section=about]").on("click",(function(){t(".circle-progressbar").each((function(){var i=t(this).offset().top,o=t(window).scrollTop(),e=t(this).find(".circle").attr("data-percent"),a=(parseInt(e,10),parseInt(100,10),t(this).data("animate")),s=t(this).width(),n=t(this).find(".circle").attr("data-thick");t(window).width()<=1199&&(n=t(this).find(".circle").attr("data-thick")/1.5),t(window).width()<=991&&(n=t(this).find(".circle").attr("data-thick")/3),i<o+t(window).height()-30&&!a&&(t(this).data("animate",!0),t(this).find(".circle").circleProgress({startAngle:-Math.PI/2,value:e/100,size:s,thickness:n,emptyFill:"rgba(0,0,0, .2)",fill:{gradient:["#CB26B6","#F8B127"]},lineCap:"round"}).on("circle-animation-progress",(function(i,o,e){t(this).find(".percent").text((100*e).toFixed()+"%")})).stop())}))}));var o=t(".panel-close-btn");t(o).on("click",(function(){var i=t(this).attr("data-close");t("#"+i).removeClass("active").find(".os-viewport").animate({scrollTop:0},"slow"),t(".header").slideDown()})),t(".section-panel").overlayScrollbars({}),t(".filter-btn").on("click",(function(){var i=t(this).attr("data-filter");return t(this).addClass("active"),t(this).siblings().removeClass("active"),"all"==i?(t(".portfolio-row").children(".custom-col").show(150),t(".portfolio-row").children(".empty-msg").removeClass("active")):(t(".portfolio-row").children(".custom-col:not(."+i+")").hide(150),t(".portfolio-row").children(".custom-col."+i).show(150),t(".portfolio-row").children(".custom-col").hasClass(i)<=0?t(".portfolio-row").children(".empty-msg").addClass("active"):t(".portfolio-row").children(".empty-msg").removeClass("active")),!1})),t(".testimonial-slider").slick({autoplay:!0,autoplaySpeed:2500,prevArrow:'<button type="button" class="slick-arrow slick-prev"><i class="fa-regular fa-left-long"></i></button>',nextArrow:'<button type="button" class="slick-arrow slick-next"><i class="fa-regular fa-right-long"></i></button>',pauseOnHover:!1,pauseOnFocus:!1,speed:1e3,fade:!0,responsive:[{breakpoint:700,settings:{arrows:!1}},{breakpoint:480,settings:{arrows:!1}}]}),t(".faq-header").on("click",(function(){t(this).find(".icon").html('<i class="fa-light fa-minus"></i>'),t(this).parent().siblings().find(".icon").html('<i class="fa-light fa-plus"></i>'),t(this).siblings(".faq-body").slideDown(),t(this).parent().siblings().find(".faq-body").slideUp()})),t(".my-select").niceSelect(),t(".gallery-content .single-img button").on("click",(function(){var i=t(this).parents(".single-img").find("img").attr("src");t(".image-lightbox-panel").addClass("active"),t(".lightbox-image").attr("src",i),t("body").css("overflow","hidden")})),t(".image-lightbox-panel").on("click",(function(i){!1===t(i.target).is(".lightbox-image")&&(t(this).removeClass("active"),t("body").css("overflow","auto"))}))}))}(jQuery);