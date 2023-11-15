(function () {
    'use strict';

    // Prefix helper
    function getCss3Prop(prefixProp) {
        var element = document.documentElement;
        var prefix = ['-o-', '-webkit-', '-moz-', ''];

        function camelCase(str) {
            return str.replace(/\-([a-z])/gi, function (match, $1) {
                return $1.toUpperCase();
            });
        }

        for (var i = prefix.length - 1; i >= 0; i--) {
            var prefixedProp = camelCase(prefix[i] + prefixProp);
            if (prefixedProp in element.style) {
                return prefixedProp;
            }
        }

        return false;
    }

    var transform = getCss3Prop('transform');
    var transitionDuration = getCss3Prop('transition-duration');

    var PLUGINNAME = 'WDCarusel';

    function WDCarusel(element, options) {
        if (!transform) {
            throw new Error('Your browser does not support transform');
        }

        options = Object.assign({
            itemPadding: 5,
            infinite: false,
            autoplay: false,
            autoplayDelay: 4000,
            stopInHover: false,
            containerNav: '',
            itemsCount: '',
            responsive: [
                { breakpoint: 1170, items: 5 },
                { breakpoint: 960, items: 4 },
                { breakpoint: 768, items: 3 },
                { breakpoint: 480, items: 2 },
                { breakpoint: 320, items: 1 }
            ]
        }, options);

        var container = document.querySelector(element);
        var items = container.querySelectorAll('.wd-carusel__item');
        var itemsCount = items.length;
        var arrowsTemplate = '<span class="wd-carusel__nav--icon wd-carusel__nav--left">' + options.arrowLeft + '</span>' +
            '<span class="wd-carusel__nav--icon wd-carusel__nav--right">' + options.arrowRight + '</span>';
        var containerWidth;
        var itemsWidth;
        var wrapWidth;
        var wrap;
        var _items;
        var position = 0;
        var interval = null;

        function dimensions() {
            containerWidth = container.offsetWidth;
            itemsWidth = containerWidth / _items;
            wrapWidth = (itemsWidth + (options.itemPadding * 2)) * itemsCount;

            for (var i = 0; items.length > i; i++) {
                var item = items[i];
                item.style.width = itemsWidth + 'px';
                item.style.padding = options.itemPadding + 'px';
            }

            position = 0;
            wrap.style.width = wrapWidth + 'px';
            wrap.style[transitionDuration] = '0s';
            wrap.style[transform] = 'translate(0, 0)';
            setTimeout(function () {
                wrap.style[transitionDuration] = '';
            }, 10);
        }

        function autoplay() {
            if (interval) clearInterval(interval);

            interval = setInterval(function () {
                slideTo('next');
            }, options.autoplayDelay);
        }

        function slideTo(dir) {
            var end = -itemsWidth * (itemsCount - _items);

            if (dir === 'prev') {
                if (options.infinite && position === 0) {
                    position = end;
                } else {
                    position = Math.min(position + itemsWidth * _items, 0);
                }
            } else {
                if (options.infinite && position === end) {
                    position = 0;
                } else {
                    position = Math.max((position - itemsWidth * _items), end);
                }
            }

            wrap.style[transform] = 'translate(' + position + 'px, 0)';
        }

        function navigation(event) {
            var target = event.target;
            if (target.classList.contains('wd-carusel__nav--left')) {
                slideTo('prev');
            } else if (target.classList.contains('wd-carusel__nav--right')) {
                slideTo('next');
            }
        }

        // Bind events using event delegation
        container.addEventListener('click', navigation);

        if (options.autoplay) {
            if (options.stopInHover) {
                container.addEventListener('mouseenter', function () {
                    if (interval) clearInterval(interval);
                });
                container.addEventListener('mouseleave', function () {
                    autoplay();
                });
            }

            autoplay();
        }

        if (itemsCount <= _items) {
            container.style.display = 'none';
        }

        wrap = document.createElement('div');
        wrap.classList.add('wd-carusel__wrap');
        for (var i = 0; items.length > i; i++) {
            var item = items[i];
            wrap.appendChild(item);
        }
        container.appendChild(wrap);

        for (var i = 0; options.responsive.length > i; i++) {
            if (window.innerWidth >= options.responsive[i].breakpoint) {
                _items = (options.itemsCount !== '') ? options.itemsCount : options.responsive[i].items;
                dimensions();
                break;
            }
        }

    }

    // Usage
    WDCarusel('.wd-carusel', {
        infinite: true,
        autoplay: true,
        autoplayDelay: 4000,
        stopInHover: true,
        itemsCount: 5,
    });

})();
