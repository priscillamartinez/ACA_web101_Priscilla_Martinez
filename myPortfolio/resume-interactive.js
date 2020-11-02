/*javascript for animations in resume*/
function hide_image(id) {
    document.getElementById(id).style.display = 'none';
}

var i = 0;
var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta maiores nisi porro consectetur ullam accusamus velit nostrum eius magni nisi porro consectetur ullam accusamus velit nostrum eius magni.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("info").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function changeColor() {
    document.getElementById("symbol").style.color = "red";
  }
