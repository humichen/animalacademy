$(function(){
      $('.nav-list-item1').click(function(){
        $(this).css('border','5px #A77126 dotted').css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','30px');
      });  
      $('.nav-list-item2').click(function(){
        $(this).css('border','5px #A77126 dotted').css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','30px');
      }); 
      $('.nav-list-item3').click(function(){
        $(this).css('border','5px #A77126 dotted').css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','30px');
      }); 
      $('.nav-list-item4').click(function(){
        $(this).css('border','5px #A77126 dotted').css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','30px');
      }); 
      $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },333);
      });
      $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
          $('#gotop').fadeIn(222);
        } else {
          $('#gotop').stop().fadeOut(222);
        }
      }).scroll();
      
});