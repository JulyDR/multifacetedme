var navHambBtn = document.querySelectorAll("#hamb-btn");

var check = true;
navHambBtn.forEach(function(btn) {
  btn.onclick = function() {
    var navbar = btn.getAttribute("data-target");
    check = !check;
    if(check){
      document.getElementById("hamb1").classList.toggle('block');
      document.getElementById("hamb1").classList.toggle('hidden');
      document.getElementById("hamb2").classList.toggle('block');
      document.getElementById("hamb2").classList.toggle('hidden');
      document.getElementById(navbar).classList.toggle('hidden');
      document.getElementById(navbar).classList.toggle('flex');
    }else{
      document.getElementById("hamb2").classList.toggle('block');
      document.getElementById("hamb2").classList.toggle('hidden');
      document.getElementById("hamb1").classList.toggle('block');
      document.getElementById("hamb1").classList.toggle('hidden');
      document.getElementById(navbar).classList.toggle('flex');
      document.getElementById(navbar).classList.toggle('hidden');
    }
  };
});

var navDropBtn = document.querySelectorAll("#drop-nav");

navDropBtn.forEach(function(btn) {
  btn.onclick = function() {
    var dropMenu = btn.getAttribute("data-target");
    document.getElementById(dropMenu).classList.toggle('hidden');
    document.getElementById(dropMenu).classList.toggle('block');
  };
});