$(document).ready(function(){

	// Мобильное меню 
	$(".fa-bars").click(function(m){
		m.preventDefault();
		$(".nav").slideToggle(500);
	});
	// Конец Мобильное меню

    $(".icons_item").hover(function(e){
        e.preventDefault();
        $( ".dark-bg" ).fadeIn(500);
        
        // $( ".icons_item span" ).css('color','white');
        $(this).mouseleave(function(m){
             m.preventDefault();
            $( ".dark-bg" ).fadeOut(500); 
            // $( ".icons_item span" ).css('color','black');   
        });
    });

    $(".icons_item1").hover(function(e){
        $( ".sloi_item__1" ).css('z-index','9999');
        $(this).mouseleave(function(m){
              m.preventDefault();
            $( ".sloi_item__1" ).css('z-index','5');
         });
    });

    $(".icons_item2").hover(function(e){
        $( ".sloi_item__2" ).css('z-index','9999');
          $(this).mouseleave(function(m){
              m.preventDefault();
            $( ".sloi_item__2" ).css('z-index','4');
        });
    });

    $(".icons_item3").hover(function(e){
        $( ".sloi_item__3" ).css('z-index','9999');
          $(this).mouseleave(function(m){
              m.preventDefault();
            $( ".sloi_item__3" ).css('z-index','3');
        });
    });

    $(".icons_item4").hover(function(e){
        $( ".sloi_item__4" ).css('z-index','9999');
          $(this).mouseleave(function(m){
              m.preventDefault();
            $( ".sloi_item__4" ).css('z-index','2');
        });
    });

    $(".icons_item5").hover(function(e){
        $( ".sloi_item__5" ).css('z-index','9999');
          $(this).mouseleave(function(m){
              m.preventDefault();
            $( ".sloi_item__5" ).css('z-index','1');
        });
    });

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
