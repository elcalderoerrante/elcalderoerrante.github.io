/*------------------
  Preloder
--------------------*/
'use strict';
$(window).on('load', function() {
 	$(".loader").fadeOut();
 	$("#preloder").delay(3000).fadeOut("slow");
 });
 var LOADER_CONTAINER = $("#loader");
 var LOADER_INTERVAL = 1600;
 var LOADERS = [
  ["🌶","Dicing peppers"],
  ["🔪","Sharpening knives"],
  ["👩🏽‍🍳","Starching aprons"],
  ["🥒","Sautéing veggies"],
  ["🍳","Frying eggs"],
  ["🧀","Cutting cheese"],
  ["🥓","Crisping bacon"],
  ["🌽","Shucking corn"],
  ["🍚","Steaming rice"],
  ["🍞","Baking bread"],
  ["🍷","Uncorking wine"],
  ["🍽","Plating dishes"],
  ["🍤","Frying shrimp"],
  ["🥐","Toasting croissants"],
  ["🍋","Deseeding lemons"],
  ["🥕","Peeling carrots"],
  ["🍲","Stirring soups"],
  ["🐸🍵","Spilling tea"],
  ["🍕","Firing pizzas"],
  ["🔥","Lighting burners"],
  ["🥔","Roasting potatoes"],
  ["🤔","Testing tastes"],
  ["🍊","Squeezing oranges"],
  ["💧","Pouring water"],
  ["🍦","Freezing ice cream"],
  ["🍨","Scooping desserts"],
  ["🥗","Mixing salads"],
  ["🥚","Cracking eggs"],
  ["🥞","Stacking pancakes"],
  ["🍒","Putting a cherry on top"],
  ["🍗","Seasoning wings"],
  ["🍅","Crushing tomatoes"],
  ["🍍","Chunking pineapples"],
  ["💖","Adding a pinch of something perfect"],
  ["📝","Writing recipes"],
  ["🗓","Planning menus"],
  ["🌰","Cracking nuts"],
  ["🍿","Popping popcorn"],
  ["🍾","Popping champers"],
  ["🍆","Planting eggs"],
  ["🥑","Mashing avocados"],
  ["🍌","Peeling bananas"],
  ["🍔","Flipping burgers"],
  ["🍻","Clinking glasses"],
  ["🍴","Polishing silverware"],
  ["🍪","Baking cookies"],
  ["🍣","Rolling sushi"],
  ["🍶","Warming sake"],
  ["🍱","Boxing bento"],
  ["🌯","Wrapping burritos"],
  ["☕️","Brewing coffee"],
  ["🍏","Coring apples"],
  ["🌿","Growing herbs"],
  ["🍰","Slicing cakes"],
  ["🍟","Frying fries"],
  ["🍑","Peeling peaches"],
  ["🍛","Spicing curry"],
  ["🌮","Assembling tacos"],
  ["📸","Photographing plates"],
  ["🛎","Dinging bells"],
  ["🍫","Melting chocolate"],
  ["🍜","Cooking ramen"],
  ["🥖","Baking baguettes"],
  ["❄️","Shaving ice"],
  ["🥛","Blending milkshakes"],
  ["🍄","Chopping mushrooms"],
  ["🐟","Searing fish"],
  ["😋","Licking lips"],
  ["🤞🏾","Crossing fingers"],
  ["👊🏿","Bumping fists"],
  ["☝🏽","Throwing in one last thing"],
  ["😙👌","Doing that Italian chef thing"],
  ["👃🏻","Smellin’ smells"],
  ["🍹","Mixing drinks"],
  ["✨","Making magic"],
  ["🌱","Planting seeds"],
  ["⚗️","Testing something new"],
  [" ¯\\_(ツ)_/¯ ", "I dunno"],
  ["¯\\_(ツ)_/¯", "WHAT IS THIS DOING HERE"]
]

 $(document).ready(function() {
   var cycleLoader = function() {
     var index = Math.floor(Math.random() * LOADERS.length);
     var selected = LOADERS[index];
     var selectedEmoji = selected[0];
     var selectedText = selected[1];
     // First transition out the old loader
     setTimeout(function(){
       LOADER_CONTAINER.children().addClass("animateOut");
     }, LOADER_INTERVAL - 300); // This negative value should be the same as $animation-duration in the CSS
     // Then remove the animated out divs
     LOADER_CONTAINER.children(".emoji").last().remove();
     LOADER_CONTAINER.children(".text").last().remove();
     // Then animate in the new one
     LOADER_CONTAINER.append('<div class="emoji">' + selectedEmoji + '</div>');
     LOADER_CONTAINER.append('<div class="text">' + selectedText + '</div>');
   }
   setInterval(cycleLoader, LOADER_INTERVAL);
   cycleLoader(); // Run first time without delay
 });
/*-----------------
    Toggler
-----------------*/
document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});
//--  Search bar Placeholder --//
window.onload = function(){
    document.getElementById('gsc-i-id1').placeholder = 'Buscar recetas';
  };
/*-----------------
    Owl Carousel
-----------------*/
  jQuery(document).ready(function($) {
  "use strict";
  $('#recipe-carousel').owlCarousel( {
  		loop: true,
  		center: true,
  		items: 3,
  		margin: 30,
  		autoplay: true,
  		dots:true,
      nav:true,
  		autoplayTimeout: 8500,
  		smartSpeed: 450,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  		responsive: {
  			0: {
  				items: 1
  			},
  			768: {
  				items: 2
  			},
  			1170: {
  				items: 3
  			}
  		}
  	});
  });
/*------------------
    Scroll to top button
--------------------*/
var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
});
btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});
/*------------------
  Gets current year in footer:
--------------------*/
document.getElementById("year").innerHTML = new Date().getFullYear();
