$(document).ready(function(){

	// Мобильное меню 
	$(".fa-bars").click(function(m){
		m.preventDefault();
		$(".nav").slideToggle(500);
	});
	// Конец Мобильное меню

    $(".icons_item__inner1").hover(function(e){
        e.preventDefault();
        $(".txt-2").removeClass("active");
        $(".txt-3").removeClass("active");
        $(".txt-4").removeClass("active");
        $(".txt-5").removeClass("active");

        $(".txt-1").addClass("active");
    });
    $(".icons_item__inner2").hover(function(e){
        e.preventDefault();
        $(".txt-1").removeClass("active");
        $(".txt-3").removeClass("active");
        $(".txt-4").removeClass("active");
        $(".txt-5").removeClass("active");
        $(".txt-2").addClass("active");  
    });
    $(".icons_item__inner3").hover(function(e){
        e.preventDefault();
        $(".one-t").removeClass("active");
        $(".two-t").removeClass("active");
        $(".three-t").addClass("active");
    });


    // $('.tab a').hover(function(e) {
    //     e.preventDefault();

    //     var tab = $(this).attr('href');

    //      $('.block-2_txt').not(tab).css({'display':'none'});

    //     // $(tab).css({'display':'block'});     
    //     $(tab).fadeIn(400);  ;     
    // });

    // $('.tab a:first').click();

  //   $(".icons_item1").hover(function(e){
  //       e.preventDefault();
  //       $( ".txt-1" ).fadeIn(500);
  //       $( ".txt-3" ).css("display","none");
  //       $( ".txt-2" ).css("display","none");
  //       $( ".txt-4" ).css("display","none");
  //       $( ".txt-5" ).css("display","none");
  // });

  //   $(".icons_item2").hover(function(e){
  //       e.preventDefault();
  //       $( ".txt-2" ).fadeIn(500);
  //       $( ".txt-3" ).css("display","none");
  //       $( ".txt-1" ).css("display","none");
  //       $( ".txt-4" ).css("display","none");
  //       $( ".txt-5" ).css("display","none");
  //       $(this).mouseleave(function(e){
  //         e.preventDefault();
  //         $( ".txt-2" ).css("display","none");
  //         $( ".txt-1" ).fadeIn(500);
  //     });
  // });

  //   $(".icons_item3").hover(function(m){
  //       m.preventDefault();
  //       $( ".txt-3" ).fadeIn(500);
  //       $( ".txt-1" ).css("display","none");
  //       $( ".txt-2" ).css("display","none");
  //       $( ".txt-4" ).css("display","none");
  //       $( ".txt-5" ).css("display","none");
  //     //   $(this).mouseleave(function(m){
  //     //     m.preventDefault();
  //     //     $( ".txt-3" ).css("display","none");
  //     //     $( ".txt-1" ).fadeIn(500);
  //     // });
  // });

  //   $(".icons_item4").hover(function(e){
  //       e.preventDefault();
  //       $( ".txt-4" ).fadeIn(500);
  //       $( ".txt-1" ).css("display","none");
  //       $( ".txt-2" ).css("display","none");
  //       $( ".txt-3" ).css("display","none");
  //       $( ".txt-5" ).css("display","none");
  //     //   $(this).mouseleave(function(m){
  //     //     m.preventDefault();
  //     //     $( ".txt-4" ).css("display","none");
  //     //     $( ".txt-1" ).fadeIn(500);
  //     // });
  // });

  //   $(".icons_item5").hover(function(e){
  //       e.preventDefault();
  //       $( ".txt-5" ).fadeIn(500);
  //       $( ".txt-1" ).css("display","none");
  //       $( ".txt-2" ).css("display","none");
  //       $( ".txt-3" ).css("display","none");
  //       $( ".txt-4" ).css("display","none");
  //     //   $(this).mouseleave(function(m){
  //     //     m.preventDefault();
  //     //     $( ".txt-5" ).css("display","none");
  //     //     $( ".txt-1" ).fadeIn(500);
  //     // });
  // });




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
