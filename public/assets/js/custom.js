$(document).ready(function() {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");

    $(".menu-Bar").click(function() {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
    });

    $(".pop-main").click(function() {
        $(".popup-main").fadeIn();
        $(".overlay1").fadeIn();
    });
    
    $(".pop-main2").click(function() {
        $(".popup-main2").fadeIn();
        $(".overlay1").fadeIn();
    });

    $('.closePop1,.overlay1').click(function () {
        $('.popup-main').fadeOut();
        $(".overlay1").fadeOut();
    });
    
    $(".pop-main2").click(function() {
        $(".popup-main2").fadeIn();
        $(".overlay1").fadeIn();
    });

    $('.closePop1,.overlay1').click(function () {
        $('.popup-main2').fadeOut();
        $(".overlay1").fadeOut();
    });

    $('.pckg-pop').on('click', function() {
        $('.popup').fadeIn();
        $(".overlay").fadeIn();
        var title = $(this).closest(".pckg-box").find("h3").html();
        // var price = $(this).closest(".pckg-box").find("h4").html();
        var price = $(this).closest(".pckg-box").find("h4").contents().filter(function() {
        return this.nodeType === 3; // Filter for text nodes
        }).text().trim();
        console.log(title);
        console.log(price);
        var thisrel = $(this).attr('rel');
        $('.pop-inner').val(thisrel);
        $(".pop-inner h4").append(title);
        $(".pop-inner h3").append(price);
        $('input[name="package_name"]').val(title);
        $('input[name="package_cost"]').val(price.split(' <span>')[0]);
        if (thisrel === 'dropshipping') {
        $('input[name="package_cat"]').val('dropshipping');
        } else {
            $('input[name="package_cat"]').val('web');
        }
        
        $(".package_html").empty();
        var package_html = $(this).closest('.pckg-box').find('ul').text();
        $(".package_html").val($.trim(package_html));
        //console.log(package_html);
        });
        
         $('.pckg-pop2').on('click', function() {
        $('.popup2').fadeIn();
        $(".overlay").fadeIn();
        var title = $(this).closest(".pckg-box").find("h3").html();
        // var price = $(this).closest(".pckg-box").find("h4").html();
        var price = $(this).closest(".pckg-box").find("h4").contents().filter(function() {  return this.nodeType === 3; }).text().trim().replace(/,/g, '').replace(/\+.*/, '');
        console.log(title);
        console.log(price);
        var thisrel = $(this).attr('rel');
        $('.pop-inner').val(thisrel);
        $(".pop-inner h4").append(title);
        $(".pop-inner h3").append(price);
        $('input[name="package_name"]').val(title);
        $('input[name="package_cost"]').val(price.split(' <span>')[0]);
        if (thisrel === 'dropshipping') {
        $('input[name="package_cat"]').val('dropshipping');
        } else {
            $('input[name="package_cat"]').val('web');
        }
        
        $(".package_html").empty();
        var package_html = $(this).closest('.pckg-box').find('ul').text();
        $(".package_html").val($.trim(package_html));
        //console.log(package_html);
        });
      
      
        $('.order-nowpopup').click(function() {
        var thisrel = $(this).attr('rel');
        $('#order-nowpopup').fadeIn();
        $('#popupform1 input[name="package_cat"]').val(thisrel);
        });

    $('.closePop,.overlay').click(function () {
        $('.popup').fadeOut();
        $('.overlay').fadeOut();
        $(".pop-inner h4").empty();
        $(".pop-inner h3").empty();
    });
    
    $('.closePop,.overlay').click(function () {
        $('.popup2').fadeOut();
        $('.overlay').fadeOut();
        $(".pop-inner h4").empty();
        $(".pop-inner h3").empty();
    });

    $(".pckg-box").hover(function() {
        $(".pckg-box").removeClass('active');
        $(this).addClass('active');
    });

    $(".menu li a").click(function() {
        $(this).siblings(".dropdown-list").slideToggle();
    });

    $(".menu .menu-item-has-children").addClass("dropdown-nav ");
    $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");

    /* Tabbing Function */
    $("[data-targetit]").on("click", function(e) {
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

    $("[data-targetit1]").on("mouseenter", function(e) {
        $(this).addClass("active").siblings().removeClass("active");
        var target = $(this).data("targetit1");
        $("." + target)
            .siblings('[class^="box-"]')
            .stop() // Stop ongoing animations
            .slideUp(200, function() { // Set slideUp duration to 200 milliseconds
                $("." + target)
                    .stop() // Stop ongoing animations
                    .slideDown(200); // Set slideDown duration to 200 milliseconds
            });
        
        $(".tabViewList").slick("setPosition", 0);
    });

    // Accordian
    $('.accordian h4').click(function() {
        if($(this).parent('li').hasClass("active"))
        {
            $(this).parent('li').removeClass('active');
            $(this).next().slideUp();
        }
        else
        {
            $('.accordian li').removeClass('active');
            $(this).parent('li').addClass('active');
            console.log('Doesnt have active');
            $('.accordian li div').slideUp();
            $(this).parent('li').find('div').slideDown();
        }
    });

    $("li.dropdown-nav").hover(function() {
        $(this)
            .children("ul")
            .stop(true, false, true)
            .slideToggle(300);
    });

    $(".searchBtn").click(function() {
        $(".searchWrap").addClass("active");
        $(".overlay").fadeIn("active");
        $(".searchWrap input").focus();
        $(".searchWrap input").focusout(function(e) {
            $(this)
                .parents()
                .removeClass("active");
            $(".overlay").fadeOut("active");
            $("body").removeClass("ovr-hiddn");
        });
    });

$(".pkg-slider").slick({
    slidesToShow: 3,
    autoplay: true,
    speed: 300,
    dots: false,
    arrows: false,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


    $(".profit-slider").slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 8000,
        slidesToShow: 5,
        autoplay:true,
        autoplaySpeed:0,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                speed: 500,
                autoplaySpeed:3000,
              }
            }
          ]
    });
    $(".portfolio1-slider").slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 8000,
        slidesToShow: 2,
        autoplay:true,
        autoplaySpeed:0,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,

              }
            }
          ]
    });
    $(".portfolio2-slider").slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 8000,
        slidesToShow: 2,
        autoplay:true,
        autoplaySpeed:0,
        rtl: true,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next')
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
    $(".partner-slider").slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:3000,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next')
    });


    //     Slider For
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true
    // });

    /* Top Scroll */
    // $('body').on('click', '.scrolldown-fl', function() {
    //     goToScroll('awardSec');
    // });
});

$(window).on("scroll touchmove", function() {
    $("header").toggleClass("stickyOpen", $(document).scrollTop() > 150);
});

$(window).on("load", function() {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
    );
    $("ul.menu li a").each(function() {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $(this).removeClass("active");
            $(this)
                .closest("li")
                .addClass("active");
            $("ul.menu li.first").removeClass("active");
        }
    });
});

/* RESPONSIVE JS */
if ($(window).width() < 824) {}

function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $(".topAppendTxt").each(function() {
            var getdtd = $(this)
                .find(".cloneDiv")
                .clone(true);
            $(this)
                .find(".cloneDiv")
                .remove();
            $(this).append(getdtd);
        });
    }
}

function goToScroll(e) {
    $("html, body").animate({
            scrollTop: $("." + e).offset().top
        },
        1000
    );
}

$('.packpopup').click(function(){
      $('#popuppack').fadeIn();
      $('.overlay').fadeIn();
    //   var packtitle = $(this).closest('div').find(".pkgboxHead h5").html();
    // var packtitle = $(this).closest('.pckg').find(" .title").html();
      var packtitle = $(this).closest(".pckg-box").find("h3").html();
      var packprice = $(this).closest('li').find(".pkgboxHead h6").html();
      var thisrel = $(this).attr('rel');
      $('#popupform input#popuppackage').val(thisrel);
      var type = $(this).attr('type');
	  var amount = $(this).attr('amount');
        $('input[name="package_name"]').val(packtitle);
        $('input[name="package_cost"]').val(amount);
        $('input[name="package_cat"]').val(type);
      $(".centercont h3").html(packtitle);
      $(".centercont h4").html("In Just <span>" + packprice + "</span>");
  });
  
// $(document).ready(function () {
//     $('#phone').on('paste', function (event) {
//         // Prevent the default paste behavior
//         event.preventDefault();

//         // Get the pasted text
//         let pasteData = event.originalEvent.clipboardData.getData('text');

//         // Remove all non-numeric characters except "+"
//         let sanitizedData = pasteData.replace(/[^+\d]/g, '');

//         // Insert sanitized text into the input
//         $(this).val(sanitizedData);
//     });

//     // Optional: Allow only numbers and "+" during typing
//     $('#phone').on('input', function () {
//         let currentValue = $(this).val();
//         $(this).val(currentValue.replace(/[^+\d]/g, ''));
//     });
// });
// $(document).ready(function () {
//     $('#phone2').on('paste', function (event) {
//         // Prevent the default paste behavior
//         event.preventDefault();

//         // Get the pasted text
//         let pasteData = event.originalEvent.clipboardData.getData('text');

//         // Remove all non-numeric characters except "+"
//         let sanitizedData = pasteData.replace(/[^+\d]/g, '');

//         // Insert sanitized text into the input
//         $(this).val(sanitizedData);
//     });

//     // Optional: Allow only numbers and "+" during typing
//     $('#phone2').on('input', function () {
//         let currentValue = $(this).val();
//         $(this).val(currentValue.replace(/[^+\d]/g, ''));
//     });
// });

/* ─── Chat Now button handler ───────────────────────────────────────────── */
$(document).on('click', '.chat-btn', function (e) {
    e.preventDefault();
    if (window.zE) {
        zE('webWidget', 'open');
    } else if (window.$zopim) {
        $zopim.livechat.window.show();
    }
});

/* ─── Contact form API – shared helper ──────────────────────────────────── */
function sendmailApi(name, email, number, message, $btn, originalBtnText, website) {
    var nameParts  = (name || '').trim().split(/\s+/);
    var firstName  = nameParts[0] || '';
    var lastName   = nameParts.slice(1).join(' ');
    var pageUrl    = window.location.href;
    var urlParams  = new URLSearchParams(window.location.search);
    var thankyouUrl = '/thank-you';

    function restoreBtn(errMsg) {
        if ($btn) $btn.prop('disabled', false).text(originalBtnText || 'Submit');
        alert(errMsg || 'Something went wrong. Please try again.');
    }

    function doSend(ip) {
        var payload = {
            first_name:          firstName,
            last_name:           lastName,
            email:               email,
            phone:               number,
            message:             message,
            website:             website || '',
            consent:             true,
            hidden_ip:           ip,
            hidden_page_url:     pageUrl,
            hidden_utm_source:   urlParams.get('utm_source')   || '',
            hidden_utm_medium:   urlParams.get('utm_medium')   || '',
            hidden_utm_campaign: urlParams.get('utm_campaign') || '',
            hidden_gclid:        urlParams.get('gclid')        || '',
            hidden_fbclid:       urlParams.get('fbclid')       || ''
        };

        fetch('/api/contact', {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(function (res) {
            if (res.ok) {
                window.location.href = thankyouUrl;
            } else {
                restoreBtn('Submission failed. Please try again.');
            }
        })
        .catch(function () {
            restoreBtn('Network error. Please check your connection and try again.');
        });
    }

    var geoController = new AbortController();
    var geoTimeout    = setTimeout(function () { geoController.abort(); }, 5000);

    fetch('https://ipapi.co/json/', { signal: geoController.signal })
        .then(function (r) { return r.json(); })
        .then(function (geo) {
            clearTimeout(geoTimeout);
            doSend(geo.ip || '');
        })
        .catch(function () { doSend(''); });
}

/* ─── 1. Free Consultation popups (.popup-main / .popup-main2) ───────────── */
$(document).on('submit', '.popup-main form, .popup-main2 form', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var $form = $(this);
    var $btn  = $form.find('button');
    var orig  = $btn.text();
    $btn.prop('disabled', true).text('Sending…');
    sendmailApi(
        $form.find('input[name="popupname"]').val(),
        $form.find('input[name="popupemail"]').val(),
        $form.find('input[name="phone"]').val(),
        'I am interested in your services',
        $btn, orig
    );
});

/* ─── 2. Package "Get Started" popups (#popupform1 & #popupform) ─────────── */
$(document).on('submit', '#popupform1, #popupform', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var $form   = $(this);
    var $btn    = $form.find('button');
    var orig    = $btn.text();
    $btn.prop('disabled', true).text('Sending…');
    var pkgName = $form.find('input[name="package_name"]').val() || '';
    var pkgCost = $form.find('input[name="package_cost"]').val() || '';
    var pkgCat  = $form.find('input[name="package_cat"]').val()  || '';
    var msg     = 'Package: ' + pkgName;
    if (pkgCost) msg += ', Cost: '     + pkgCost;
    if (pkgCat)  msg += ', Category: ' + pkgCat;
    sendmailApi(
        $form.find('input[name="popupname"]').val(),
        $form.find('input[name="popupemail"]').val(),
        $form.find('input[name="phone"]').val(),
        msg,
        $btn, orig
    );
});

/* ─── 3. Contact page main form (#form1) ─────────────────────────────────── */
$(document).on('submit', '#form1', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var $form      = $(this);
    var $btn       = $form.find('[type="submit"]');
    var orig       = $btn.text();
    $btn.prop('disabled', true).text('Sending…');

    var firstName  = $form.find('input[name="popupname"]').val()  || '';
    var lastName   = $form.find('input[name="popupname1"]').val() || '';
    var websiteUrl = $form.find('input[name="website_url"]').val() || '';
    var company    = $form.find('input[name="company"]').val()     || '';
    var services   = [];
    $form.find('input[name="service[]"]:checked').each(function () {
        services.push($(this).val());
    });

    var msgParts = [];
    var rawMsg = $form.find('textarea[name="message"]').val() || '';
    if (rawMsg)                  msgParts.push('Message: '  + rawMsg);
    if (company)                 msgParts.push('Company: '  + company);
    if (websiteUrl)              msgParts.push('Website: '  + websiteUrl);
    if (services.length > 0)     msgParts.push('Services: ' + services.join(', '));

    sendmailApi(
        (firstName + ' ' + lastName).trim(),
        $form.find('input[name="popupemail"]').val(),
        $form.find('input[name="phone"]').val(),
        msgParts.join(' | '),
        $btn, orig,
        websiteUrl
    );
});