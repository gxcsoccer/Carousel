seajs.config({
    alias: {
        'juicer': 'lib/juicer',
        'Carousel': 'src/Carousel'
    },
    base: '.',
    charset: 'utf-8'
});

define(function(require) {
    var Carousel = require('Carousel'),
        car = new Carousel('carousel', {
            setItem: function($el, data) {
                $el.text(data);
            }
        });

    car.show([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});