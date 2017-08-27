// bots modal
var botsModal = $("#bots-modal").iziModal();

$("#bots-link").click(function() {
    botsModal.iziModal("open");
});

// lastfm
function updateLfm() {
    $.ajax({
        url: "https://lastfm.tetrafox.pw",
        dataType: "json",
        success: function(data) {
            $("#lfm").text(" I'm currently listening to " + data.track + " by " + data.artist + ".");
        },
        error: function() {
            $("#lfm").remove();
        }
    });
}

updateLfm();
setInterval(updateLfm, 30000);

// videos
var videosArray = 
["https://www.youtube.com/embed/G7n-WrYo3-U?autoplay=1",
"https://www.youtube.com/embed/nLvhMOLKb-o?autoplay=1",
"https://www.youtube.com/embed/64ixCkz4kJ0?autoplay=1",
"https://www.youtube.com/embed/CWimUIe6HhU?autoplay=1",
"https://www.youtube.com/embed/7csxLRm2yvM?autoplay=1",
"https://www.youtube.com/embed/HRf5gMTDdcU?autoplay=1",
"https://www.youtube.com/embed/8UpcXEureb0?autoplay=1",
"https://www.youtube.com/embed/8XOa5XXCliU?autoplay=1",
"https://www.youtube.com/embed/RrATyIJnNPM?autoplay=1",
"https://www.youtube.com/embed/sSEhwqWYnAI?autoplay=1",
"https://www.youtube.com/embed/t6q5_7fVjEg?autoplay=1",
"https://www.youtube.com/embed/7eKv4BEujFU?autoplay=1",
"https://www.youtube.com/embed/py44k46RR_0?autoplay=1",
"https://www.youtube.com/embed/FPMyVLXWKJE?autoplay=1",
"https://www.youtube.com/embed/YJkXOggXrBM?autoplay=1",
"https://www.youtube.com/embed/OiqfGVmBD6U?autoplay=1",
"https://www.youtube.com/embed/V_L-miRT16s?autoplay=1",
"https://www.youtube.com/embed/aPD9I4aI500?autoplay=1",
"https://www.youtube.com/embed/zUdamaSzBsc?autoplay=1",
"https://www.youtube.com/embed/SThSxJPtG84?autoplay=1",
"https://www.youtube.com/embed/XMe0PTYDnXw?autoplay=1",
"https://www.youtube.com/embed/eDxa2tmbhSg?autoplay=1",
"https://www.youtube.com/embed/1suebohSF1w?autoplay=1",
"https://www.youtube.com/embed/X2ieFd-o4Js?autoplay=1",
"https://www.youtube.com/embed/j023EroDYIk?autoplay=1",
"https://www.youtube.com/embed/1QU4MfdDA80?autoplay=1",
"https://www.youtube.com/embed/gFvZDKgUF5Q?autoplay=1",
"https://www.youtube.com/embed/AZdgxWV4SgU?autoplay=1",
"https://www.youtube.com/embed/3pqvkNMo43c?autoplay=1",
"https://www.youtube.com/embed/-P5fv3IL0nw?autoplay=1",
"https://www.youtube.com/embed/HkQ7_oWqKpc?autoplay=1",
"https://www.youtube.com/embed/RnAMDg7IVWs?autoplay=1",
"https://www.youtube.com/embed/0FWx3OPOu5U?autoplay=1",
"https://www.youtube.com/embed/Sezhr7jbrlk?autoplay=1",
"https://www.youtube.com/embed/WvSKLyQyoFY?autoplay=1",
"https://www.youtube.com/embed/_9R9UmQCBr0?autoplay=1",
"https://www.youtube.com/embed/pB_IZIdmUKY?autoplay=1",
"https://www.youtube.com/embed/erE1Nf2hCmk?autoplay=1",
"https://www.youtube.com/embed/UI0n7ElZkHY?autoplay=1",
"https://www.youtube.com/embed/XDW6pKKI1l4?autoplay=1",
"https://www.youtube.com/embed/djbQoVpsw4E?autoplay=1",
"https://www.youtube.com/embed/KLZNcxstGK0?autoplay=1",
"https://www.youtube.com/embed/XFsuVYJbPV8?autoplay=1",
"https://www.youtube.com/embed/U5sieCeLcmU?autoplay=1",
"https://www.youtube.com/embed/98LoiMZ59Jw?autoplay=1",
"https://www.youtube.com/embed/PToqVW4n86U?autoplay=1",
"https://vine.co/v/e1z3Kh1DI5g/embed/simple?audio=1"];

$("#pulse").click(function() {
    var videoModal = $("#video-modal").iziModal({
        iframe: true,
        width: 1280,
        iframeHeight: 720,
        iframeURL: getVideo(),
        onOpening: function() {
            $(".iziModal-iframe").attr("allowfullscreen", "");
        },
        onClosed: function() {
            $("#video-modal").iziModal("destroy");
        }
    });
    videoModal.iziModal("open");
});

var lastVideo = "";

function getVideo() {
    var video = videosArray[Math.floor(Math.random() * videosArray.length)];
    if (video !== lastVideo) {
        lastVideo = video
        return video;
    } else {
        getVideo();
    }
}