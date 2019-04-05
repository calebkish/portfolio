$(document).ready(function(){

  // When the page is resized
  $(window).resize(function(){
    if ($(window).width() >= 1000) {
      $('.menu-list').show();
    }
    else {
      $('.menu-list').hide();
      $('.menu-bars').attr('src', 'icons/iconmonstr-menu-1.svg');
    }
  });

  // When the menu bars icon is clicked
  $('.menu-bars').click(function(){
    $(this).toggle();
    $('.menu-list').slideToggle(500);
    $(this).fadeOut(300);
    var src = $(this).attr('src');
    var newsrc = (src == 'icons/iconmonstr-menu-1.svg') ? 'icons/iconmonstr-arrow-65.svg' : 'icons/iconmonstr-menu-1.svg';
    $(this).attr('src', newsrc);
    $(this).fadeIn(300);
  });

  // When the form dropdown value is changed
  $('#request').change(function(){
    var selectedValue = $(this).val();
    if (selectedValue == 'contact'){
      $('#shoe').css('display', 'none');
      $('#shoe-design').css('display', 'none');
      $('#shoe-size').css('display', 'none');
      $('#shoe-label').css('display', 'none');
      $('#shoe-design-label').css('display', 'none');
      $('#shoe-size-label').css('display', 'none');
      $('.order-field').css('margin', '0');
    }
    else if (selectedValue == 'order') {
      $('#shoe').css('display', 'block');
      $('#shoe-design').css('display', 'block');
      $('#shoe-size').css('display', 'block');
      $('#shoe-label').css('display', 'block');
      $('#shoe-design-label').css('display', 'block');
      $('#shoe-size-label').css('display', 'block');
      $('.order-field').css('margin-bottom', '15px');
      $('.form-row').css('margin', '10px auto');
    }
  });

  $('.order-button').mouseenter(function(){
    // var buttonBackground = $(this).css('background');
    // $(buttonBackground).fadeTo(1000, 0.4);
    $(this).animate({backgroundColor: 'rgba(0, 0, 0, 0.4)'}, 1000);

    // $(buttonBackground).fadeIn('slow', function(){
    //   $(this).css('background', 'rgba(0, 0, 0, 0.4)');
    // });


  });

  $('.order-button').mouseleave(function(){
    $(this).css('background', 'rgba(0, 0, 0, 0.7)');
  });

    // Detect objectFit support
  if('objectFit' in document.documentElement.style === false) {

    // assign HTMLCollection with parents of images with objectFit to variable
    var container = document.getElementsByClassName('bg-video');

    // Loop through HTMLCollection
    for(var i = 0; i < container.length; i++) {

      // Asign image source to variable
      var imageSource = container[i].querySelector('img').src;

      // Hide image
      container[i].querySelector('img').style.display = 'none';

      // Add background-size: cover
      container[i].style.backgroundSize = 'cover';

      // Add background-image: and put image source here
      container[i].style.backgroundImage = 'url(' + imageSource + ')';

      // Add background-position: center center
      container[i].style.backgroundPosition = 'center center';
    }
  }
  else {
    // You don't have to worry
    console.log('No worries, your browser supports objectFit')
  }

});
