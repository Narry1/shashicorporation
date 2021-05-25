$(function () {

    $('#slider_carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		scroll:{
			items:1,
			duration:700,
			pauseOnHover: true
		},
		auto:true,
		items:{
			visible:{
				min:1,
				max:1
			},
		height:"variable"
		},
		pagination:{
			container:".sliderpager",
			anchorBuilder: false
		}
	});
    
});


$(window).on('load', function () { 
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});



/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
           

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
           

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 90
        }, 1250, "easeInOutExpo");

    });

});


/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});


/* =========================================
             Animation
============================================ */

$(function () {
    new WOW().init();
});



/* =========================================
             STATS
============================================ */

$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});



/* =========================================
             World Map
============================================ */

        
        $(".mapcontainer").mapael(
            {
                "map": {
                    "name": "world_countries",
                    "zoom": {
                        "enabled": false,
                        "maxLevel": 10
                    }
                }, "plots" : {
                "plot-0": {
                    "latitude": "19.136932",
                    "longitude": "72.834934",
                    "value": "15000",
                    "tooltip": {
                        "content": "<b>HeadOffice</b><br>  Mumbai "
                    }
                },
                "plot-1": {
                    "latitude": "26.683630",
                    "longitude": "29.655908",
                    "value": "15000",
                    "tooltip": {
                        "content": "Eygpt"
                    }
                },
                "plot-2": {
                    "latitude": "0.489549",
                    "longitude": "37.896052",
                    "value": "15000",
                    "tooltip": {
                        "content": "Kenya"
                    }
                },
                "plot-3": {
                    "latitude": "29.864111",
                    "longitude": "69.172985",
                    "value": "15000",
                    "tooltip": {
                        "content": "Pakistan"
                    }
                },
                "plot-4": {
                    "latitude": "41.038798",
                    "longitude": "-7.931714",
                    "value": "15000",
                    "tooltip": {
                        "content": "Portugal"
                    }
                },
                "plot-5": {
                    "latitude": "39.550091",
                    "longitude": "-2.993604",
                    "value": "15000",
                    "tooltip": {
                        "content": "Spain"
                    }
                },
                "plot-6": {
                    "latitude": "-20.248504",
                    "longitude": "57.541355",
                    "value": "15000",
                    "tooltip": {
                        "content": "Mauritius"
                    }
                },
                "plot-7": {
                    "latitude": "31.941281",
                    "longitude": "-6.943731",
                    "value": "15000",
                    "tooltip": {
                        "content": "Morocco"
                    }
                },
                "plot-8": {
                    "latitude": "15.757537",
                    "longitude": "101.110561",
                    "value": "15000",
                    "tooltip": {
                        "content": "Thailand"
                    }
                },
                "plot-9": {
                    "latitude": "14.369132",
                    "longitude": "108.268839",
                    "value": "15000",
                    "tooltip": {
                        "content": "Vietnam"
                    }
                },
                "plot-10": {
                    "latitude": "7.616507",
                    "longitude": "80.759967",
                    "value": "15000",
                    "tooltip": {
                        "content": "Sri Lanka"
                    }
                },
                "plot-11": {
                    "latitude": "-10.467042",
                    "longitude": "-75.390010",
                    "value": "15000",
                    "tooltip": {
                        "content": "Peru"
                    }
                },
                "plot-12": {
                    "latitude": "24.024622",
                    "longitude": "-102.845914",
                    "value": "15000",
                    "tooltip": {
                        "content": "Mexico"
                    }
                },
                "plot-13": {
                    "latitude": "7.616507",
                    "longitude": "80.759967",
                    "value": "15000",
                    "tooltip": {
                        "content": "Sri Lanka"
                    }
                },
                "plot-14": {
                    "latitude": "-8.568178",
                    "longitude": "-56.012223",
                    "value": "15000",
                    "tooltip": {
                        "content": "Brazil "
                    }
                },
                "plot-15": {
                    "latitude": "35.060494",
                    "longitude": "102.576742",
                    "value": "15000",
                    "tooltip": {
                        "content": "China "
                    }
                },
                "plot-16": {
                    "latitude": "24.193610",
                    "longitude": "90.058988",
                    "value": "15000",
                    "tooltip": {
                        "content": "Bangladesh"
                    }
                },
                "plot-17": {
                    "latitude": "\r"
                },
                "plot-18": {
                    "latitude": "\r"
                },
                "plot-19": {
                    "latitude": "\r"
                },
                "plot-20": {
                    "latitude": "\r"
                },
                "plot-21": {
                    "latitude": ""
                }
            }
            });



// contact Resume
$(function () {
    function bs_input_file() {
	$(".input-file").before(
		function() {
			if ( ! $(this).prev().hasClass('input-ghost') ) {
				var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
				element.attr("name",$(this).attr("name"));
				element.change(function(){
					element.next(element).find('input').val((element.val()).split('\\').pop());
				});
				$(this).find("button.btn-choose").click(function(){
					element.click();
				});
				$(this).find("button.btn-reset").click(function(){
					element.val(null);
					$(this).parents(".input-file").find('input').val('');
				});
				$(this).find('input').css("cursor","pointer");
				$(this).find('input').mousedown(function() {
					$(this).parents('.input-file').prev().click();
					return false;
				});
				return element;
			}
		}
	);
}
$(function() {
	bs_input_file();
});
});











