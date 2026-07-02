$(document).ready(function () {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function () {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
    });

    /* Tabbing Function */
    $("[data-targetit]").on("click", function (e) {
        $(this).addClass("active");
        $(this)
            .siblings()
            .removeClass("active");
        var target = $(this).data("targetit");
        $("." + target)
            .siblings('[class^="box-"]')
            .hide();
        $("." + target).fadeIn();
        $(".tabViewList").slick("setPosition", 0);
    });


    $('.designSlider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 10000,
        fade: false,
        autoplay: true,
        autoplayspeed: 0,
        centerMode: true,
        pauseOnHover: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        initialSlide: 1,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

        ]
    });
    
    // setTimeout(() => {
    //     $(function() {
    //         var maxHeight = 0;
    //         $('.chseWrp').each(function(){
    //             if (maxHeight < $(this).height()) {
    //                 maxHeight = $(this).height();
    //             }
    //         });
    //         $('div.chseWrp').each(function(){
    //             $(this).height(maxHeight);
    //         });
    //     });
    // }, 5000);



    $('.designSlide2').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 4000,
        fade: false,
        autoplay: true,
        autoplayspeed: 0,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        initialSlide: 1,
        responsive: [{
            breakpoint: 825,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

        ]

    });


    $('.monialSlider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: false,
        autoplay: true,
        autoplayspeed: 1500,
        centerMode: true,
        slidesToShow: 4,
        variableWidth: false,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1441,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            },
            breakpoint: 824,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

        ]
    });

    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });


    $('.pack-sec .pack-ordernow').on('click', function () {

        $('.popup-layout1').fadeIn();

        var packtitle = $(this).closest('li').find(".pack-title").html();

        var packprice = $(this).closest('li').find(".pack-price h4").html();

        var thisrel = $(this).attr('rel');

        $('#popupform input#popuppackage').val(thisrel);

        $(".popup-header h3").append(packtitle);

        $(".popup-header p").append("In Just <span>" + packprice + "</span>");

    });


    $('.popbtn').click(function () {
        $('.overlay').fadeIn();
        $('#popuppack').fadeIn();
    });

    $('.popbtn2').click(function () {
        $('.overlay').fadeIn();
        $('#popuppack2').fadeIn();

        var packtitle = $(this).closest('.packageCard').find(".cardHead .cardHead-top h6").html();
        var packprice = $(this).closest('.packageCard').find(".cardHead .cardHead-bottom .price").html();
        var thisrel = $(this).attr('rel');
        
        $(".package_html").empty();
        var package_html = $(this).closest('.packageCard').find('ul').text();
        $(".package_html").val($.trim(package_html));
            $('input[name="package_name"]').val(packtitle);
        $('input[name="package_cost"]').val(packprice);
        // $('input[name="package_cat"]').val(type);
        //console.log(package_html);

        $('#popuppack2 .formpop input#popuppackage').val(thisrel);
        $("#popuppack2 .formpop h4").html(packtitle);
        $("#popuppack2 .formpop p").html("In Just <span>" + packprice + "</span>");
    });

    $('.closeico1,.overlay').click(function () {
        $('#popuppack').fadeOut();
        $('#popuppack2').fadeOut();
        $('.overlay').fadeOut();
        $("#auto-popup").fadeOut();
        $("#closingPopup1").fadeOut();
    });

});


var url = $(location).attr('href'),
    parts = url.split("/"),
    last_part = parts[parts.length - 2];

$('.servList > li[data-url="/' + last_part + '"]').hide(200, 'swing', function () {
    $('.servList > li[data-url="/' + last_part + '"]').prependTo('.servList').show(200, 'swing');

    $('.servList > li[data-url="/' + last_part + '"]').find('.pack-btns a:last-child').hide();
    $('.current-tag.default').remove();
    $('<div class="current-tag"><div class="c-heading"><h1>Current</h1></div></div>').appendTo('.servList > li[data-url="/' + last_part + '"]');
});


// counter
$(window).on("scroll", function (e) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }

    if($('.goto').length > 0){
        if ($(window).scrollTop() >= $(".goto").offset().top - $(window).height()) {
           
            if (!$(".goto").hasClass("animated")) {
                $(".count").each(function () {
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            {
                                Counter: $(this).text(),
                            },
                            {
                                duration: 4000,
                                easing: "swing",
                                step: function (now) {
                                    $(this).text(numberWithCommas(Math.ceil(now)));
                                },
                            }
                        );
                });
                // $("#triggered").addClass("show");
                $(".goto").addClass("animated");
            }
        }
    }
});



/* RESPONSIVE JS */
if ($(window).width() < 825) {


}

$('.packpopup').click(function(){
      $('#popuppack').fadeIn();
      $('.overlay').fadeIn();
    //   var packtitle = $(this).closest('div').find(".pkgboxHead h5").html();
      var packtitle = $(this).closest('.pckg').find(" .title").html();
      var packprice = $(this).closest('li').find(".pkgboxHead h6").html();
      var thisrel = $(this).attr('rel');
      $('#popupform input#popuppackage').val(thisrel);
      var packtitle = $(this).attr('title');
      var type = $(this).attr('type');
	  var amount = $(this).attr('amount');
        $('input[name="package_name"]').val(packtitle);
        $('input[name="package_cost"]').val($(this).attr('data-amount') || $(this).attr('amount'));
        $('input[name="package_cat"]').val($(this).attr('data-type') || $(this).attr('type'));
      $(".centercont h3").html(packtitle);
      $(".centercont h4").html("In Just <span>" + packprice + "</span>");
  });
  

$(document).ready(function () {
    $('.phone1').on('paste', function (event) {
        // Prevent the default paste behavior
        event.preventDefault();

        // Get the pasted text
        let pasteData = event.originalEvent.clipboardData.getData('text');

        // Remove all non-numeric characters except "+"
        let sanitizedData = pasteData.replace(/[^+\d]/g, '');

        // Insert sanitized text into the input
        $(this).val(sanitizedData);
    });

    // Optional: Allow only numbers and "+" during typing
    $('.phone1').on('input', function () {
        let currentValue = $(this).val();
        $(this).val(currentValue.replace(/[^+\d]/g, ''));
    });
});
$(document).ready(function () {
    $('.phone2').on('paste', function (event) {
        // Prevent the default paste behavior
        event.preventDefault();

        // Get the pasted text
        let pasteData = event.originalEvent.clipboardData.getData('text');

        // Remove all non-numeric characters except "+"
        let sanitizedData = pasteData.replace(/[^+\d]/g, '');

        // Insert sanitized text into the input
        $(this).val(sanitizedData);
    });

    // Optional: Allow only numbers and "+" during typing
    $('.phone2').on('input', function () {
        let currentValue = $(this).val();
        $(this).val(currentValue.replace(/[^+\d]/g, ''));
    });
});
$(document).ready(function () {
    $('.phone3').on('paste', function (event) {
        // Prevent the default paste behavior
        event.preventDefault();

        // Get the pasted text
        let pasteData = event.originalEvent.clipboardData.getData('text');

        // Remove all non-numeric characters except "+"
        let sanitizedData = pasteData.replace(/[^+\d]/g, '');

        // Insert sanitized text into the input
        $(this).val(sanitizedData);
    });

    // Optional: Allow only numbers and "+" during typing
    $('.phone3').on('input', function () {
        let currentValue = $(this).val();
        $(this).val(currentValue.replace(/[^+\d]/g, ''));
    });
});