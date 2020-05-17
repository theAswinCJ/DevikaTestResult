'use strict'

//Preloader
var preloader = $('#spinner-wrapper');
$(window).on('load', function() {
    var preloaderFadeOutTime = 500;

    function hidePreloader() {
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

jQuery(document).ready(function($) {

            //Incremental Coutner
            if ($.isFunction($.fn.incrementalCounter))
                $("#incremental-counter").incrementalCounter();

            //For Trigering CSS3 Animations on Scrolling
            if ($.isFunction($.fn.appear))
                $(".slideDown, .slideUp").appear();

            $(".slideDown, .slideUp").on('appear', function(event, $all_appeared_elements) {
                $($all_appeared_elements).addClass('appear');
            });

            //For Header Appearing in Homepage on Scrolling
            var lazy = $('#header.lazy-load')

            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 200) {
                    lazy.addClass('visible');
                } else {
                    lazy.removeClass('visible');
                }
            });

            //Initiate Scroll Styling
            if ($.isFunction($.fn.scrollbar))
                $('.scrollbar-wrapper').scrollbar();

            if ($.isFunction($.fn.masonry)) {


                var vElem = $('.img-wrapper video');
                var videoCount = vElem.length;
                var vLoaded = 0;

                vElem.each(function(index, elem) {

                    //console.log(elem, elem.readyState);

                    if (elem.readyState) {
                        vLoaded++;

                        if (count == vLoaded) {
                            $('.js-masonry').masonry('layout');
                        }

                        return;
                    }

                    $(elem).on('loadedmetadata', function() {
                        vLoaded++;
                        //console.log('vLoaded',vLoaded, this);
                        if (videoCount == vLoaded) {
                            $('.js-masonry').masonry('layout');
                        }
                    })
                });


                end of `if masonry`
                checking


                //Fire Scroll and Resize Event
                $(window).trigger('scroll');
                $(window).trigger('resize');
            });

        /**
         * function for attaching sticky feature
         **/

        function attachSticky() {
            // Sticky Chat Block
            $('#chat-block').stick_in_parent({
                parent: '#page-contents',
                offset_top: 70
            });

            // Sticky Right Sidebar
            $('#sticky-sidebar').stick_in_parent({
                parent: '#page-contents',
                offset_top: 70
            });

        }


        // Disable Sticky Feature in Mobile
        $(window).on("resize", function() {

            if ($.isFunction($.fn.stick_in_parent)) {
                // Check if Screen wWdth is Less Than or Equal to 992px, Disable Sticky Feature
                if ($(this).width() <= 992) {
                    $('#chat-block').trigger('sticky_kit:detach');
                    $('#sticky-sidebar').trigger('sticky_kit:detach');

                    return;
                } else {

                    // Enabling Sticky Feature for Width Greater than 992px
                    attachSticky();
                }

                // Firing Sticky Recalculate on Screen Resize
                return function(e) {
                    return $(document.body).trigger("sticky_kit:recalc");
                };
            }
        });


        $(document).ready(function() {
            $("#toggle").click(function() {
                var elem = $("#toggle").text();
                if (elem == "Read More") {
                    //Stuff to do when btn is in the read more state
                    $("#toggle").text("Read Less");
                    $("#text").slideDown();
                } else {
                    //Stuff to do when btn is in the read less state
                    $("#toggle").text("Read More");
                    $("#text").slideUp();
                }
            });
        });