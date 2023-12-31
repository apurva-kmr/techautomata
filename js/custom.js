jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },10000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 10000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});


	$("#owl-tech11, #owl-tech18").owlCarousel({

    autoplay: true,
    autoplayTimeout: 4000,
    navigation: false,
    loop: true,
    animateOut: 'pulse',
    animateIn: 'pulse',
    responsiveRefreshRate : 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});
$("#owl-tech12").owlCarousel({

    autoplay: true,
    autoplayTimeout: 4000,
    navigation: false,
    loop: true,
    animateOut: 'pulse',
    animateIn: 'pulse',
    responsiveRefreshRate : 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});
$("#owl-tech13").owlCarousel({

    autoplay: true,
    autoplayTimeout: 3000,
    navigation: false,
    loop: true,
    animateOut: 'pulse',
    animateIn: 'pulse',
    responsiveRefreshRate : 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});

$("#owl-tech14, #owl-tech17, #owl-tech19").owlCarousel({

    autoplay: true,
    autoplayTimeout: 4000,
    navigation: false,
    loop: true,
    animateOut: 'pulse',
    animateIn: 'pulse',
    responsiveRefreshRate : 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});

$("#owl-tech15 , #owl-tech16").owlCarousel({

    autoplay: true,
    autoplayTimeout: 3000,
    navigation: false,
    loop: true,
    animateOut: 'pulse',
    animateIn: 'pulse',
    responsiveRefreshRate : 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});


$("#owl-tech21 , #owl-tech22 , #owl-tech23 , #owl-tech24").owlCarousel({

    autoplay: true,
    autoplayTimeout: 3000,
    navigation: false,
    loop: true,
    animateOut: 'pulse',
    animateIn: 'pulse',
    responsiveRefreshRate : 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});


//  Accordin inner page js starts here
$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    } else {
      $(".set > a i")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
      $(this)
        .find("i")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});


//Pagination
	pageSize = 6;

	var pageCount =  $(".line-content").length / pageSize;
    
     for(var i = 0 ; i<pageCount;i++){
        
       $("#pagin").append('<li><a href="#pages">'+(i+1)+'</a></li> ');
     }
        $("#pagin li").first().find("a").addClass("current")
    showPage = function(page) {
	    $(".line-content").hide();
	    $(".line-content").each(function(n) {
	        if (n >= pageSize * (page - 1) && n < pageSize * page)
	            $(this).show();
	    });        
	}
    
	showPage(1);

	$("#pagin li a").click(function() {
	    $("#pagin li a").removeClass("current");
	    $(this).addClass("current");
	    showPage(parseInt($(this).text())) 
	});
