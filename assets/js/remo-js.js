$(document).ready(function() {
  $('.tab-content #tab2').tab('show')
  $('#tabContentSelector').on('change', function() {
    var val = $('#tabContentSelector').val();
    $('.'+val).trigger('click');
  });

  $('#navContentSelector').on('change', function(e) {
    e.preventDefault();
    var val = $('#navContentSelector').val();
    $('.tab-content .active').removeClass('active');
    $('[href="'+val+'"]').tab('show');
  });

  // $('.collapse').on('shown.bs.collapse', function(){
  //   $(this).parent().find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
  //   console.log($(this).parent());
  //   }).on('hidden.bs.collapse', function(){
  //   $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
  // });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.brand-nav.active').removeClass('active');
    $(e.target).parent().addClass('active');
  });

  $('.main-nav').click(function(e) {
    e.preventDefault();
  });

  $('.seo-nav a[href="#red"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s-hover.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#orange"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www-hover.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#yellow"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card-hover.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#green"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop-hover.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7.png');
  });

  $('.seo-nav a[href="#blue"]').on('shown.bs.tab', function (e) {
    $('#red-tab').attr('src', 'assets/img/seo-images/s.png');
    $('#orange-tab').attr('src', 'assets/img/seo-images/www.png');
    $('#yellow-tab').attr('src', 'assets/img/seo-images/card.png');
    $('#green-tab').attr('src', 'assets/img/seo-images/laptop.png');
    $('#blue-tab').attr('src', 'assets/img/seo-images/7-hover.png');
  });

  function dwActive(dw, type, val){
    $('#deposit1').closest('li').removeClass('deposit-active');
    $('#deposit2').closest('li').removeClass('deposit-active');
    $('#deposit3').closest('li').removeClass('deposit-active');
    $('#deposit4').closest('li').removeClass('deposit-active');
    $('#deposit5').closest('li').removeClass('deposit-active');
    $('#withdraw1').closest('li').removeClass('deposit-active');
    $('#withdraw2').closest('li').removeClass('deposit-active');
    $('#withdraw3').closest('li').removeClass('deposit-active');
    $('#withdraw4').closest('li').removeClass('deposit-active');
    $('#withdraw5').closest('li').removeClass('deposit-active');
    $('#withdraw6').closest('li').removeClass('deposit-active');

    $('#' + dw).closest('li').addClass('deposit-active');

    if(type == "deposit"){
      $('#deposit-info-val').html(val);
      $(".deposit-info").css('display', 'block');
      $(".withdraw-info").css('display', 'none');
    }else{
      $('#withdraw-info-val').html(val);
      $(".deposit-info").css('display', 'none');
      $(".withdraw-info").css('display', 'block');
    }
  }

  $("#deposit1").click(function() {
    dwActive("deposit1", "deposit", $(this).val());
  });

  $("#deposit2").click(function() {
    dwActive("deposit2", "deposit", $(this).val());
  });

  $("#deposit3").click(function() {
    dwActive("deposit3", "deposit", $(this).val());
  });

  $("#deposit4").click(function() {
    dwActive("deposit4", "deposit", $(this).val());
  });

  $("#deposit5").click(function() {
    dwActive("deposit5", "deposit", $(this).val());
  });

  $("#withdraw1").click(function() {
    dwActive("withdraw1", "withdraw", $(this).val());
  });

  $("#withdraw2").click(function() {
    dwActive("withdraw2", "withdraw", $(this).val());
  });

  $("#withdraw3").click(function() {
    dwActive("withdraw3", "withdraw", $(this).val());
  });

  $("#withdraw4").click(function() {
    dwActive("withdraw4", "withdraw", $(this).val());
  });

  $("#withdraw5").click(function() {
    dwActive("withdraw5", "withdraw", $(this).val());
  });

  $("#withdraw6").click(function() {
    dwActive("withdraw6", "withdraw", $(this).val());
  });

});
