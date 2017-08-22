$("#pulse").click(function() {
    window.open(videosArray[Math.floor(Math.random() * videosArray.length)]);
});

var botsModal = $("#bots-modal").iziModal();
$("#bots-link").click(function() {
    botsModal.iziModal("open");
});

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

var videosArray = 
["https://www.youtube.com/watch?v=G7n-WrYo3-U",
"https://www.youtube.com/watch?v=nLvhMOLKb-o",
"https://www.youtube.com/watch?v=64ixCkz4kJ0",
"https://www.youtube.com/watch?v=CWimUIe6HhU",
"https://www.youtube.com/watch?v=7csxLRm2yvM",
"https://www.youtube.com/watch?v=HRf5gMTDdcU",
"https://www.youtube.com/watch?v=8UpcXEureb00",
"https://www.youtube.com/watch?v=8XOa5XXCliU",
"https://www.youtube.com/watch?v=RrATyIJnNPM",
"https://www.youtube.com/watch?v=isgIxk6sgRk",
"https://www.youtube.com/watch?v=sSEhwqWYnAI",
"https://www.youtube.com/watch?v=t6q5_7fVjEg",
"https://www.youtube.com/watch?v=7eKv4BEujFU",
"https://www.youtube.com/watch?v=py44k46RR_0",
"https://www.youtube.com/watch?v=qN80_7rNmcE",
"https://www.youtube.com/watch?v=y9OGJQNWOGo",
"https://www.youtube.com/watch?v=FPMyVLXWKJE",
"https://www.youtube.com/watch?v=YJkXOggXrBM",
"https://www.youtube.com/watch?v=d0pIXK1Ru0Y",
"https://www.youtube.com/watch?v=OiqfGVmBD6U",
"https://www.youtube.com/watch?v=V_L-miRT16s",
"https://www.youtube.com/watch?v=aPD9I4aI500",
"https://www.youtube.com/watch?v=zUdamaSzBsc",
"https://www.youtube.com/watch?v=SThSxJPtG84",
"https://www.youtube.com/watch?v=XMe0PTYDnXw",
"https://www.youtube.com/watch?v=tyTz_-EQOXE",
"https://www.youtube.com/watch?v=eDxa2tmbhSg",
"https://www.youtube.com/watch?v=shCYA2J-De8",
"https://www.youtube.com/watch?v=1suebohSF1w",
"https://www.youtube.com/watch?v=X2ieFd-o4Js",
"https://www.youtube.com/watch?v=j023EroDYIk",
"https://www.youtube.com/watch?v=1QU4MfdDA80",
"https://www.youtube.com/watch?v=gFvZDKgUF5Q",
"https://www.youtube.com/watch?v=oB31ksABaR4",
"https://www.youtube.com/watch?v=AZdgxWV4SgU",
"https://www.youtube.com/watch?v=3pqvkNMo43c",
"https://www.youtube.com/watch?v=-P5fv3IL0nw",
"https://www.youtube.com/watch?v=HkQ7_oWqKpc",
"https://www.youtube.com/watch?v=y2NYorrRqxI",
"https://www.youtube.com/watch?v=RnAMDg7IVWs",
"https://www.youtube.com/watch?v=0FWx3OPOu5U",
"https://www.youtube.com/watch?v=Sezhr7jbrlk",
"https://www.youtube.com/watch?v=Cn9yiGW-mf"
]