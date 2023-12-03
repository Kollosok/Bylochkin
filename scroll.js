var boo = document.getElementById("infinite-scroll");
function move() {
  boo.scrollLeft += 1;
}
setInterval(move, 20)