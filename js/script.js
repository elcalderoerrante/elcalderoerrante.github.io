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
   ["🌶","Picando chiles"],
   ["🔪","Afilando cuchillos"],
   ["👩🏽‍🍳","Planchando delantales"],
   ["🥒","Salteando vegetales"],
   ["🍳","Friendo huevos"],
   ["🧀","Cortando queso"],
   ["🥓","Friendo tocino"],
   ["🌽","Desgranando maíz"],
   ["🍚","Cociendo arroz"],
   ["🍞","Horneando pan"],
   ["🍷","Descorchando vino"],
   ["🍽","Emplatando"],
   ["🍤","Friendo camarones"],
   ["🥐","Calentando croissants"],
   ["🍋","Exprimiendo limones"],
   ["🥕","Pelando zanahorias"],
   ["🍲","Calentando sopa"],
   ["🐸🍵","Derramando té"],
   ["🍕","Horneando pizza"],
   ["🔥","Encendiendo quemadores"],
   ["🥔","Rostizando papas"],
   ["🤔","Probando la comida"],
   ["🍊","Exprimiendo naranjas"],
   ["💧","Hirviendo agua"],
   ["🍦","Sirviendo helado"],
   ["🍨","Sirviendo postres"],
   ["🥗","Aliñando ensaladas"],
   ["🥚","Rompiendo huevos"],
   ["🥞","Apilando pancakes"],
   ["🍒","Poniendo la cereza al pastel"],
   ["🍗","Condimentando pollo"],
   ["🍅","Aplastando tomates"],
   ["🍍","Cortando piña"],
   ["💖","Poniendo una pizca de amor"],
   ["📝","Escribiendo recetas"],
   ["🗓","Planeando el menú"],
   ["🌰","Cascando nueces"],
   ["🍿","Haciendo palomitas"],
   ["🍾","Abriendo el champagne"],
   ["🍆","Lavando berenjenas"],
   ["🥑","Rebanando aguacates"],
   ["🍌","Pelando plátanos"],
   ["🍔","Volteando hamburgesas"],
   ["🍻","Chocando tasas"],
   ["🍴","Puliendo cubiertos"],
   ["🍪","Horneando galletas"],
   ["🍣","Enrollando sushi"],
   ["🍶","Calentando sake"],
   ["🍱","Empacando bento"],
   ["🌯","Haciendo burritos"],
   ["☕️","Preparando café"],
   ["🍏","Pelando manzanas"],
   ["🌿","Cultivando albahaca"],
   ["🍰","Rebanando pastel"],
   ["🍟","Friendo papas"],
   ["🍑","Lavando duraznos"],
   ["🍛","Preparando curry"],
   ["🌮","Armando tacos"],
   ["📸","Fotografiando platillos"],
   ["🛎","Sonando campanas"],
   ["🍫","Derritiendo chocolate"],
   ["🍜","Cocinando ramen" ],
   ["🥖","Horneando baguettes"],
   ["❄️","Picando hielo"],
   ["🥛","Batiendo malteadas"],
   ["🍄","Cortando hongos"],
   ["🐟","Sellando pescado"],
   ["😋","Saboreando"],
   ["🤞🏾","Cruzando dedos"],
   ["👊🏿","Chocando puños"],
   ["☝🏽","Poniendo el último ingrediente"],
   ["😙👌","Haciendo esa cosa de los chefs italianos"],
   ["👃🏻","Oliendo olores"],
   ["🍹","Batiendo bebidas"],
   ["✨","Haciendo magia"],
   ["🌱","Plantando semillas"],
   ["⚗️","Inventando algo nuevo"],
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
