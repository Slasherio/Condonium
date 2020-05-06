function checkboxCounter() {
    var limit = 2;
    var counter = 0;
    var amount;
    var prefix;
    $('.js-checkbox label').each(function() {
        $(this).children().on('change', function(e) {
            amount = $(this).parent('label').find('input').is(':checked') ? 1 : -1;
            counter = counter + amount;

            //check prevent
            if ( counter > limit ) {
                this.checked = false;
                counter = 2;
            }

            //add checked class and data attr to label
            prefix = counter == 1 ? '1st' : '2nd';
            if ( this.checked ) {
                $(this).parent('label').addClass('mod-checked');
                $(this).parent('label').attr('data-order', prefix);
            } else {
                $(this).parent('label').removeClass('mod-checked');
                $(this).parent('label').attr('data-order', '');
            }

            //change amount of checked inputs
            $('.js-counter').html(counter);
        })
    })
}

$('.js-help-toggler').each(function() {
    $(this).on('click', function() {
        $('.js-help').toggleClass('mod-visible');
    })
})

$(window).on('load', function() {
    checkboxCounter();
})