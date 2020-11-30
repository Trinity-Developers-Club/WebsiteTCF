var i = 0;

function morelast() {
    if (!i) {
        document.getElementById("extralast").style.display = "block";
        document.getElementById("morelast").innerHTML = "&lt;&lt; Show less";
        i = 1;
    } else {
        document.getElementById("extralast").style.display = "none";
        document.getElementById("morelast").innerHTML = "Show More &gt;&gt;";
        i = 0;
    }
}
var j = 0;

function morerecent() {
    if (!j) {
        document.getElementById("extrarecent").style.display = "block";
        document.getElementById("morerecent").innerHTML = "&lt;&lt; Show less";
        j = 1;
    } else {
        document.getElementById("extrarecent").style.display = "none";
        document.getElementById("morerecent").innerHTML = "Show More &gt;&gt;";
        j = 0;
    }
}
var k = 0;

function moreupcoming() {
    if (!k) {
        document.getElementById("extraupcoming").style.display = "block";
        document.getElementById("moreupcoming").innerHTML = "&lt;&lt; Show less";
        k = 1;
    } else {
        document.getElementById("extraupcoming").style.display = "none";
        document.getElementById("moreupcoming").innerHTML = "Show More &gt;&gt;";
        k = 0;
    }
}