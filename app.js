
var menuBtn = document.querySelector(".menu");
var navBar = document.querySelector(" .navigation")

$(".menu, .navigation ul li a").on("click", function(){
  navBar.classList.toggle("show")
  menuBtn.classList.toggle("open")
})
$(".navigation ul li a").on("click", function(){
  $("li a").removeClass('active');
  $(this).addClass('active');
})

$(".accordion_container").click(function(){
  $(".accordion_container").children(".accordion_body").slideUp();
  $(".accordion_container").removeClass("change")
  $(".accordion_container").children(".accordion_title").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
  $(this).children(".accordion_body").slideDown();
  $(this).addClass("change")
  $(this).children(".accordion_title").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
})

ScrollReveal().reveal('.fisrt_about, .second_about, .third_about, .classes .row .col-lg-6', {
    origin: 'bottom',
    distance:"40px",
    easing: 'ease-out',
    interval: 300
});
ScrollReveal().reveal('.service_text, .left_box, .contact_form', {
  origin: 'right',
  distance:"10px",
  easing: 'ease-out',
  delay: 300
});
ScrollReveal().reveal('.accordion, .right_box, .contact_details', {
  origin: 'left',
  distance:"10px",
  easing: 'ease-out',
  delay: 300
 
});
ScrollReveal().reveal('.facilities .row .col-lg-3', {
  origin: 'left',
  distance:"10px",
  easing: 'ease-out',
  interval:300,
  delay: 300
 
});
