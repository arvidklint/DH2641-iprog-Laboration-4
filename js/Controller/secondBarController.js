var SecondBarController = function(view, model) {
	view.backButton.click(function() {
		// $('#application').empty();
		// header($('#application'));
		// mainRow($('#application'));
		// MyDinner($('#mainRow'), model);
		// $('#mainRow').append('<div class="col-xs-9" id="meinFrame"></div>');
		// SelectDish($('#meinFrame'), model);
		$('#mainRow').empty();
		myDinnerInstance = new MyDinner($('#mainRow'), model);
		$('#mainRow').append('<div class="col-xs-9" id="meinFrame"></div>');
		selectDishInstance = new SelectDish($('#meinFrame'), model);
	});
}