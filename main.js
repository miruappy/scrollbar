$(function(){
	var outerScrollbar = new scrollbar('body', '.scroller', '.scrollbar');
	var innerScrollbar = new scrollbar('.container', '.scroller', '.scrollbar');

	outerScrollbar.init();
	innerScrollbar.init();
	innerScrollbar.setEffect();
});