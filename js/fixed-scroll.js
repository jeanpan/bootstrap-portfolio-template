;(function($) {
    'use strict';

    $.fn.fixedScroll = function(settings) {

        var _defaultSettings = {
                section: '.content > section',
                navLink: '.content > nav > li',
                speed: 'slow',
                activeClass: 'current'
            },
            _settings = $.extend(_defaultSettings, settings),
            _handler = function() {

                console.log(_settings);

                var container = this,
                    $section = $(_settings.section, container),
                    $navLink = $(_settings.navLink, container);

                $navLink.on('click', function() {
                    $('html body').animate({
                        scrollTop: $($.attr(this, 'href')).offset().top
                    }, _settings.speed);
                    return false;
                });

                $(window).scroll(function(event) {
                    var windowHeight = $(window).height(),
                        windowScrollTop = $(window).scrollTop(),
                        currentLink = Math.round(windowScrollTop / windowHeight);

                    $section.each(function(index) {
                        console.log(index);
                        if (index !== currentLink) {
                            $navLink.eq(index).removeClass(_settings.activeClass);
                        } else {
                            $navLink.eq(index).addClass(_settings.activeClass);
                        }
                    });
                });
            };

        return this.each(_handler);
    };

})(jQuery);
