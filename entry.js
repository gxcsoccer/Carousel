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

    window.addEventListener('keydown', function(evt) {
        var which = evt.which + '';
        switch(which) {
            case '37':
                car.prev();
                break;
            case '39':
                car.next();
                break;
        }
        console.log(which);
    }, false);
});