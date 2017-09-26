// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
// PLEASE DON'T USE THIS IT'S ABSOLUTELY TERRIBLE. DON'T EVEN THINK ABOUT IT. DO NOT DREAM ABOUT IT. PLEASE NEVER EVER USE THIS.
(function ($) {

    $.fn.xd = function (options) {

        // defaults
        var settings = $.extend({
            "wordClass": "word",
            "letterClass": "letter",
            "spaceClass": "space",
            "initialDelay": 0,
            "increment": 0.01
        }, options);

        // use parentEl instead of 'this' for readability
        var parentEl = this;
        // make words array from sentence
        var words = parentEl.text().split(" ");
        // clear text to prepare for setup
        parentEl.text("");

        $.each(words, function (i, val) {
            // create a div for each word
            var wordEl = $(`<div class="${settings.wordClass}"></div>`).appendTo(parentEl);
            $.each([...val], function (i, val) {
                // for each letter in that word, create a span element
                wordEl.append(`<span class="${settings.letterClass}">${val}</span>`);
            });
            // hacky way to keep spaces
            // actually this entire thing is hacky. oops. please don't use this. it's really terrible.
            if (i !== words.length - 1) {
                wordEl.append(`<span class="${settings.spaceClass}" style="white-space: pre"> </span>`);
            }
        });

        $.each($(parentEl).find(`.${settings.letterClass}`).toArray(), function (i, val) {
            // once setup is done, add an animation delay to each letter span element at the specified increment
            $(val).css("animation-delay", `${settings.initialDelay + (i * settings.increment)}s`);
        });
    };

}(jQuery));