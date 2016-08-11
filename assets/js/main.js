// css animations while loading
if ("addEventListener" in window) {
    window.addEventListener("load", function() {
        document.body.className = document.body.className.replace(/\bis-loading\b/, "");
    });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? " is-ie" : "");
}

// because the song is too loud idk y
window.onload = function() {
    var backgroundAudio = $("#song");
    backgroundAudio.prop("volume", 0.5);
}

// gif slideshow
function setBg() {
    $.getJSON("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=vaporwave", function(data) {

        var src = $("body").css("background-image");
        var url = src.match(/\((.*?)\)/)[1].replace(/("|")/g, "");
        var img = new Image();

        img.src = data.data.image_original_url.replace(/^http:\/\//i, "https://");;
        img.onload = function() {
            $("body").css("background-image", "url('" + img.src + "')");
            console.log(data);
        }
        if (img.complete) {
            img.onload();
        }
    });
}
setBg();
setInterval(setBg, 5000);


// only show warning one time
var warned = localStorage.getItem("warned");
if (warned === "yes") {
    $("#warning").remove();
}

// warning close button
$(".ok-button").click(function() {
    $("#warning").fadeOut(1000, function() {
        $(this).remove();
        localStorage.setItem("warned", "yes");
    });
});
