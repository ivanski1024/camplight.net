$(document).ready(function(){
  function showFlybox(){
    $(".blackoverlay").css('display', 'block');
    $(".blackoverlay").animate({ opacity: .8 }, 600 , function(){
      $(".flybox").css('display', 'block');
      $(".flybox").animate({opacity: 1 }, 600);
    });
  }
  function closeFlybox(){
    $(".flybox").animate({opacity: 0 }, 600, function(){
      $(".flybox").css('display', 'none');
      $(".blackoverlay").animate({ opacity: 0 }, 600, function(){$(".blackoverlay").css('display', 'none');});
    });
  }
  
  $('.contacts').click(showFlybox);
  $('.flybox_close').click(closeFlybox);

});
