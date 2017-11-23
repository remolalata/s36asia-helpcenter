$(document).bind("mobileinit", function(){
  $.mobile.ajaxEnabled=false;
  $.mobile.loadingMessage = false;
  $.mobile.loading().hide();
})


$(document).ready(function () {


  theWidth = $(".casino-g-img").css('width');

  $('a, .hamburger').click(function() {
    $('.collapse').collapse('hide');
  })
  $("a").each(function(){
    $(this).attr("rel","external");
  });
  $('#navbar-collapse-1').on('hidden.bs.collapse', function() {
     $('.hamburger').removeClass('is-active');
  });
  /**
   * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
   *
   * @private
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
   * @callback requestCallback      callback   - Callback function for each iteration.
   * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
   * @returns {}
   */
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

  $('#country-sel').flagStrap({
    countries: {
      "CN": "中国",
      "TW": "台灣",
      "JP": "日本国",
      "UM": "UK",
      "VN": "Vietnam",
      "ID": "Indonesia",
      "MY": "Malaysia",
      "TH": "ไทย",
      "IN": "India",
      }
  });

  $('#csCallselectflag').flagStrap({
    countries: {
      "CN": "中国",
      "TW": "台灣",
      "JP": "日本国",
      "UM": "UK",
      "VN": "Vietnam",
      "ID": "Indonesia",
      "MY": "Malaysia",
      "TH": "ไทย",
      "IN": "India",
      }
  });

  var flag_dropdown = [
    {
      'country_name': '中国',
      'icon': 'cn'
    },
    {
      'country_name': '台灣',
      'icon': 'tw'
    },
    {
      'country_name': '日本国',
      'icon': 'jp'
    },
    {
      'country_name': 'UK',
      'icon': 'um'
    },
    {
      'country_name': 'Vietnam',
      'icon': 'vn'
    },
    {
      'country_name': 'Indonesia',
      'icon': 'id'
    },
    {
      'country_name': 'Malaysia',
      'icon': 'my'
    },
    {
      'country_name': 'ไทย',
      'icon': 'th'
    },
    {
      'country_name': 'India',
      'icon': 'in'
    }
  ];

  $.each(flag_dropdown, function(key, val) {
    $('.flag-dropdown .dropdown-menu').append('<li><a href="#" data-value="'+val.country_name+'" data-icon="'+val.icon+'"> <span class="flag-icon flag-icon-'+val.icon+'"> </span> '+val.country_name+'</a></li>')
  })

   var hash = window.location.hash;
   if (hash != "") {
     $('html,body').animate({
         scrollTop: 0
     }, 500);

     $('.sidebar-nav li').each(function() {
       $(this).removeClass('active');
     });
     $('.promo-tabs li').each(function() {
       $(this).removeClass('active');
     });
     $('.helpcenter .tab-content div').each(function() {
       $(this).removeClass('active');
     });
     $('.promo-section .breadcrumb li a[href="promotion.html"]').attr('href', function(i, href) {
       return href + hash;
     });

     var link = "";
     $('sidebar-nav li').each(function() {
       link = $(this).find('a').attr('href');
       if (link == hash) {
         $(this).addClass('active');
       }
     });
     $('.helpcenter .tab-content div').each(function() {
       link = $(this).attr('id');
       if ('#'+link == hash) {
         $(this).addClass('active');
       }
     });

     if(hash == '#slot-tab2'){
       $('a[href="#slot-tab2"]').tab('show');
     }

     $('a[href="'+hash+'"]').tab('show');
   }
   $('a[href="'+hash+'"]').parent('li').attr('class', 'brand-nav active');

    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //   $('a[href="'+$(this).context.hash+'"]').parent('li').addClass('active');
    //   $('html,body').animate({
    //       scrollTop: 0
    //   }, 300);
    // });


    $('.browsers li #ie').hover(function() {
      $('.browsers li #ie img').attr('src', 'assets/img/footer/ie-b.png');
    }, function() {
      $('.browsers li #ie img').attr('src', 'assets/img/footer/ie.png');
    });

    $('.browsers li #moz').hover(function() {
      $('.browsers li #moz img').attr('src', 'assets/img/footer/moz-b.png');
    }, function() {
      $('.browsers li #moz img').attr('src', 'assets/img/footer/moz.png');
    });

    $('.browsers li #chrome').hover(function() {
      $('.browsers li #chrome img').attr('src', 'assets/img/footer/chrome-b.png');
    }, function() {
      $('.browsers li #chrome img').attr('src', 'assets/img/footer/chrome.png');
    });

    $('.browsers li #flash').hover(function() {
      $('.browsers li #flash img').attr('src', 'assets/img/footer/flash-b.png');
    }, function() {
      $('.browsers li #flash img').attr('src', 'assets/img/footer/flash.png');
    });

    $('.certs li #cert1').hover(function() {
      $('.certs li #cert1 img').attr('src', 'assets/img/footer/cert1-b.png');
    }, function() {
      $('.certs li #cert1 img').attr('src', 'assets/img/footer/cert1.png');
    });

    $('.certs li #cert2').hover(function() {
      $('.certs li #cert2 img').attr('src', 'assets/img/footer/cert2-b.png');
    }, function() {
      $('.certs li #cert2 img').attr('src', 'assets/img/footer/cert2.png');
    });

    $('.certs li #cert3').hover(function() {
      $('.certs li #cert3 img').attr('src', 'assets/img/footer/cert3-b.png');
    }, function() {
      $('.certs li #cert3 img').attr('src', 'assets/img/footer/cert3.png');
    });

    $('.certs li #cert4').hover(function() {
      $('.certs li #cert4 img').attr('src', 'assets/img/footer/cert4-b.png');
    }, function() {
      $('.certs li #cert4 img').attr('src', 'assets/img/footer/cert4.png');
    });

    $('#sagaming').hover(function() {
      $('#sagaming img').attr('src', 'assets/img/footer/sagaming-b.png');
    }, function() {
      $('#sagaming img').attr('src', 'assets/img/footer/sagaming.png');
    });

    $('#ssalon').hover(function() {
      $('#ssalon img').attr('src', 'assets/img/footer/ssalon-b.png');
    }, function() {
      $('#ssalon img').attr('src', 'assets/img/footer/ssalon.png');
    });

    $('#hhelp').hover(function() {
      $('#hhelp img').attr('src', 'assets/img/footer/help-b.png');
    }, function() {
      $('#hhelp img').attr('src', 'assets/img/footer/help.png');
    });

    $('.live-game > .promo-c > .promo-cta .pull-right').hover(function() {
      $(this).find('img').attr('src', 'assets/img/promo/new/info-b.png');
    }, function() {
      $(this).find('img').attr('src', 'assets/img/promo/new/info.png');
    });

    $('#menu').on('show.bs.collapse', function () {
       $('.menu-toggle i').removeClass('fa-angle-down').addClass('fa-angle-up');
    })

    $('#menu').on('hide.bs.collapse', function () {
       $('.menu-toggle i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    $('#m-selectpicker2-collapse').on('show.bs.collapse', function () {
       $('.m-selectpicker2 i').removeClass('fa-angle-down').addClass('fa-angle-up');
    })

    $('#m-selectpicker2-collapse').on('hide.bs.collapse', function () {
       $('.m-selectpicker2 i').removeClass('fa-angle-down').addClass('fa-angle-down');
    })

    $('a[href="#ctab2"]').click(function() {
      $('#ctab2').removeClass('ctab-none');
      $('#ctab3').addClass('ctab-none');
    });

    $('a[href="#ctab3"]').click(function() {
      $('#ctab3').removeClass('ctab-none');
      $('#ctab2').addClass('ctab-none');
    });

    $('#casinoSeeMoreBtn').click(function() {
      if($('#ctab2').css('display') == 'block'){
        $('#ctab3').toggleClass('casino-more');
      }else{
        $('#ctab2').toggleClass('casino-more');
      }
    });

    $('a[href="#stab1"]').click(function() {
      $('.stab1').removeClass('stab-none');
      $('.stab2').addClass('stab-none');
    });

    $('a[href="#stab2"]').click(function() {
      $('.stab2').removeClass('stab-none');
      $('.stab1').addClass('stab-none');
    });


    $('.promotion-swiper-container a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.promotion-swiper-container').find('.active').removeClass('active');
      $(this).addClass('active');
    });

    $('.desktop-support .flag-icon').parent('div').addClass('county-line');

    $('#desktopSupportClose').click(function() {
      $('#desktopSupport').collapse('toggle');
    })

    $('.selectpicker2-sub').hover(function() {
      $('.selectpicker2-sub').css('color', '#c4c4c4');
      $(this).css('color', '#fba601');
      $(this).parent('a').find('.cntry').css('color', '#fff');
    }, function() {
      $(this).css('color', '#c4c4c4');
      $(this).parent('a').find('.cntry').css('color', '#fff');
    });

    $('.selectpicker2-menu a').hover(function() {
      $(this).css('border-bottom', '1px solid #fba601');
    }, function() {
      $(this).find('.cntry').css('color', '#fff');
      $(this).css('border-bottom', '1px solid #fba601');
    });

    $('#a-acc img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/acc2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/acc2.png');
    });

    $('#a-wallet img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/wallet2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/wallet2.png');
    });

    $('#a-info img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/info2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/info2.png');
    });

    $('#a-out img').hover(function() {
      $(this).attr('src', 'assets/img/afterlogin/out2-b.png');
    }, function() {
      $(this).attr('src', 'assets/img/afterlogin/out2.png');
    });

    $('.m-top-header-loc, .m-top-header-web, .lp-panel-close').click(function() {
      $('.lang .drop').css({
        "display": "block",
        "position": "absolute",
        "z-index": "88888",
      })
    });

    $('#gs-body').on('show.bs.collapse', function () {
      $('.m-top-header-phone, .m-top-header-email').parent('div').css({
        'background' : '#2a2a2a',
        'margin-right' : '40%'
      });
      $('.gs-collapse-toggle').css('display', 'block');
    });

    $('#gs-body').on('hidden.bs.collapse', function () {
      $('.m-top-header-phone, .m-top-header-email').parent('div').css({
        'background' : '#161616',
        'margin-right' : 'auto'
      });
      $('.gs-collapse-toggle').css('display', 'none');
    });

    $('.lang').hover(function() {
      $('.lang .top-header-loc span, .lang .top-header-web span').css('color', '#fba601');
      $('.top-header-loc img').attr('src', 'assets/img/header/location-b.png');
      $('.top-header-web img').attr('src', 'assets/img/header/web-b.png');
    }, function() {
      $('.lang .top-header-loc span, .lang .top-header-web span').css('color', '#b3b3b3');
      $('.top-header-loc img').attr('src', 'assets/img/header/location.png');
      $('.top-header-web img').attr('src', 'assets/img/header/web.png');
    });

    $('.gs').hover(function() {
      $(this).css('border-color', '#fba601');
      $('.gs .top-header-phone span, .gs .top-header-email span').css('color', '#fba601');
      $('.top-header-phone img').attr('src', 'assets/img/header/phone-b.png');
      $('.top-header-email img').attr('src', 'assets/img/header/email-b.png');
    }, function() {
      $(this).css('border-color', 'transparent');
      $('.gs .top-header-phone span, .gs .top-header-email span').css('color', '#b3b3b3');
      $('.top-header-phone img').attr('src', 'assets/img/header/phone.png');
      $('.top-header-email img').attr('src', 'assets/img/header/email.png');
    });

    $('#drop2').on('show.bs.collapse', function () {
      $('.m-top-header-web, .m-top-header-loc').parent('div').css({
        'background':'#2a2a2a',
        'width':'120px',
        'margin-left':'0',
        'margin-right':'0'
      });
      $('.lp-collapse-toggle').css('display', 'block');
    });

    $('#drop2').on('hidden.bs.collapse', function () {
      $('.m-top-header-web, .m-top-header-loc').parent('div').css({
        'background':'#161616',
        'width':'100%',
        'margin-left':'auto',
        'margin-right':'auto'
      });
      $('.lp-collapse-toggle').css('display', 'none');
    });

    $('.promo-join img').hover(function() {
      $(this).attr('src', 'assets/img/promo/new/join-hover.png')
    }, function() {
      $(this).attr('src', 'assets/img/promo/new/join.png')
    });

    $('.promo-offer img').hover(function() {
      $(this).attr('src', 'assets/img/promo/new/offer-hover.png')
    }, function() {
      $(this).attr('src', 'assets/img/promo/new/offer.png')
    });

    $('#myModal1').click(function() {
      $('a[href="#demo"]').tab('show');
    });

    $('#myModal2b').click(function() {
      $('a[href="#Registration"]').tab('show');
    });

    $('#myModal3bprev').click(function() {
      $('a[href="#Registration"]').tab('show');
    });

    $('#myModal2bprev').click(function() {
      $('a[href="#login"]').tab('show');
    });

    $('.myModalTab1').click(function() {
      $('a[href="#login"]').tab('show');
    })

    $('.myModalTab3').click(function() {
      $('a[href="#demo"]').tab('show');
    })
    $('img[src="assets/img/casino/baccarat/play-icon.png"]').hover(function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-btn-hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-icon.png');
    });
    $('img[src="assets/img/casino/baccarat/play-icon.png"]').hover(function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-btn-hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/casino/baccarat/play-icon.png');
    });

    // $('.casino-g-img, .absolute-play-casino a img').hover(function() {
    //   $(this).closest('.casino-g').find('.absolute-play a img').attr('src', 'assets/img/casino/baccarat/play-btn-hover.png');
    // }, function() {
    //   $(this).closest('.casino-g').find('.absolute-play a img').attr('src', 'assets/img/casino/baccarat/play-icon.png');
    // })

    $('a[href="#myModalTab1-2"]').on('shown.bs.tab', function () {
      $('.mymodal-init').removeClass('mymodal-none');
      $('#myModal2b_registration').css('display', 'inline-block');
      $('#myModalTab li:nth-child(1)').css('top', '210px');
      $('#myModalTab li:nth-child(1)').css('display', 'block');
      $('#myModalTab li:nth-child(2)').css('display', 'none');
    });

    $('a[href="#myModalTab1-2"]').on('hidden.bs.tab', function () {
      $('#myModal2b_registration').css('display', 'none');
      $('#myModalTab li:nth-child(1)').css('top', '150px');
      $('#myModalTab li:nth-child(1)').css('display', 'none');
      $('#myModalTab li:nth-child(2)').css('display', 'block');
    });

    $('.banner-overlay button').click(function() {
      $('.banner-overlay').slideUp();
    })

    $('.selectpicker2, .sitemap-selectpicker').click(function() {
      $('#drop').toggleClass('lang-click');
      $('.drop-lang-picker').toggleClass('drop-lang-picker-active');
    });

    $('#drop3 .close').click(function() {
      $('#drop3').removeClass('lang-click');
    });

    $('img[src="assets/img/s36tw-mobile-home_12.png"]').click(function() {
      $('#demoModal').modal('show');
      $('a[href="#myModalTab1-1"').tab('show');
    });

    var showAlert = true;
    $('#myModal').on('show.bs.modal', function(e) {
      if(showAlert == true){
        $('.modal-dialog').velocity('transition.flipYIn', {duration: 300});
        showAlert = false;
      }
    })

    $('#myModal').on('hide.bs.modal', function(e) {
      showAlert = true;
    })

    $('#footerLinkLang').click(function() {
      $('html,body').animate({
          scrollTop: 0
      }, 1000);
      $('#drop').toggleClass('lang-click');
    });

    $('.cta-contact-hc').click(function() {
      $('a[href="#tab2"]').tab('show');
      $('.nav.nav-pills.brand-pills.nav-stacked.sidebar-nav li').removeClass('active');
      $('.nav.nav-pills.brand-pills.nav-stacked.sidebar-nav li a[href="#tab2"]').parent('li').addClass('active');
    });

    $('#myModal').on('show.bs.modal', function () {
      if($('#drop').hasClass('lang-click')){
        $('#drop').toggleClass('lang-click');
      }
    });

    $('#myModal').on('hide.bs.modal', function () {
      if($('.selectpicker2 .fa').hasClass('fa-angle-up')){
        $('.selectpicker2 .fa').removeClass('fa-angle-up').addClass('fa-angle-down');
      }
    });

    $('.promo-btn img').hover(function() {
      $(this).attr('src', 'assets/img/promo/new_13/hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/promo/new_13/active.png');
    });

    $('.csmodal-forgot').click(function() {
      $('#loginModal').modal('toggle');
      $('#csModal').modal('toggle');
    });

    $('.promo-heart a img').hover(function() {
      $(this).attr('src', 'assets/img/Hearto_hover.png');
    }, function() {
      $(this).attr('src', 'assets/img/Hearto.png');
    })

    $('.navaa li a').hover(function() {
      if($(this).find('i').length > 0){
        $(this).find('i').toggleClass('fa-home fa-home-hover');
      }
    }, function() {
      if($(this).find('i').length > 0){
        $(this).find('i').toggleClass('fa-home fa-home-hover');
      }
    });

    $('.fa-mobile').hover(function() {
      $(this).removeClass('fa-mobile');
      $(this).addClass('fa-mobile-hover');
    }, function() {
      $(this).addClass('fa-mobile');
      $(this).removeClass('fa-mobile-hover');
    });

    $('.fa-tablet').hover(function() {
      $(this).removeClass('fa-tablet');
      $(this).addClass('fa-tablet-hover');
    }, function() {
      $(this).addClass('fa-tablet');
      $(this).removeClass('fa-tablet-hover');
    });

    $('.fa-laptop').hover(function() {
      $(this).removeClass('fa-laptop');
      $(this).addClass('fa-laptop-hover');
    }, function() {
      $(this).addClass('fa-laptop');
      $(this).removeClass('fa-laptop-hover');
    });

    $('.fa-desktop').hover(function() {
      $(this).removeClass('fa-desktop');
      $(this).addClass('fa-desktop-hover');
    }, function() {
      $(this).addClass('fa-desktop');
      $(this).removeClass('fa-desktop-hover');
    });

    $('.fa-mobile-lg').hover(function() {
      $(this).removeClass('fa-mobile-lg');
      $(this).addClass('fa-mobile-hover-lg');
    }, function() {
      $(this).addClass('fa-mobile-lg');
      $(this).removeClass('fa-mobile-hover-lg');
    });

    $('.fa-tablet-lg').hover(function() {
      $(this).removeClass('fa-tablet-lg');
      $(this).addClass('fa-tablet-hover-lg');
    }, function() {
      $(this).addClass('fa-tablet-lg');
      $(this).removeClass('fa-tablet-hover-lg');
    });

    $('.fa-laptop-lg').hover(function() {
      $(this).removeClass('fa-laptop-lg');
      $(this).addClass('fa-laptop-hover-lg');
    }, function() {
      $(this).addClass('fa-laptop-lg');
      $(this).removeClass('fa-laptop-hover-lg');
    });

    $('.fa-desktop-lg').hover(function() {
      $(this).removeClass('fa-desktop-lg');
      $(this).addClass('fa-desktop-hover-lg');
    }, function() {
      $(this).addClass('fa-desktop-lg');
      $(this).removeClass('fa-desktop-hover-lg');
    });

    $('.fa-mobile-lotto-lg').hover(function() {
      $(this).removeClass('fa-mobile-lotto-hover-lg');
      $(this).addClass('fa-mobile-lotto-hover-lg');
    }, function() {
      $(this).addClass('fa-mobile-lotto-hover-lg');
      $(this).removeClass('fa-mobile-lotto-hover-lg');
    });

    $('.fa-desktop-lotto-lg').hover(function() {
      $(this).removeClass('fa-desktop-lotto-hover-lg');
      $(this).addClass('fa-desktop-lotto-hover-lg');
    }, function() {
      $(this).addClass('fa-desktop-lotto-hover-lg');
      $(this).removeClass('fa-desktop-lotto-hover-lg');
    });

    $('.helpcenter-footer ul li div a').click(function() {
      window.location.hash='';
      var link = $(this).attr('href');
      link = link.substr(16);
      $('a[href="#'+link+'"]').tab('show');
    })

    $('.lg-playnow, .arrow-right-btn').hover(function() {
      $(this).find('img').attr('src', 'assets/img/arrow-right-hover.png');
    }, function() {
      $(this).find('img').attr('src', 'assets/img/arrow-right.png');
    });

    $('.lotto-sp-back-btn').hover(function() {
      $(this).find('img.sp-enter').attr('src', 'assets/img/arrow-right-hover.png');
    }, function() {
      $(this).find('img.sp-enter').attr('src', 'assets/img/enter.png');
    })

    $('.select-country-code-dropdown ul li a').click(function() {
      var val = $(this).data('value');
      $('.select-country-code').html(val);
    })

    $('.navbar-afterlogin ul li a').hover(function() {
      $(this).css('color','#fff');
    }, function() {
      $(this).css('color','#999');
    });

    $('.casino-desc-bot .sp-btn-hidden, .btn-promotion').hover(function() {
      $(this).addClass('sp-btn-hidden-hover');
      $(this).addClass('btn-promotion-hover');
    }, function() {
      $(this).removeClass('sp-btn-hidden-hover');
      $(this).removeClass('btn-promotion-hover');
    })

    $('a[href="#slot-tab1"]').on('shown.bs.tab', function () {
      $('.slots-swiper-container .swiper-slide a').removeClass('active');
      $(this).addClass('active');
    });

    $('a[href="#slot-tab2"]').on('shown.bs.tab', function () {
      $('.slots-swiper-container .swiper-slide a').removeClass('active');
      $(this).addClass('active');
    })

    $('#offer-dropdown').on('show.bs.dropdown', function () {
      $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
    });

    $('#offer-dropdown').on('hide.bs.dropdown', function () {
      $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
    });

    $('.promotion-form .dropdown-menu li a').click(function() {
      $('.promotion-form .dropdown button span').html($(this).html());
    });

    $('.lotto-button a').hover(function() {
      $('.lotto-button a .corners-outer').addClass('corners-outer-hover');
    }, function() {
      $('.lotto-button a .corners-outer').removeClass('corners-outer-hover');
    })

    $.each($('.navbar-header-desktop ul li'), function(index, value) {
       $(this).hover(function() {
         $(this).find('a span').css('color', '#fba601');
         $(this).find('a .notif').css('color', '#fff');
         var img = $(this).find('a img').attr('src');
         $(this).find('a img').attr('src', img.slice(0, -4)+'Y.png');
       }, function() {
         $(this).find('a span').css('color', '#fff');
         var img = $(this).find('a img').attr('src');
         $(this).find('a img').attr('src', img.slice(0, -5)+'.png');
       })
     });

     $.each($('.navbar-right-desktop li:not(.navbar-dekstop-collapse-li)'), function(index, value) {
       $(this).hover(function() {
         $(this).find('a').css('color', '#fba601');
        var img = $(this).find('a img').attr('src');
        $(this).find('a img').attr('src', img.slice(0, -4)+'Y.png');
       }, function() {
         $(this).find('a').css('color', '#fff');
         var img = $(this).find('a img').attr('src');
         $(this).find('a img').attr('src', img.slice(0, -5)+'.png');
       })
     });

     var the_active = '';
     $('.flag-dropdown ul li a').click(function() {
       $('.flag-val').html($(this).data('value'));
       $('.flag-dropdown1 button').html('<span class="flag-icon flag-icon-'+$(this).data('icon')+'"></span>'+$(this).data('value'));
     });
     var fd2 = [
       {
         'country_name': '繁體中文 (台灣)',
         'status': 'check',
         'link': '#',
       },
       {
         'country_name': '简体中文 (中国)',
         'status': 'uncheck',
         'link': '../',
       },
       {
         'country_name': 'English (United Kingdom)',
         'status': 'uncheck',
         'link': '../en/',
       },
       {
         'country_name': 'Bahasa (Indonesia)',
         'status': 'uncheck',
         'link': '../id/',
       },
       {
         'country_name': 'Tiếng Việt (Viét Nam)',
         'status': 'uncheck',
         'link': '#',
       },
       {
         'country_name': '日本語 (日本国)',
         'status': 'uncheck',
         'link': '../jp/',
       },
       {
         'country_name': 'ภาษาไทย (ประเทศไทย)',
         'status': 'uncheck',
         'link': '../th/',
       },
       {
         'country_name': 'हिन्द (भारत)',
         'status': 'uncheck',
         'link': '../in/',
       },
       {
         'country_name': 'Melayu (Malaysia)',
         'status': 'uncheck',
         'link': '../my-bm/',
       },
       {
         'country_name': 'English (Malaysia)',
         'status': 'uncheck',
         'link': '../my-en/',
       },
       {
         'country_name': '中文 (马来西亚)',
         'status': 'uncheck',
         'link': '../my-cn/',
       }
     ];

     $.each(fd2, function(k, v) {
       $('.footer-dropdown2 ul').append('<li class="'+v.status+'"><a href="'+v.link+'" data-value="'+v.country_name+'"><i class="fa fa-check"> </i> '+v.country_name+'</a></li>')
       $('.m-footer-dropdown ul').append('<li class="'+v.status+'"><a href="'+v.link+'"><i class="fa fa-check"> </i> '+v.country_name+'</a></li>')
     })

     $('.footer-dropdown2 ul, .m-footer-dropdown ul').append('<li class="last"><a href="javascript:void(0)">取消 </a></li>')

     $('.footer-dropdown2 ul li a').click(function() {
       console.log($(this).data('value'));
       $('.footer-dropdown2 button').html($(this).data('value'));
     })

     $('.footer-dropdown2 ul li.title div').click(function(e) {
       e.preventDefault();
       e.stopPropagation();
     })

     $.each($('.contact-title ul li'), function(index, value) {
       $(this).hover(function() {
         $(this).find('a').addClass('flag-icon-'+$(this).find('a').data('icon')+'-hover');
       }, function() {
         $(this).find('a').removeClass('flag-icon-'+$(this).find('a').data('icon')+'-hover');
       });
     });

     $('.contact-title ul li a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
       $('.contact-title ul li a').removeClass('flag-icon-'+$(e.relatedTarget).data('icon')+'-active');
       console.log(e.target);
       $(this).addClass('flag-icon-'+$(e.target).data('icon')+'-active');
      })

      $('.bookmark').hover(function() {
        $(this).find('a').css('color', '#fba601');
        $(this).addClass('bookmark-hover');
      }, function() {
        $(this).find('a').css('color', '#fff');
        $(this).removeClass('bookmark-hover');
      })

      $('.gp-more').hover(function() {
        $(this).find('span').css('color', '#fba601');
        $(this).addClass('gp-more-hover');
      }, function() {
        $(this).find('span').css('color', '#fff');
        $(this).removeClass('gp-more-hover');
      });

      $('img[src="assets/img/casino/baccarat/info.png"]').hover(function() {
        $(this).attr('src', 'assets/img/casino/baccarat/info-hover.png');
      }, function() {
        $(this).attr('src', 'assets/img/casino/baccarat/info.png');
      })

      $('.cta .more').hover(function() {
        $(this).addClass('more-hover');
      }, function() {
        $(this).removeClass('more-hover');
      });

      $('.flexslider-parent').flexslider({
          selector: ".slides-parent > li",
          animation: "slide",
          direction: 'horizontal',
          slideshowSpeed: 10000,
          directionNav: false,
          controlNav: false,
          animationLoop: true,
          after: function(slider) {
            // $('.flexslider-parent').flexslider('pause');
            $('#flexslider-nested-1.flexslider').flexslider({
              animation: 'slide',
              direction: 'vertical',
              controlNav: false,
              slideshowSpeed: '3000',
              directionNav: false,
              animationLoop: false,
              end: function() {
                // $('.flexslider-parent').flexslider('play');
              }
            });
            $('#flexslider-nested-2.flexslider').flexslider({
              animation: 'slide',
              direction: 'vertical',
              controlNav: false,
              slideshowSpeed: '3000',
              directionNav: false,
              reverse: true,
              animationLoop: false
            });
            $('#flexslider-nested-3.flexslider').flexslider({
              animation: 'slide',
              direction: 'vertical',
              controlNav: false,
              slideshowSpeed: '3000',
              directionNav: false,
              animationLoop: false
            });
          }
      });

      $('.malupet-nanaman .flexslider').flexslider({
        animation: 'slide',
        direction: 'vertical',
        slideshowSpeed: '4000',
        animationSpeed: '1000',
        controlNav: false,
        directionNav: false,
        touch: false,
      });

      $('.mobile-logo-banner-text .flexslider').flexslider({
        animation: "slide",
        direction: 'vertical',
        directionNav: false
      });

      $('.top-games .flexslider').flexslider({
        animation: 'slide',
        direction: 'vertical',
        slideshowSpeed: '5000',
        controlNav: false,
        directionNav: false,
        touch:false
      });

      $('.top1 .flexslider').flexslider({
        animation: 'slide',
        direction: 'vertical',
        slideshowSpeed: '5000',
        controlNav: false,
        directionNav: false,
        animationLoop: true,
      });
      $('.top2 .flexslider').flexslider({
        animation: 'slide',
        direction: 'vertical',
        slideshowSpeed: '6000',
        controlNav: false,
        directionNav: false,
        reverse: true,
        animationLoop: true,
      });
      $('.top3 .flexslider').flexslider({
        animation: 'slide',
        direction: 'vertical',
        slideshowSpeed: '7000',
        controlNav: false,
        directionNav: false,
        animationLoop: true,
      });
      $('.top-players .flexslider').flexslider({
        animation: 'slide',
        direction: 'horizontal',
        slideshowSpeed: '2000',
        controlNav: false,
        directionNav: false,
        animationLoop: true,
      });

      $('.recent-winners .flexslider').flexslider({
        animation: 'slide',
        direction: 'vertical',
        slideshowSpeed: '4000',
        controlNav: false,
        directionNav: false,
        touch:false
      });
      $('.tab .flexslider').flexslider({
        animation: 'slide ',
        direction: 'vertical',
        slideshowSpeed: '4000',
        controlNav: false,
        reverse:true,
        directionNav: false

      });
      $('.tab2 .flexslider').flexslider({
        animation: 'slide ',
        direction: 'vertical',
        slideshowSpeed: '4000',
        controlNav: false,
        reverse:true,
        directionNav: false
      });
      $('.tab3 .flexslider').flexslider({
        animation: 'slide ',
        direction: 'vertical',
        slideshow: false,
        controlNav: false,
        reverse:true,
        directionNav: true


});
$('.tops .flexslider').flexslider({
  animation: 'slide ',
  direction: 'vertical',
  slideshowSpeed: '4000',
  controlNav: false,
  directionNav: false
});

$('.one-winner .flexslider').flexslider({
  animation: 'slide ',
  direction: 'vertical',
  slideshowSpeed: '3000',
  controlNav: false,
  directionNav: false,
  touch: false
});

  $(window).scroll(function() {
    $('.float-contacts-m').css('opacity', '1')
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('.float-contacts-m').css('opacity', '0.5')
        console.log("Haven't scrolled in 250ms!");
    }, 250));
  });

  $('.side-logo').hover(function() {
    $(this).css('color', '#fba601');
    if($(this).hasClass('side-logo-right')){
      $(this).addClass('side-logo-right-hover');
    }else{
      $(this).addClass('side-logo-plus-hover');
    }
  }, function() {
    $(this).css('color', '#fff');
    if($(this).hasClass('side-logo-right')){
      $(this).removeClass('side-logo-right-hover');
    }else{
      $(this).removeClass('side-logo-plus-hover');
    }
  })

  $('.myModal2b_login_a').click(function() {
    $('#loginModal').modal('toggle');
    $('#registerModal').modal('toggle')
  });

  $('.myModal2b_registration_a').click(function() {
    $('#registerModal').modal('toggle')
    $('#loginModal').modal('toggle');
  })

  $('.step-search').hover(function() {
    $(this).addClass('step-search-hover');
  }, function() {
    $(this).removeClass('step-search-hover');
  });

  $('.cs247').hover(function() {
    $(this).css('color', '#fba601');
    $(this).find('img').attr('src', 'assets/img/Y3Y.png')
  }, function() {
    $(this).css('color', '#fff');
    $(this).find('img').attr('src', 'assets/img/Y3.png')
  })

  $('.new-counter .img').hover(function() {
    $(this).find('img').attr('src', 'assets/img/new-counter-speaker-hover.png');
  }, function() {
    $(this).find('img').attr('src', 'assets/img/new-counter-speaker.png');
  });

  $('.lotto-button .text').click(function() {
    $('#loginModal').modal('show');
  })

  $('.inside-buttons.trigger').click(function() {
    $('.winners-others').toggle()
  });

  $('.casino-show-more a').click(function() {
    if($('.new-game-tab ul li.active a').attr('href') == "#ctab2"){
      $('a[href="#ctab3"]').trigger('click');
      $(this).html('顯示百家樂');
    }else{
      var link = $('.new-game-tab ul li.active a').attr('href');
      $('a[href="#ctab2"]').trigger('click');
      $(this).html('顯示其他遊戲');
    }
  })

  $('.deposit-offers .offers').hover(function() {
    $(this).find('img').attr('src', 'assets/img/search-hover.png');
  }, function() {
    $(this).find('img').attr('src', 'assets/img/search.png');
  })

  $('.banner-slider').flexslider({
    animation: "slide",
    slideshowSpeed: 3000,
    animationSpeed: 1000,
  });

  $('.info-icon').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  })

  $('.mobile-logo-banner-text .close').click(function(){
    $('.mobile-logo-banner-text').addClass('unshow');
    $('.mobile-logo-banner-text-trigger a').toggle();

    });

  $('.mobile-logo-banner-text-trigger a').click(function() {
    $('.mobile-logo-banner-text').removeClass('unshow');

    $(this).toggle();
  })

});


function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#demo-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#login-form-btn').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#demo-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $('#login-form-link').addClass('active');
        e.preventDefault();
    });
    $('#login-form-btn-bot').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#demo-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $('#login-form-link').addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#demo-form").fadeOut(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#regis-form-btn').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#demo-form").fadeOut(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#demo-form-link').removeClass('active');
        $('#register-form-link').addClass('active');
        e.preventDefault();
    });
    $('#demo-form-link').click(function(e) {
        $("#demo-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $("#register-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

        // $('.dropdown=toggle').click(function() {
        //   $('i', this).toggleClass('fa-caret-up fa-caret-down');
        // });
    $('#mobile-button').click(function() {
      $('i', this).toggleClass('fa-caret-up fa-caret-down');
    });
    $('.asd').click(function() {
      $(this).toggleClass('kulaymalupet');
    });

    $("#btn").click(function(){
        $(".contactus-m").toggleClass( "contactus-bg" );
    });

    $('#fg1').hover(
      function() {
        $(this).attr("src","assets/img/footer/g1-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g1.png");
    });

    $('#fg2').hover(
      function() {
        $(this).attr("src","assets/img/footer/g2-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g2.png");
    });

    $('#fg3').hover(
      function() {
        $(this).attr("src","assets/img/footer/g3-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g3.png");
    });

    $('#fg5').hover(
      function() {
        $(this).attr("src","assets/img/footer/PanDelta-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/PanDelta.png");
    });
    $('#fg6').hover(
      function() {
        $(this).attr("src","assets/img/footer/Mcube-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/Mcube.png");
    });

    $('#fg4').hover(
      function() {
        $(this).attr("src","assets/img/footer/g4-hover.png");
    },function() {
        $(this).attr("src","assets/img/footer/g4.png");
    });

    $('#gs-body').on('show.bs.collapse', function () {
      $('.mobile-top-menu-close').addClass('mobile-top-menu-close-toggle');
    });

    $('#mobile-top-menu').on('show.bs.collapse', function() {
      $('.mobile-button').addClass('mobile-button-bg');
    });

    $('#mobile-top-menu').on('hide.bs.collapse', function() {
      $('.mobile-button').removeClass('mobile-button-bg');
    });

    $('#gs-body').on('hidden.bs.collapse', function () {
      $('.mobile-top-menu-close').removeClass('mobile-top-menu-close-toggle');
    });

    $('#mobile-top-menu-close').click(function() {
      $('#gs-body').collapse('hide');
      $(".contactus-m").toggleClass( "contactus-bg" );
    });

    $('.desktop-support').on('show.bs.collapse', function(){
      // $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-up");
      $('.desktop-support-trigger .fa').removeClass("fa-caret-down").addClass("fa-caret-up");
    }).on('hide.bs.collapse', function(){
      $(this).parent().find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
    });

    $('.selectpicker2').click(function() {
      $('.selectpicker2 .fa').toggleClass('fa-angle-down fa-angle-up');
    });

    $('.footer-dropdown button').click(function() {
      $('.footer-dropdown button .fa').toggleClass('fa-angle-up fa-angle-down');
    })

    $('.selectpicker').selectpicker();

    $('.modal').on('show.bs.modal', function(e) {
      var attr = $(this).attr('id');
      if($(this).attr('id') != "myModal"){
        $('.modal-dialog').velocity('transition.flipYIn', {duration: 300});
      }
    });
});
$(window).load(function() {
  $('.loading').css('display', 'none')
})
$('#datepicker-from').datepicker({
    autoclose: true
});
$('#datepicker-to').datepicker({
    autoclose: true
});
