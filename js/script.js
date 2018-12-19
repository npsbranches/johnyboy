$(document).ready(function(){
    $('.preloader').delay(3000).fadeOut(500);
})

new fullpage('#fullpage', {
    scrollHorizontally: true,
    navigation: true,
    anchors:['home', 'concerts', 'albums', 'contacts'],
    
});

$('.btn-down').click(function(){
    fullpage_api.moveSectionDown();
});

$('.btn-bars').click(function(){
    $('.menu ul').toggleClass('active');
    $('.btn-bars').toggleClass('active');
})

$('.menu li a').click(function() {
    $('.menu ul').toggleClass('active');
    $('.btn-bars').toggleClass('active');
})

$('.albums .btn-right').click(function() {
    fullpage_api.moveSlideRight();
}) 
$('.albums .btn-left').click(function() {
    fullpage_api.moveSlideLeft();
}) 
$('.albums .btn-right-desktop').click(function() {
    fullpage_api.moveSlideRight();
}) 
$('.albums .btn-left-desktop').click(function() {
    fullpage_api.moveSlideLeft();
}) 