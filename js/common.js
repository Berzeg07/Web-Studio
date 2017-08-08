$(document).ready(function(){

    // поп апы

    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
        $(id).css('top',  posTop+50);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).fadeIn(500); 
    });
    $('.window .dd-close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
        $('.window').hide();
    }); 

    $('#mask, .an-exit__krest').click(function () {
        $('#mask').hide();
        $('.window').hide();
    }); 

    $(".form-message").submit(function() { 
        var tel = $(this).find('input[name="phone"]');
        var empty = false;
        if (tel.val() == ""){
            empty = true;
        }
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{
            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "/message.php", 
                data: form_data,
                success: function() {
                    cleanTnanks(this);
                }
            });
        }
        return false;
    }); 

    function cleanTnanks(form){
        $('input[type="text"]').removeClass("error-input");
        $("input[type=text], textarea").val("");
        $('.window').hide();
        $('a[href=#thanks]').trigger('click');

    };

	// Мобильное меню 
	$(".fa-bars").click(function(m){
		m.preventDefault();
		$(".nav").slideToggle(500);
	});
	// Конец Мобильное меню


    $('.tab .icons_item a').hover(function (e) {      
      var tab = $(this).attr('href');     
      $('.block-2_txt').removeClass('active');            
      $('.block-2_txt').not(tab).css('height','0');
      $(tab).addClass('active');
  });

    $('.tab a').hover(function (e) {      
      var tab = $(this).attr('href');     
      $('.block-2_txt').removeClass('active');            
      $('.block-2_txt').not(tab).css('height','0');
      $(tab).addClass('active');
  });

    /* слои
    =================================*/

    $('.sloi_item__1').hover(function(){
        $('.ico5').css('display','none');
        $('.ico5-2').css('display','inline-block');
        $(this).mouseleave(function(){
            $('.ico5').css('display','inline-block');
            $('.ico5-2').css('display','none');
        });
    });

    $('.sloi_item__2').hover(function(){
       $('.ico4').css('display','none');
       $('.ico4-2').css('display','inline-block');
       $(this).mouseleave(function(){
        $('.ico4').css('display','inline-block');
        $('.ico4-2').css('display','none');
    });
   });

    $('.sloi_item__3').hover(function(){
       $('.ico4').css('display','none');
       $('.ico4-2').css('display','inline-block');
       $(this).mouseleave(function(){
        $('.ico4').css('display','inline-block');
        $('.ico4-2').css('display','none');
    });
   });

    $('.sloi_item__4').hover(function(){
      $('.ico3').css('display','none');
      $('.ico3-2').css('display','inline-block');
      $(this).mouseleave(function(){
        $('.ico3').css('display','inline-block');
        $('.ico3-2').css('display','none');
    });

  });

    $('.sloi_item__5').hover(function(){
        $('.ico1').css('display','none');
        $('.ico1-2').css('display','inline-block');

        $('.ico2').css('display','none');
        $('.ico2-2').css('display','inline-block');
        $(this).mouseleave(function(){
            $('.ico1').css('display','inline-block');
            $('.ico1-2').css('display','none');
            $('.ico2').css('display','inline-block');
            $('.ico2-2').css('display','none');
        });

    });

//---------------------------------------------

$('.icons_item__inner1, .sloi_item__5').hover(function () { 
    $('.sloi_item__5').css('padding-left','30px');
    $('.sloi_item__1').css('top','-20px');
    $('.sloi_item__2').css('top','40px');
    $('.sloi_item__3').css('top','100px');
    $('.sloi_item__4').css('top','160px');
    $(this).mouseleave(function(){
        $('.sloi_item__5').css('padding-left','0px');
        $('.sloi_item__1').css('top','0px');
        $('.sloi_item__2').css('top','60px');
        $('.sloi_item__3').css('top','120px');
        $('.sloi_item__4').css('top','180px');
    });

});

$('.icons_item__inner2, .sloi_item__5').hover(function () { 
    $('.sloi_item__5').css('padding-left','30px');
    $('.sloi_item__1').css('top','-20px');
    $('.sloi_item__2').css('top','40px');
    $('.sloi_item__3').css('top','100px');
    $('.sloi_item__4').css('top','160px');
    $(this).mouseleave(function(){
        $('.sloi_item__5').css('padding-left','0px');
        $('.sloi_item__1').css('top','0px');
        $('.sloi_item__2').css('top','60px');
        $('.sloi_item__3').css('top','120px');
        $('.sloi_item__4').css('top','180px');
    });

});

$('.icons_item__inner3, .sloi_item__4').hover(function () { 
    $('.sloi_item__4').css('padding-left','30px');
    $('.sloi_item__1').css('top','-20px');
    $('.sloi_item__2').css('top','40px');
    $('.sloi_item__3').css('top','100px');
    $('.sloi_item__5').css('bottom','-3px');
    $(this).mouseleave(function(){
        $('.sloi_item__4').css('padding-left','0px');
        $('.sloi_item__1').css('top','0px');
        $('.sloi_item__2').css('top','60px');
        $('.sloi_item__3').css('top','120px');
        $('.sloi_item__5').css('bottom','37px');
    });

});

$('.sloi_item__2').hover(function () { 
  $('.sloi_item__2').css('padding-left','30px');
  $('.sloi_item__1').css('top','-20px');
  $('.sloi_item__3').css('top','160px');
  $('.sloi_item__4').css('top','220px');
  $('.sloi_item__5').css('bottom','-3px');
  $(this).mouseleave(function(){
    $('.sloi_item__2').css('padding-left','0px');
    $('.sloi_item__1').css('top','0px');
    $('.sloi_item__3').css('top','120px');
    $('.sloi_item__4').css('top','180px');
    $('.sloi_item__5').css('bottom','37px');
});
});

$('.sloi_item__3').hover(function () { 
    $('.sloi_item__3').css('padding-left','30px');
    $('.sloi_item__1').css('top','-20px');
    $('.sloi_item__2').css('top','40px');
    $('.sloi_item__4').css('top','220px');
    $('.sloi_item__5').css('bottom','-3px');
    $(this).mouseleave(function(){
        $('.sloi_item__3').css('padding-left','0px');
        $('.sloi_item__1').css('top','0px');
        $('.sloi_item__2').css('top','60px');
        $('.sloi_item__4').css('top','180px');
        $('.sloi_item__5').css('bottom','37px');
    });
});

$('.icons_item__inner4 ').hover(function () { 
    $('.sloi_item__2').css('padding-left','30px');
    $('.sloi_item__1').css('top','-20px');
    $('.sloi_item__3').css('top','160px');
    $('.sloi_item__4').css('top','220px');
    $('.sloi_item__5').css('bottom','-3px');
    $(this).mouseleave(function(){
        $('.sloi_item__2').css('padding-left','0px');
        $('.sloi_item__1').css('top','0px');
        $('.sloi_item__3').css('top','120px');
        $('.sloi_item__4').css('top','180px');
        $('.sloi_item__5').css('bottom','37px');
    });
    $('.sloi_item__3').css('padding-left','30px');
    $('.sloi_item__1').css('top','-20px');
    $('.sloi_item__2').css('top','40px');
    $('.sloi_item__4').css('top','220px');
    $('.sloi_item__5').css('bottom','-3px');
    $(this).mouseleave(function(){
        $('.sloi_item__3').css('padding-left','0px');
        $('.sloi_item__1').css('top','0px');
        $('.sloi_item__2').css('top','60px');
        $('.sloi_item__4').css('top','180px');
        $('.sloi_item__5').css('bottom','37px');
    });

});

$('.icons_item__inner5, .sloi_item__1').hover(function () { 
    $('.sloi_item__1').css('padding-left','30px');
    $('.sloi_item__2').css('top','80px');
    $('.sloi_item__3').css('top','140px');
    $('.sloi_item__4').css('top','200px');
    $('.sloi_item__5').css('bottom','17px');
    $(this).mouseleave(function(){
        $('.sloi_item__1').css('padding-left','0px');
        $('.sloi_item__2').css('top','60px');
        $('.sloi_item__3').css('top','120px');
        $('.sloi_item__4').css('top','180px');
        $('.sloi_item__5').css('bottom','37px');
    });
});

    // $(".icons_item").hover(function(e){
    //     e.preventDefault();
    //     $( ".dark-bg" ).fadeIn(500);

    //     // $( ".icons_item span" ).css('color','white');
    //     $(this).mouseleave(function(m){
    //          m.preventDefault();
    //         $( ".dark-bg" ).fadeOut(500); 
    //         // $( ".icons_item span" ).css('color','black');   
    //     });
    // });

    // $(".icons_item1").hover(function(e){
    //     $( ".sloi_item__1" ).css('z-index','9999');
    //     $(this).mouseleave(function(m){
    //           m.preventDefault();
    //         $( ".sloi_item__1" ).css('z-index','5');
    //      });
    // });

    // $(".icons_item2").hover(function(e){
    //     $( ".sloi_item__2" ).css('z-index','9999');
    //       $(this).mouseleave(function(m){
    //           m.preventDefault();
    //         $( ".sloi_item__2" ).css('z-index','4');
    //     });
    // });

    // $(".icons_item3").hover(function(e){
    //     $( ".sloi_item__3" ).css('z-index','9999');
    //       $(this).mouseleave(function(m){
    //           m.preventDefault();
    //         $( ".sloi_item__3" ).css('z-index','3');
    //     });
    // });

    // $(".icons_item4").hover(function(e){
    //     $( ".sloi_item__4" ).css('z-index','9999');
    //       $(this).mouseleave(function(m){
    //           m.preventDefault();
    //         $( ".sloi_item__4" ).css('z-index','2');
    //     });
    // });

    // $(".icons_item5").hover(function(e){
    //     $( ".sloi_item__5" ).css('z-index','9999');
    //       $(this).mouseleave(function(m){
    //           m.preventDefault();
    //         $( ".sloi_item__5" ).css('z-index','1');
    //     });
    // });

    // Fancybox
    $("a[rel=group]").fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'over',
        'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 

});//END READY
