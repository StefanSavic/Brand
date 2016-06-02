console.log('\'Allo \'Allo!');
$('.grid').masonry({
// options
columnWidth:'.grid-sizer',
gutter:'.gutter-sizer',
itemSelector:'.grid-item',
percentPosition:true
});

$('.grid-item').on('mouseenter',function(){
	$('.hover').css('top', '0');
})
$('.grid-item').on('mouseleave',function(){
	$('.hover').css('top', '-100%');
})