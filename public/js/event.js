var t = document.getElementsByClassName('persen-munber')[0];
var d = 0;
var time = setInterval(function() {
    if (d > 58) clearInterval(time);
    d++;
    t.innerHTML = d;
}, 12);

$('#circle').circleProgress({
    value: 0.6,
    size: 160,
    startAngle: -0.5 * Math.PI,
    thickness: 3,
    fill: {
        color: "red"
    }
});