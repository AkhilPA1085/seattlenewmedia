function changeWidth() {
    var scroll = (window.scrollY / 15);
    var width = Math.min(20 + scroll, 100);
    var height = Math.min(20 + scroll, 100);
    var top = Math.min(50 + scroll, 100);
    var margin = Math.min(50 + scroll, 100);
    if (window.innerWidth > 990) {
        var left = Math.max(60 - scroll, 20);
    }else{
        var left = Math.max(60 - scroll, 0);
    }

    document.getElementById('expand').style.width = width + '%';
    document.getElementById('expand').style.height = height + '%';
    document.getElementById('expand').style.top = top + '%';
    document.getElementById('expand').style.marginTop = margin + 'px';
    document.getElementById('expand').style.left = left + '%';
}

window.addEventListener("scroll", function() {
    requestAnimationFrame(changeWidth);
});


// TypeWriter
var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('retail')
  .pauseFor(100)
  .deleteChars(10)
  .typeString('wholesale')
  .pauseFor(10)
  .start();
